using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products.Services;
using System.Net.Http;
using System.Diagnostics;


namespace Products.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;
        private readonly IHttpClientFactory _clientFactory;
        public ProductController(ProductService productService, IHttpClientFactory clientFactory)
        {
            _productService = productService;
            _clientFactory = clientFactory;
        }
        List<string> msg = new List<string>();

        [HttpGet]
        public List<product> Get()
        {
           return _productService.getProducts();
        }

        [HttpPost]
        public async Task<List<string>> Post([FromBody] productInCart obj)
        {
            var myobj = obj;
            Debug.WriteLine(myobj.addedToCart[0].product_name);
            msg=await _productService.checkQuantity(myobj.addedToCart);
            return msg;
        }

    }
}
