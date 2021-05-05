using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Products.Model
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions options) : base(options)
        { }
        public DbSet<ProductDB> Products { get; set; }
    }
}
