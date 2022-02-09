using ControllerExample.Models;
using Microsoft.AspNetCore.Mvc;

namespace ControllerExample.Controllers
{
    public class HomeController : ControllerBase
    {
        // home/Method1/?Id=11&name=name1
        public string Method1(int id = 0, string name = "")
        {
            return $"{id}  --  {name} ";
        }

        public string Method2(People people)
        {
            return $"{people.Id}  --  {people.Name} ";
        }
    }
}
