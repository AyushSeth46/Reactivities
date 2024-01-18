using AutoMapper;
using MediatR;
using Persistance;
using System.Data.Entity.Core;

namespace Application.Activities
{
    public class Deletee
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var activity = await _context.Activities.FindAsync(request.Id);
                if (activity == null)
                {
                    throw new ObjectNotFoundException("Not Found");
                }
                _context.Remove(activity);

                await _context.SaveChangesAsync();
            }
        }
    }
}
