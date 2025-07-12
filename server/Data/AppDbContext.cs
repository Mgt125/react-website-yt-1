using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> Options) : base(Options) {}

        public DbSet<Booking> Bookings { get; set; }
    }
}