using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using System.Threading.Tasks;
using Template.WebApp.Helpers;
using Xunit;

namespace Template.WebApp.IntegrationTests
{
    public class IntegrationTestExample
    {
        private readonly TestServer _server;
        private readonly System.Net.Http.HttpClient _client;

        public IntegrationTestExample()
        {
            _server = new TestServer(new WebHostBuilder()
                .UseStartup<Startup>());
            _client = _server.CreateClient();
        }
        [Fact]
        public async Task Endpoint_ReturnsValidResponse()
        {
            var result = await _client.GetAsync("api/template");
            result.EnsureSuccessStatusCode();
            var content = await result.Content.ReadAsStringAsync();
            var templates = content.JsonToObject<Models.Template[]>();
            Assert.NotNull(templates);
        }
    }
}
