using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        // Метод доступен по любому HTTP глаголу.
        public string Index() => "Hello World";
        
        // Нужно выполнить GET запрос.
        [HttpGet]
        public string Method1() => "Method1";
            
        // Нужно выполнить GET запрос.
        [HttpGet]
        public string Method2() => "Method2";
        
        // Нужно выполнить POST запрос.
        [HttpPost]
        public string Method3() => "Method3";
    }
}
