using Microsoft.EntityFrameworkCore;
using EstoreApi.Models;

namespace EstoreApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<Product> Products { get; set; }
    }
}
