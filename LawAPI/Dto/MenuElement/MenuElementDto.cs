using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.MenuElement
{
    public class MenuElementDto
    {
        [Required]
        public int MenuElementId { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string Link { get; set; }
        [Required]
        public bool IsVisible { get; set; }
        public int? ParentMenuElementId { get; set; }
    }
}
