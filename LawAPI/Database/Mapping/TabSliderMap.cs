using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class TabSliderMap : SubclassMap<TabSlider>
    {
        public TabSliderMap()
        {
            KeyColumn("Id");
            Map(x => x.Title).Not.Nullable().Unique();
            HasMany(x => x.InformationTabList)
                .Table("InformationTab");

            Table("TabSlider");
        }
    }
}
