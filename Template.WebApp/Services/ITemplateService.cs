using System;
using System.Collections.Generic;
using System.Linq;

namespace Template.WebApp.Services
{
    public interface ITemplateService
    {
        IEnumerable<Models.Template> GetTemplates();
        Models.Template GetTemplate(int id);
        void Insert(Models.Template template);
        void Update(Models.Template template);
        bool Delete(int id);
        
    }
    internal class TemplateService: ITemplateService
    {
        private List<Models.Template> _templates;
        public TemplateService()
        {
            _templates = new List<Models.Template>();

            var record = new Models.Template
            {
                Id = 1,
                StringField = "String",
                DateField = DateTime.Now.Date,
                IntegerField = 1
            };

            for (int i = 0; i< 50; i++)
            {
                _templates.Add(record with
                {
                    Id = record.Id + i,
                    StringField = $"{record.StringField} {record.Id + i}",
                    DateField = record.DateField.AddDays(i),
                    IntegerField = record.IntegerField + i
                }); ;
            }
        }

        public IEnumerable<Models.Template> GetTemplates() => _templates;

        public Models.Template GetTemplate(int id) => _templates.Single(temp => temp.Id == id);
        public void Insert(Models.Template template)
        {
            var maxId = _templates.Max(template => template.Id) + 1;
            _templates.Add(template with
            {
                Id = maxId
            });
        }

        public void Update(Models.Template template)
        {
            var templateOld = _templates.Single(temp => temp.Id == template.Id);
            if (_templates.Remove(templateOld))
                _templates.Add(template);
        }

        public bool Delete(int id)
        {
            var template = _templates.Find(temp => temp.Id == id);
            return _templates.Remove(template);
        }
    }
}
