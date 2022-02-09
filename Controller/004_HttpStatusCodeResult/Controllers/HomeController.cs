using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        public ActionResult Method1()
        {
            // вывод 404 ошибки NotFound.
            return NotFound();
        }

        public ActionResult Method2()
        {
            // вывод 500. 
            return new StatusCodeResult(500);
        }
    }
}
