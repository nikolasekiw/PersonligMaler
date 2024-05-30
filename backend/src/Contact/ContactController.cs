using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Contact
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            // Your code logic here

            return Ok();
        }
    }
}