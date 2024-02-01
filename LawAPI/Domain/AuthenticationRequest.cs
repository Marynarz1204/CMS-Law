﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace LawAPI.Domain
{
    public class AuthenticationRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [PasswordPropertyText]
        public string Password { get; set; }
    }
}
