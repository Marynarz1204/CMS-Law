using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LawAdmin.Models;

namespace LawAdmin.Pages.PageElements
{
    public class RolesModel : LawPageModel
    {
        public override void OnGet()
        {
            base.OnGet();
            Title = "Roles";
        }
    }
}
