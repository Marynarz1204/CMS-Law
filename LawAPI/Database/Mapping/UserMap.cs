﻿using FluentNHibernate.Mapping;
using LawAPI.Database.Entities;

namespace LawAPI.Database.Mapping
{
    public class UserMap : ClassMap<User>
    {
        public UserMap()
        {
            Id(x => x.Id, "UserId").Not.Nullable().GeneratedBy.Increment();
            Map(x => x.Email).Not.Nullable().Unique();
            Map(x => x.Password).Not.Nullable();
            Map(x => x.CreationDate).Not.Nullable();
            Map(x => x.ModificationDate).Not.Nullable();

            Table("\"User\"");
        }
    }
}
