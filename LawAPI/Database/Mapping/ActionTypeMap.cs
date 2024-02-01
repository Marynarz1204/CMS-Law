using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class ActionTypeMap : ClassMap<ActionType>
    {
        public ActionTypeMap()
        {
            Id(x => x.ActionTypeId, "ActionTypeId").Not.Nullable().GeneratedBy.Increment();
            Map(x => x.Type).Not.Nullable();

            Table("ActionType");
        }
    }
}
