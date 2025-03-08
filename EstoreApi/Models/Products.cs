using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EstoreApi.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        [Column("Product_ID")]
        public int ProductId { get; set; }

        [Column("Product_name")]
        public string ProductName { get; set; }

        public double Price { get; set; }
    }
}
