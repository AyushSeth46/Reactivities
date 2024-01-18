using AutoMapper;
using Domain;
using MediatR;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public  class Edit
    {
        public class Command : IRequest
        {
            public Activityy Activityy { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activityy.Id);
                //activity.Title = request.Activityy.Title ?? activity.Title;
                _mapper.Map(request.Activityy, activity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
