using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[Controller]")]
    public class UsersController : Controller
    {
        private readonly IDatingRepository repo_;

        public UsersController(IDatingRepository repo)
        {
            repo_ = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers(){
            var users = await repo_.GetUsers();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id){
            var user = await repo_.GetUser(id);
            return Ok(user);
        }
    }
}