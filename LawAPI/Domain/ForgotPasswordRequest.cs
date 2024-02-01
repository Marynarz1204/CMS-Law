using System.ComponentModel.DataAnnotations;

namespace LawAPI.Domain
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
