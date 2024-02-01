using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class EntityWithPictureMap : ClassMap<EntityWithPicture>
    {
        public EntityWithPictureMap()
        {
            Table("EntityWithPicture");

            Id(e => e.Id).Not.Nullable().GeneratedBy.Increment();

            Map(e => e.CreationDate).Not.Nullable();
            Map(e => e.ModificationDate).Not.Nullable();
            Map(e => e.IsVisible).Not.Nullable();
            Map(e => e.IsDeleted).Not.Nullable();

            HasManyToMany(x => x.PictureList)
                 .Cascade.SaveUpdate()
                 .Table("entitypicture")
                 .ParentKeyColumn("entitywithpictureid")
                 .ChildKeyColumn("pictureid");
        }
    }
}
