using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class CategoryMap : SubclassMap<Category>
    {
        public CategoryMap()
        {
            KeyColumn("Id");
            Map(x => x.Name).Not.Nullable().Unique();
            Map(x => x.Link);

            HasMany(x => x.ProductList)
                .Table("Product");

            Table("Category");
        }
    }
}
