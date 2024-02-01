using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class BannerMap : SubclassMap<Banner>
    {
        public BannerMap()
        {
            KeyColumn("Id");
            Map(x => x.Title).Not.Nullable().Unique();
            Map(x => x.Text).Not.Nullable();
            Map(x => x.SubText);
            Map(x => x.Link);

            References(x => x.Slider)
                .Column("SliderId");

            Table("Banner");
        }
    }
}
