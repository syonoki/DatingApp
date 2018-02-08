using System;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext context_;

        public AuthRepository(DataContext context) { 
            context_ = context;
        }
            

        public async Task<User> Login(string username, string password)
        {
            var user = await context_.Users.FirstOrDefaultAsync(u => u.Username == username);
            
            if (user == null) return null;
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt)) return null;

            // auto successful
            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)){
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            (var passwordHash, var passwordSalt) = CreatePasswordHash(password);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await context_.Users.AddAsync(user);
            await context_.SaveChangesAsync();

            return user;
        }

        private (byte[] passwordHash, byte[] passwordSalt) CreatePasswordHash(string password)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                var passwordSalt = hmac.Key;
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return (passwordHash, passwordSalt);
            }
        }

        public async Task<bool> UserExists(string username)
        {
            return await context_.Users.AnyAsync(u => u.Username == username);
        }
    }
}