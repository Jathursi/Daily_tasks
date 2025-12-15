using Microsoft.AspNetCore.Mvc;
using TimeTracker.API.Models;
using TimeTracker.API.Services;

namespace TimeTracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LogTimeController : ControllerBase
{
    private readonly ILogTimeService _logTimeService;

    public LogTimeController(ILogTimeService logTimeService)
    {
        _logTimeService = logTimeService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var logTimes = await _logTimeService.GetAllLogTimesAsync();
        return Ok(logTimes);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var logTime = await _logTimeService.GetLogTimeByIdAsync(id);
        if (logTime == null) return NotFound();
        return Ok(logTime);
    }

    [HttpPost]
    public async Task<IActionResult> Create(LogTime logTime)
    {
        var createdLogTime = await _logTimeService.CreateLogTimeAsync(logTime);
        return CreatedAtAction(nameof(Get), new { id = createdLogTime.Id }, createdLogTime);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, LogTime logTime)
    {
        var updatedLogTime = await _logTimeService.UpdateLogTimeAsync(id, logTime);
        if (updatedLogTime == null) return NotFound();
        return Ok(updatedLogTime);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _logTimeService.DeleteLogTimeAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
}
