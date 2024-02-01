using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.TabSlider
{
    public class AddTabSliderDto
    {
        [Required]
        public bool IsVisible { get; set; }
        [Required]
        public string Title { get; set; }
        public IList<int>? PictureIdList { get; set; }
        public IList<int>? InformationTabIdList { get; set; }
    }
}
