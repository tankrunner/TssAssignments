using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Diagnostics;
using Newtonsoft.Json;


namespace Products.Services
{
    public class ProductService
    {
        private readonly IHttpClientFactory _clientFactory;
        public bool _paymentStatus;
        public ProductService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }
        List<string> msg = new List<string>();
        int[] added = { 0, 0, 0, 0 };
        List<product> Products = new List<product>()
        {
            new product { product_id=0, product_name = "Product 1", product_desc = "P1", product_availableQuantity = 24 },
            new product { product_id=1, product_name = "Product 2", product_desc = "P2", product_availableQuantity = 34 },
            new product { product_id=2, product_name = "Product 3", product_desc = "P3", product_availableQuantity = 34 },
            new product { product_id=3, product_name = "Product 4", product_desc = "P4", product_availableQuantity = 34 },
        };

        List<int> avl = new List<int>();

        public List<product> getProducts()
        {
            return Products;
        }

        public async Task<List<string>> checkQuantity(int[] addedToCart)
        {
            Products.ForEach(x => avl.Add(x.product_availableQuantity));
    
            for (int i = 0; i < 4; i++)
            {
                if (addedToCart[i] > avl[i])
                {
                    Debug.WriteLine("Insufficient");
                    msg.Add("Insufficient");
                    msg.Add("Order Incomplete");
                    msg.Add("Order could not be completed as we have Insufficient Quantity of Items required. Sorry!");
                    msg.Add("View Cart");
                    return msg;
                }
            }
            var client = _clientFactory.CreateClient();
            var response = await client.GetStringAsync("https://localhost:44356/payment");
            bool paymentStatus = JsonConvert.DeserializeObject<bool>(response);
            
            if(paymentStatus)
            {
                Debug.WriteLine("Payment Succ");
                msg.Add("Success");
                msg.Add("Thank You!");
                msg.Add("Payment Successful.");
                msg.Add("Continue Shopping");
                return msg;
            }
            else
            {
                Debug.WriteLine("Payment Fail");
                msg.Add("Failure");
                msg.Add("Order Incomplete");
                msg.Add("Order could not be completed as your Payment Failed. Please Try Again.");
                msg.Add("View Cart");
                return msg;
            }
        }

        public string[] setMessage(string[] message)
        {
            return message;
        }

        public void addQuantity(int pid)
        {
            added[pid] = 1;
        }

        public int[] getQuantity()
        {
            return added;
        }

        public async void paymentHttpCall()
        {
            var client = _clientFactory.CreateClient();
            var response = await client.GetStringAsync("https://localhost:44356/payment");
            bool extract = JsonConvert.DeserializeObject<bool>(response);
            Debug.WriteLine(response);
            Debug.WriteLine(extract);
            _paymentStatus = extract;
        }
    }
}
