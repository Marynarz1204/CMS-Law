using NHibernate.Linq;
using LawAPI.Database.Entities;
using LawAPI.Repositories.EntityRepository;
using ISession = NHibernate.ISession;

namespace LawAPI.Repositories.EntityWithPictureRepositories
{
    public interface IContactInfoRepository : IEntityWithPictureRepository<ContactInfo>
    {
        Task DeleteAsync(int id, ISession session);
    }
    public class ContactInfoRepository : EntityWithPictureRepository<ContactInfo>, IContactInfoRepository
    {
        public ContactInfoRepository(IEventRepository eventRepository) : base(eventRepository, Domain.ControllerEnum.ContactInfo)
        {
        }
        public async Task DeleteAsync(int id, ISession session)
        {
            var entity = await GetByIdAsync(id, session);
            if (entity == null)
                return;

            await base.DeleteAsync(entity, session);
        }
    }
}
