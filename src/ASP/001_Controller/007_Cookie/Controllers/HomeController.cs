using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        // Пример добавления cookie.
        public string Method1()
        {
            // Добавление cookie с именем Key и значением Hello word в текущий ответ.
            Response.Cookies.Append("Key", "Hello word");

            return "Cookie Key add to Response";
        }

        // Пример чтения записи cookie из запроса.
        public string Method2()
        {
            var cookie = Request.Cookies["Key"];
            return !string.IsNullOrEmpty(cookie) 
                ? $"Value of Key {cookie}" 
                : "Value of Key Empty";
        }

        // Пример удаления cookie.
        public string Method3()
        {
            // Пример удаления сookie.
            Response.Cookies.Delete("Key");

            return "Cookie Key Delete form Response";
        }
    }
}
