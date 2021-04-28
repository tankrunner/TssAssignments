using System;

namespace WebApiEmp
{
    public class WeatherForecast
    {
        //public int id { get; set; }

        //public string uname { get; set; }

        //public string pass { get; set; }
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }

    public class EmployeeData
    {
        public int id { get; set; }
        public string name { get; set; }

        public string team { get; set; }
        public string designation { get; set; }
        public string gender { get; set; }

        public string date { get; set; }


    }

    public class Login
    {
        public string uname { get; set; }

        public string pass { get; set; }
    }

    public class product
    {
        public string product_name { get; set; }
        public string product_desc { get; set; }
        public int product_availableQuantity { get; set; }
    }

    public class addProduct
    {
        public int id { get; set; }
    }

    public class productInCart
    {
        public int[] addedToCart { get; set; }
    }

}
