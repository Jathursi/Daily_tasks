namespace TimeTracker.API.Models;

public class LogTime
{
    public int Id { get; set; }
    public int ModuleId { get; set; }
    public string Subject { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    // Navigation property
    public Module Module { get; set; } = null!;
}
