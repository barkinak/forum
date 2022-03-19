using api.Extensions;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;

namespace api.Helpers
{
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next();

            if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return;

            var userId = resultContext.HttpContext.User.GetUserId();
            var repo = resultContext.HttpContext.RequestServices.GetService<IUserRepository>();
            Console.WriteLine(userId);
            var user = await repo.GetUserByIdAsync(userId);
            user.LastActive = DateTime.UtcNow;
            await repo.SaveAllAsync();
        }
    }
}
