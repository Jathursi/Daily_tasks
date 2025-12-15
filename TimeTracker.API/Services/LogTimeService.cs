using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Data;
using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public class LogTimeService : ILogTimeService
{
    private readonly TimeTrackerContext _context;

    public LogTimeService(TimeTrackerContext context)
    {
        _context = context;
    }

    public async Task<List<LogTime>> GetAllLogTimesAsync()
    {
        return await _context.LogTimes.ToListAsync();
    }

    public async Task<LogTime?> GetLogTimeByIdAsync(int id)
    {
        return await _context.LogTimes.FindAsync(id);
    }

    public async Task<LogTime> CreateLogTimeAsync(LogTime logTime)
    {
        _context.LogTimes.Add(logTime);
        await _context.SaveChangesAsync();
        return logTime;
    }

    public async Task<LogTime?> UpdateLogTimeAsync(int id, LogTime logTime)
    {
        var existingLogTime = await _context.LogTimes.FindAsync(id);
        if (existingLogTime == null) return null;

        existingLogTime.Subject = logTime.Subject;
        existingLogTime.Notes = logTime.Notes;
        existingLogTime.StartTime = logTime.StartTime;
        existingLogTime.EndTime = logTime.EndTime;
        
        // existingLogTime.Email = logTime.Email;
        // existingLogTime.PasswordHash = logTime.PasswordHash;
        await _context.SaveChangesAsync();
        return existingLogTime;
    }

    public async Task<bool> DeleteLogTimeAsync(int id)
    {
        var logTime = await _context.LogTimes.FindAsync(id);
        if (logTime == null) return false;

        _context.LogTimes.Remove(logTime);
        await _context.SaveChangesAsync();
        return true;
    }
}
