using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIControllers : ControllerBase
    {
        //the extention mediatr is used here to seprate command/query/handler code to prevent it from becoming a tightly coupled application
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        //since we will need mediator to work in all classes,we can put it in the base class itself
        //fro here two mediator classed are made which will be access by diffrent classes accordingly
    }
}
