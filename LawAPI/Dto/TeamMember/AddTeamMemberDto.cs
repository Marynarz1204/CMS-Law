using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.TeamMember
{
    public class AddTeamMemberDto
    {
        [Required]
        public bool IsVisible { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Email { get; set; }
        public int? RoleId { get; set; }
        public IList<int>? SocialMediaIdList { get; set; }
        public IList<int>? PictureIdList { get; set; }
    }
}
