using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Products.Model
{
  [Table("Product")]
  public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDesc { get; set; }
        public int ProductavailableQuantity { get; set; }
    }
}
