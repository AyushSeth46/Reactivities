using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistance;
using Persistence;

namespace API.Extentions
{
    public static class ApplicationServiceExtention
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration) 
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            var provider = services.BuildServiceProvider();
            configuration = provider.GetRequiredService<IConfiguration>();
            services.AddTransient<Seed>();
            services.AddDbContext<DataContext>(
                item => item.UseSqlServer(configuration.GetConnectionString("myconn"))
            );
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Listt.Handler).Assembly));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}
