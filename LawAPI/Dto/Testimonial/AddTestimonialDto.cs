using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.Testimonial
{
    public class AddTestimonialDto
    {
        [Required]
        public bool IsVisible { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Text { get; set; }
        public int? RoleId { get; set; }
        public IList<int>? PictureIdList { get; set; }
    }
}
