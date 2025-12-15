using System.Collections.Generic;

namespace TimeTracker.API.Models;

public class Module
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int? ParentId { get; set; }
    public int? UserId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    // Navigation properties
    public Module? Parent { get; set; }
    public List<Module> Children { get; set; } = new();
    public User? User { get; set; }
    public List<LogTime> LogTimes { get; set; } = new();
}
