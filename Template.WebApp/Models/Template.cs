using System;

namespace Template.WebApp.Models
{
    public record Template
    {
        public int Id { get; init; }
        public string StringField { get; init; }
        public DateTime DateField { get; init; }
        public int IntegerField { get; init; }
    }
}
