using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public interface ILogTimeService
{
    Task<List<LogTime>> GetAllLogTimesAsync();
    Task<LogTime?> GetLogTimeByIdAsync(int id);
    Task<LogTime> CreateLogTimeAsync(LogTime logTime);
    Task<LogTime?> UpdateLogTimeAsync(int id, LogTime logTime);
    Task<bool> DeleteLogTimeAsync(int id);
}
