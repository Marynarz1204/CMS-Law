﻿using System.ComponentModel.DataAnnotations;

namespace LawAPI.Dto.KeyValue
{
    public class AddKeyValueDto
    {
        [Required]
        public string Key { get; set; }
        [Required]
        public string Value { get; set; }
    }
}
