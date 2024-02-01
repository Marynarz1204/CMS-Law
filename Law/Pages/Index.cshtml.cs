using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawClient.Models;

namespace LawClient.Pages.Home
{
    public class IndexModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            ChildValue = "Home";
        }
    }
}
