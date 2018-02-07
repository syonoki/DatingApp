using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers {
    [Authorize]
    [Route("api/[Controller]")]
    public class UsersController : Controller {
        private readonly IDatingRepository repo_;
        private readonly IMapper mapper_;

        public UsersController(IDatingRepository repo, IMapper mapper) {
            repo_ = repo;
            mapper_ = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers() {
            var users = await repo_.GetUsers();
            var usersToReturn = mapper_.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id) {
            var user = await repo_.GetUser(id);

            var userToReturn = mapper_.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
    }
}