using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.MenuElement
{
    public class AddMenuElementDto
    {
        [Required]
        public string Text { get; set; }
        [Required]
        public string Link { get; set; }
        [Required]
        public bool IsVisible { get; set; }
        public int? ParentMenuElementId { get; set; }
    }
}
