using NHibernate.Criterion;
using LawAPI.Database.Entities;
using LawAPI.Domain;
using LawAPI.Repositories.EntityRepository;
using LawAPI.Repositories.ExtendedBaseEntityRepositories;
using ISession = NHibernate.ISession;

namespace LawAPI.Repositories.EntityWithPictureRepositories
{
    public interface IEntityWithPictureRepository<T> : IExtendedDateEntityRepository<T> where T : EntityWithPicture
    { }
    public abstract class EntityWithPictureRepository<T> : ExtendedDateEntityRepository<T> where T : EntityWithPicture
    {

        public EntityWithPictureRepository(IEventRepository eventRepository, ControllerEnum controllerEnum) : base(eventRepository, controllerEnum)
        {
        }

        public new virtual async Task DeleteAsync(T entity, ISession session)
        {
            if (entity == null)
                return;
            entity.PictureList?.Clear();
            await base.DeleteAsync(entity, session);
        }
        
    }
}
