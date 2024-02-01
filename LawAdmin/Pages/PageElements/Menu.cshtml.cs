using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LawAdmin.Pages.PageElements
{
    public class MenuModel : Models.LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Menu";
        }
    }
}
