using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Template.WebApp.Services;

namespace Template.WebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TemplateController : ControllerBase
    {
        private readonly ILogger<TemplateController> _logger;
        private readonly ITemplateService _templateService;

        public TemplateController(ILogger<TemplateController> logger, ITemplateService templateService)
        {
            _logger = logger;
            _templateService = templateService;
        }

        [HttpGet]
        public IEnumerable<Models.Template> Get()
        {
            return _templateService.GetTemplates();
        }

        [HttpGet]
        [Route("{id}")]
        public Models.Template Get(int id)
        {
            return _templateService.GetTemplate(id);
        }

        [HttpPost]
        public void Insert(Models.Template template)
        {
            _templateService.Insert(template);
        }

        [HttpPut]
        public void Update(Models.Template template)
        {
            _templateService.Update(template);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _templateService.Delete(id);
        }
    }
}
