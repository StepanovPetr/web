using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        // Пример добавления значения в сессию.
        public string Method1()
        {
            // Запись значения в сессию.
            HttpContext.Session.SetString("Key", "Hello word");
            // Задание строка жизнии значение сессии по умолчанию (20 мин).
            HttpContext.Session.CommitAsync();
            return "Session Key ADD to Response";
        }

        // Пример получения значений из сессии.
        public string Method2()
        {
            if (HttpContext.Session.GetString("Key") == null)
            {
                return "Value of Key Empty";
            }

            var sessionValue = HttpContext.Session.GetString("Key");
            return $"Value of Key {sessionValue}";
        }
    }
}
