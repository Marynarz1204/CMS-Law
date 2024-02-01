using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class ContactInfoMap : SubclassMap<ContactInfo>
    {
        public ContactInfoMap()
        {
            KeyColumn("Id");
            Map(x => x.Text).Not.Nullable();

            Table("ContactInfo");
        }
    }
}
