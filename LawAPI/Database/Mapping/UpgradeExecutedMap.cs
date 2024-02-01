using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class UpgradeExecutedMap : ClassMap<UpgradeExecuted>
    {
        public UpgradeExecutedMap()
        {
            Id(x => x.Id).Not.Nullable().GeneratedBy.Increment();
            Map(x => x.UpgradeNumber).Not.Nullable();

            Table("UpgradeExecuted");
        }
    }
}
