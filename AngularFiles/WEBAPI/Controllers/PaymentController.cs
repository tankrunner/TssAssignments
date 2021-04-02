using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiEmp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentController : Controller
    {
        [HttpGet]
        public bool Get()
        {
            bool[] arr = new bool[2];
            arr[0] = true;
            arr[1] = false;
            var rand = new Random();
            var i = rand.Next(0, 2);
            return arr[i];
        }
    }
}
