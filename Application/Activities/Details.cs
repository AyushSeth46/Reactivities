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
    public class Detailss
    {
        public class Query : IRequest<Activityy>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activityy>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }
            public async Task<Activityy> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _dataContext.Activities.FindAsync(request.Id);
            }
        }
    }
}
