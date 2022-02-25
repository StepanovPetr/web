using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace _3_FileDownload.Controllers
{
    public class FileExampleController : ControllerBase
    {
        private readonly IWebHostEnvironment _appEnvironment;

        public FileExampleController(IWebHostEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        // Скачивание файла по пути. 
        public ActionResult Download1() => PhysicalFile(
            Path.Combine(_appEnvironment.ContentRootPath, "Download", "1.mp3"), 
            "audio/*", 
            "1.mp3");
    
        // Скачивание массива байт.
        public ActionResult Download2()
        {
            //  Переменная содержашая путь к файлу.
            string pathToOpen = Path.Combine(_appEnvironment.ContentRootPath, "Download/1.mp3");
            
            // Массив байт
            byte[] data;
            // Заполнение массива байт данными из файла. 

            data = System.IO.File.ReadAllBytes(pathToOpen);
            return File(data, "audio/*", "1.mp2");
        }

        // Создание файла из потока.
        public ActionResult Download3()
        {
            // Создание потока streamForDownload и открытие файла / Download / 1.mp3 для чтения. 
            FileStream streamForDownload = new FileStream(
                    Path.Combine(_appEnvironment.ContentRootPath, "Download/1.mp3"),
                    FileMode.Open);
            
            // Поток и MIME.
            return File(streamForDownload, "audio/*", "1.mp3");
        }
    }
}