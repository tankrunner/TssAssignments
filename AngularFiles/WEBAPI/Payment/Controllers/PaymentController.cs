using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Payment.Services;
namespace Payment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly TransactionService _ts;
        public PaymentController(TransactionService ts)
        {
            _ts = ts;
        }
        [HttpGet]
        public bool Get()
        {
            bool[] arr = new bool[2];
            arr[0] = true;
            arr[1] = false;
            var rand = new Random();
            var i = rand.Next(0, 2);
            _ts.getProduct();
            return arr[i];
        }
    }
}
