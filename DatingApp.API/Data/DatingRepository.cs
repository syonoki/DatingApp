using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext context_;
        public DatingRepository(DataContext context)
        {
            context_ = context;
        }

        public void Add<T>(T entiry) where T : class
        {
            context_.Add(entiry);
        }

        public void Delete<T>(T entiry) where T : class
        {
            context_.Remove(entiry);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await context_.Users
                .Include(p => p.Photos)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await context_.Users
                .Include(p => p.Photos)
                .ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await context_.SaveChangesAsync() > 0;
        }
    }
}