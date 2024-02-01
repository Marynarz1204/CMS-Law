using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class GalleryMap : SubclassMap<Gallery>
    {
        public GalleryMap()
        {
            KeyColumn("Id");
            Map(x => x.Name).Not.Nullable().Unique();
            Map(x => x.MainText);
            Map(x => x.SubText);

            Table("Gallery");
        }
    }
}
