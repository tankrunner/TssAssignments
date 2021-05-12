using System;

namespace Products
{
    public class Product
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }

    public class product
    {
        public int product_id { get; set; }
        public string product_name { get; set; }
        public string product_desc { get; set; }
        public int product_availableQuantity { get; set; }
    }

    public class addedProduct
    {
        public int productId { get; set; }
        public int productaddedQuantity { get; set; }
    }
    public class productInCart
    {
        public addedProduct[] addedToCart { get; set; }
    }

}
