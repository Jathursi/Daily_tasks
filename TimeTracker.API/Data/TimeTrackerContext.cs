using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Models;

namespace TimeTracker.API.Data;

public class TimeTrackerContext : DbContext
{
    public TimeTrackerContext(DbContextOptions<TimeTrackerContext> options) : base(options) { }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Module> Modules { get; set; } = null!;
    public DbSet<LogTime> LogTimes { get; set; } = null!;
    public DbSet<CalendarRemainder> CalendarRemainders { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Self-referencing modules
        modelBuilder.Entity<Module>()
            .HasOne(m => m.Parent)
            .WithMany(m => m.Children)
            .HasForeignKey(m => m.ParentId)
            .OnDelete(DeleteBehavior.Cascade);

        // Module -> User
        modelBuilder.Entity<Module>()
            .HasOne(m => m.User)
            .WithMany(u => u.Modules)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.SetNull);

        // LogTime -> Module
        modelBuilder.Entity<LogTime>()
            .HasOne(l => l.Module)
            .WithMany(m => m.LogTimes)
            .HasForeignKey(l => l.ModuleId)
            .OnDelete(DeleteBehavior.Cascade);

        // CalendarRemainder -> User
        modelBuilder.Entity<CalendarRemainder>()
            .HasOne(c => c.User)
            .WithMany(u => u.CalendarRemainders)
            .HasForeignKey(c => c.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
