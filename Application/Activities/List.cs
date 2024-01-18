using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Listt
    {
        public class Query : IRequest<List<Activityy>> { }
        // Irequest takes a type paarameter of resposne like here the response is supposed to be a list of activityy
        public class Handler : IRequestHandler<Query, List<Activityy>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activityy>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync(); 
            }
        }

    }
}
