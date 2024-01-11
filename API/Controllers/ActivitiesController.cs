using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    public class ActivitiesController :BaseAPIControllers
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet] //api/activities

        //The Task class represents a single operation that does not return a value and that usually executes asynchronously
        //Action Result is a return type.  which returns the result of actions like Get/post etc
        public async Task <ActionResult<List<Activityy>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]//api/activities/hfgfgf(id)
        public async Task<ActionResult<Activityy>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);

        }
    }
}
