using LawAPI.Database.Entities;
using LawAPI.Domain;
using System.Security.Claims;

namespace LawAPI.Security
{
    public interface IUserManager<TUser> where TUser : class
    {
        Task<List<string>> GetRolesAsync(TUser user);
        Task<List<Claim>> GetClaimsAsync(TUser user);
        Task<TUser> FindByEmailAsync(string email);
        Task<UserManagerResult> CreateAsync(TUser user, string password);
        Task<UserManagerResult> UpdateAsync(User user);
        Task SaveTokenAsync(User user, string token);
        Task<User> GetUserByTokenAsync(string resetToken);

    }
}
