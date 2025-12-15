using System.Collections.Generic;
// using is like importing a namespace so you can use its classes without writing the full name every time.
// It saves you from typing the full path repeatedly.
// Without using, you would have to write:
// TimeTracker.API.Models.User user = new TimeTracker.API.Models.User();
namespace TimeTracker.API.Models;
// A namespace is like a folder or container for your classes, structs, enums, etc.
// It helps avoid naming conflicts when you have multiple classes with the same name in a large project.
// You can think of it as grouping related classes together

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public List<Module> Modules { get; set; } = new();
    public List<CalendarRemainder> CalendarRemainders { get; set; } = new();
}
