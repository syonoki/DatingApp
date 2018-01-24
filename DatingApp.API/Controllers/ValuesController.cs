using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly DataContext context_;

        public ValuesController(DataContext context)
        {
            context_ = context;

        }

        // 동기로 실행할라면 그냥 IActionResult로 하면 되는데
        // 비동기로 할라면 Task<IActionResult>로 하고 비동기 부분에 await + Async method로
        // 바꿔줌.
        [HttpGet]
        public async Task<IActionResult> GetValues(){
            var values = await context_.Values.ToListAsync();
            return Ok(value: values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await context_.Values.FirstOrDefaultAsync(v=>v.Id == id);
            if(value == null){
                return NotFound(id + " is not founded");
            }
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
