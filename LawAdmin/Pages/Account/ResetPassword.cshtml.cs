using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages.Account
{
    public class ResetPasswordModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Reset password";
        }
    }
}
