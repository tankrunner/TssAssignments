using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace WebApiEmp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }
        List<EmployeeData> empList = new List<EmployeeData>();
        

        [HttpGet("{id}")]
        public List<EmployeeData> Get(int id)
        {
            return empList;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [Route("[action]")]
        [HttpPost]
        public IActionResult GetLogin([FromBody] Login obj)
        {
            var myObj = obj;
            if (myObj.uname == "rg" && myObj.pass == "hello")
            {
                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }
        [HttpPost]
        public List<EmployeeData> Post([FromBody] EmployeeData obj)
        {
            var myobj = obj;
            empList.Add(myobj);
            empList.Add(myobj);
            return empList;
        }
    }
}
