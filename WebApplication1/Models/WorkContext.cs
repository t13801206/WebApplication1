using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class WorkContext : DbContext
    {
        public WorkContext(DbContextOptions<WorkContext> options) : base(options)
        {
        }

        public DbSet<WorkItem> WorkItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WorkItem>()
                .HasKey(c => new {c.Dir, c.File, c.Worker});
        }

    }
}
