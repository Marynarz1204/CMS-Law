using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class ControllerMap : ClassMap<Controller>
    {
        public ControllerMap()
        {
            Id(x => x.ControllerId, "ControllerId").Not.Nullable().GeneratedBy.Identity();
            Map(x => x.Name).Not.Nullable().Unique();

            Table("Controller");
        }
    }
}
