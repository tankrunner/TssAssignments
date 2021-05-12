using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Products.Services;
using System.Net.Http;
using System.Diagnostics;
using Products.Model;

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
        List<ProductDB> li = new List<ProductDB>();

        [HttpPost]
        public long Post([FromBody] ProductDB obj)
        {
            var myobj = obj;
            Debug.WriteLine(myobj.ProductDesc);
            long id=_productService.AddProduct(myobj);
            return id;
            //string s= _productService.AddProduct(myobj);
            //if (s == "Success")
            //    return Ok();
            //else
            //    return BadRequest(s);
        }

        [HttpGet]
        public async Task<List<ProductDB>> Getall()
        {
            li = await _productService.GetAllProducts();
            return li;
        }

        [Route("[action]")]
        [HttpPost]//cart
        public async Task<List<string>> Cart([FromBody] productInCart obj)
        {
            var myobj = obj;
            Debug.WriteLine(myobj.addedToCart[0].productId);
            Debug.WriteLine(myobj.addedToCart[0].productaddedQuantity);
            msg = await _productService.checkQuantity(myobj.addedToCart);
            return msg;
        }

    }
}