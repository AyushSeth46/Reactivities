using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance
//In order to use Entity Framework to query, insert, update, and delete data using .NET objects,
//you first need to Create a Model which maps the entities and relationships that are defined in your model
//to tables in a database.
{
    public class DataContext : DbContext
    //the primary class your application interacts with is System.Data.Entity.DbContext (often referred to as the context class).
    //main function of the contect class is to enable writing queries and materialise results based on those.
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
     
        public DbSet<Activityy> Activities { get; set; }

    }
}
