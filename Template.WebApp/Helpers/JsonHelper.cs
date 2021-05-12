using System.Text.Json;

namespace Template.WebApp.Helpers
{
    public static class JsonHelper
    {
        public static T JsonToObject<T>(this string json)
        {
            return JsonSerializer.Deserialize<T>(json);
        }
        public static string ToJson(this object obj)
        {
            return JsonSerializer.Serialize(obj);
        }
    }
}
