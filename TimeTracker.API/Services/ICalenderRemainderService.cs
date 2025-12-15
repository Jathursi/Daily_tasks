using TimeTracker.API.Models;
using System.Collections.Generic;

namespace TimeTracker.API.Services;

public interface ICalenderRemainderService
{
    Task<List<CalendarRemainder>> GetAllCalendersAsync();
    Task<CalendarRemainder?> GetCalenderByIdAsync(int id);
    Task<CalendarRemainder> CreateCalenderAsync(CalendarRemainder calender);
    Task<CalendarRemainder?> UpdateCalenderAsync(int id, CalendarRemainder calender);
    Task<bool> DeleteCalenderAsync(int id);
}