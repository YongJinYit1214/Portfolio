using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models
{
    public class ContactRequest
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(200)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        [StringLength(2000)]
        public string Message { get; set; } = string.Empty;
    }

    public class ContactResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
    }
}
