using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages
{
    public class PicturesModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Pictures";
        }
    }
}
