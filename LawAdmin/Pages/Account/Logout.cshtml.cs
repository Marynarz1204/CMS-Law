using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages.Account
{
    public class LogoutModel : LawPageModel
    {
        public override void OnGet()
        {
            base.LogOut();
            Title = "Logout";
            Response.Redirect("/");
        }
    }
}
