using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        public string Request1()
        {
            string data = Request.Query["Data"];
            return $"Получение данных из адресной строки -{data}";
        }

        public string Request2()
        {
            string data = Request.Form["Data"];
            return $"Получение данных из тела запроса -{data}";
        }

        public string RouteInformation()
        {
            // Чтение данных, которые передаются с помощью GET запроса, как данные в маршруте.
            string data = (string)RouteData.Values["id"];
            return data;
        }

        public string QueryInformation()
        {
            // Чтение данных, которые передаются в адресной строке.
            string data = Request.QueryString.Value;
            return data;
        }
    }
}
