using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

using Business.Managers;

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
        private readonly LoginManager _loginManager;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, LoginManager loginManager)
        {
            _logger = logger;
            _loginManager = loginManager;
        }
        List<EmployeeData> empList = new List<EmployeeData>();

        //LoginManager loginManager = new LoginManager(); //Tight Coupling is not a good practice

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
            string[] arr = new string[2];
            arr[0] = myObj.uname;
            arr[1] = myObj.pass;
            if (_loginManager.authenticateUser(arr))
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
