namespace TimeTracker.API.Models;

public class CalendarRemainder
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime ReminderTime { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    // Navigation property
    public User User { get; set; } = null!;
}
