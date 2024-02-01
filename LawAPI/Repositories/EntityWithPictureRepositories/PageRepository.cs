﻿using NHibernate.SqlCommand;
using LawAPI.Database.Entities;
using LawAPI.Repositories.EntityRepository;
using ISession = NHibernate.ISession;

namespace LawAPI.Repositories.EntityWithPictureRepositories
{
    public interface IPageRepository : IEntityWithPictureRepository<Page>
    {
        Task DeleteAsync(int id, ISession session);
    }
    public class PageRepository : EntityWithPictureRepository<Page>, IPageRepository
    {
        public PageRepository(IEventRepository eventRepository) : base(eventRepository, Domain.ControllerEnum.Page)
        {
        }
        public async Task DeleteAsync(int id, ISession session)
        {
            var entity = await session.GetAsync<Page>(id);
            if (entity == null)
                return;
            await base.DeleteAsync(entity, session);
        }
    }
}
