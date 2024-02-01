using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.Slider
{
    public class AddSliderDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public bool IsVisible { get; set; }
        public IList<int>? BannerIdList { get; set; }
    }
}
