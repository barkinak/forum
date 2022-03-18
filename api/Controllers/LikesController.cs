using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class LikesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
