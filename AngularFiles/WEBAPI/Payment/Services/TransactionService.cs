using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using System.Diagnostics;


namespace Payment.Services
{
    public class TransactionService
    {
        private readonly IHttpClientFactory _clientFactory;
        public TransactionService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }
        public async void getProduct()
        {
            var client = _clientFactory.CreateClient();
            var response = await client.GetStringAsync("https://localhost:44356/product");
            var products = JsonConvert.DeserializeObject<List<Product>>(response);

            Debug.WriteLine(products[0].ProductName);
            Debug.WriteLine(products);
        }
    }
}
