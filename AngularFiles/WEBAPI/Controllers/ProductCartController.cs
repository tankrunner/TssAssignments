using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Web.Http.Cors;
using System.Web.Cors;
using Business.Managers;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace WebApiEmp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors(origins: "http://localhost:4200",headers:"*",methods:"*")]
    public class ProductCartController : Controller
    {
        private readonly CheckQuantity _checkQuantity;
       
        public ProductCartController(CheckQuantity checkQuantity)
        {
            _checkQuantity = checkQuantity;
        }

        List<int> avl = new List<int>();

        List<product> Products = new List<product>() 
        { 
            new product { product_name = "Product 1", product_desc = "P1", product_availableQuantity = 24 },
            new product { product_name = "Product 2", product_desc = "P2", product_availableQuantity = 34 },
            new product { product_name = "Product 3", product_desc = "P3", product_availableQuantity = 34 },
            new product { product_name = "Product 4", product_desc = "P4", product_availableQuantity = 34 },

        };

        [HttpGet]
        public List<product> Get()
        {
            return Products;
        }

        [Route("[action]")]
        [HttpPost]
        public bool productincart([FromBody] productInCart obj)//FromBody headers
        {
            var myobj = obj;
            
            Products.ForEach(x=> avl.Add(x.product_availableQuantity));

            bool b=_checkQuantity.checkQuantity(myobj.addedToCart,avl);
            return b;
          
            //HttpContext.Session.SetString("key", JsonConvert.SerializeObject(added));
            //var getKey = JsonConvert.DeserializeObject(HttpContext.Session.GetString("key"));
            //Debug.WriteLine(getKey);
        }

    }
}
