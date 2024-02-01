using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LawAdmin.Pages.PageElements
{
    public class CategoriesModel : Models.LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Categories";
        }
    }
}
