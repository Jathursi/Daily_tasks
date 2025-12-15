using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Data;
using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public class CalenderRemainderService : ICalenderRemainderService
{
    private readonly TimeTrackerContext _context;

    public CalenderRemainderService(TimeTrackerContext context)
    {
        _context = context;
    }

    public async Task<List<CalendarRemainder>> GetAllCalendersAsync()
    {
        return await _context.CalendarRemainders.ToListAsync();
    }

    public async Task<CalendarRemainder?> GetCalenderByIdAsync(int id)
    {
        return await _context.CalendarRemainders.FindAsync(id);
    }

    public async Task<CalendarRemainder> CreateCalenderAsync(CalendarRemainder calender)
    {
        _context.CalendarRemainders.Add(calender);
        await _context.SaveChangesAsync();
        return calender;
    }

    public async Task<CalendarRemainder?> UpdateCalenderAsync(int id, CalendarRemainder calender)
    {
        var existingCalender = await _context.CalendarRemainders.FindAsync(id);
        if (existingCalender == null) return null;

        existingCalender.Title = calender.Title;
        existingCalender.Description = calender.Description;
        existingCalender.ReminderTime = calender.ReminderTime;
        
        await _context.SaveChangesAsync();
        return existingCalender;
    }

    public async Task<bool> DeleteCalenderAsync(int id)
    {
        var calender = await _context.CalendarRemainders.FindAsync(id);
        if (calender == null) return false;

        _context.CalendarRemainders.Remove(calender);
        await _context.SaveChangesAsync();
        return true;
    }
}