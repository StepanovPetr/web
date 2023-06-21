using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        // GET: ExampleRedirect
        public string Index() => "ExampleRedirect";

        // Пример с перенаправлением на другой сайт.
        public ActionResult Redirect1() => Redirect("http://www.google.ru");

        // Пример с перенаправлением на другой Action в рамках одного Controller.
        public ActionResult Redirect2() => RedirectToActionPermanent("Index");

        // Пример с перенаправлением на другой Action и другой Controller.
        public ActionResult Redirect3() => RedirectToAction("Method1", "Simple");
    }
}