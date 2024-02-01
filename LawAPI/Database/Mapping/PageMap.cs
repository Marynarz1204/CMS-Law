using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class PageMap : SubclassMap<Page>
    {
        public PageMap()
        {
            KeyColumn("Id");
            Map(x => x.Title).Unique();
            Map(x => x.Content);

            Table("Page");

        }
    }
}
