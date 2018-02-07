using System.Collections.Generic;
using System.IO;
using DatingApp.API.Models;
using Newtonsoft.Json;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public DataContext context_ { get; }
        public Seed(DataContext context)
        {
            context_ = context;
        }

        public void SeedUsers(){
            var userData = File.ReadAllText("Data/UserSeedData.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach (var user in users)
            {
                // create the password hash
                (var passwordHash, var passwordSalt) = CreatePasswordHash("password");

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username= user.Username.ToLower();

                context_.Users.Add(user);
            }

            context_.SaveChanges();
        }

        private (byte[] passwordHash, byte[] passwordSalt) CreatePasswordHash(string password)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                var passwordSalt = hmac.Key;
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return (passwordHash, passwordSalt);
            }
        }
    }
}