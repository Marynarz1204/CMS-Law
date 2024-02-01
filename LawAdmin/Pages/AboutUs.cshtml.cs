using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages
{
    public class AboutUsModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "About us";
        }
    }
}
