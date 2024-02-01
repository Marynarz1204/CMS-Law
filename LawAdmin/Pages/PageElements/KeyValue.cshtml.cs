using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json.Linq;
using LawAPI.Dto;
using LawAdmin.Models;

namespace LawAdmin.Pages
{
    public class KeyValueModel : LawPageModel
    {
        public  override void OnGet()
        {
            base.OnGet();
            Title = "Key-Value";

        }

    }
}
