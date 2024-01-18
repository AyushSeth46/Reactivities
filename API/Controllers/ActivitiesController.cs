using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    public class ActivitiesController :BaseAPIControllers
    {
        //private readonly DataContext _context;
        //private readonly IMediator _mediator;

      

        //public ActivitiesController(IMediator mediator)
        //{
        //    _mediator = mediator;
        //}

        [HttpGet] //api/activities

        //The Task class represents a single operation that does not return a value and that usually executes asynchronously
        //Action Result is a return type.  which returns the result of actions like Get/post etc
        public async Task <ActionResult<List<Activityy>>> GetActivities()
        {
            return await Mediator.Send(new Listt.Query());
        }

        [HttpGet("{id}")]//api/activities/hfgfgf(id)
        public async Task<ActionResult<Activityy>> GetActivity(Guid id)
        {
            return  await Mediator.Send(new Detailss.Query { Id = id});

        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activityy activityy)
        {
            await Mediator.Send(new Createe.Command { Activityy = activityy});
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activityy activityy)
        {
            activityy.Id = id;
            await Mediator.Send(new Edit.Command { Activityy = activityy });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Deletee.Command {  Id = id });
            return Ok();
        }

    }
}
