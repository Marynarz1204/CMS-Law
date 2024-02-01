using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawClient.Models;

namespace LawClient.Pages
{
    public class AboutModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            ChildValue = "About";
        }
    }
}
