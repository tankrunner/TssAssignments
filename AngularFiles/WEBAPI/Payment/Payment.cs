using System;

namespace Payment
{
    public class Payment
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }

    public class Product
    {
        public long ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDesc { get; set; }
        public int ProductavailableQuantity { get; set; }
    }
}
