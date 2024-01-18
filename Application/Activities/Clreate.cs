using Domain;
using MediatR;
using Microsoft.Identity.Client;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Createe
    {
        public class Command : IRequest
            //since we do not need to return anything here thus Irequext will not take any parameters
        {
            public Activityy Activityy { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
               await _context.Activities.AddAsync(request.Activityy);
                await _context.SaveChangesAsync();
            }
        }
    }
}
