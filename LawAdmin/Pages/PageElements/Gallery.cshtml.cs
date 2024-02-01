using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages
{
    public class GalleryModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Gallery";
        }
    }
}
