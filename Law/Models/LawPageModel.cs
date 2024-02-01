using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LawClient.Models
{
    public abstract class LawPageModel : PageModel
    {
        public string ParentValue { get; set; } = String.Empty;
        public string ChildValue {  get; set; } = String.Empty;
        public virtual void  OnGet()
        {
            ParentValue = "Law model";
        }
    }
}
