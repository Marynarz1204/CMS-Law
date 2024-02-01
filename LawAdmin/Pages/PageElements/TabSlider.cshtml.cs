using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages.PageElements
{
    public class TabSliderModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "TabSlider";
        }
    }
}
