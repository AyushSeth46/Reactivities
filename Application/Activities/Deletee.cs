using AutoMapper;
using MediatR;
using Persistance;
using System.Data.Entity.Core;

namespace Application.Activities
{
    public class Deletee
    {
        //the sepration of handler and command is done to decouple the application
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
            //the use of cancellation token is to order the API to not go through the request
            //when the process is cancelled from the user in middle of processing
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
