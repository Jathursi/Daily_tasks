using Microsoft.AspNetCore.Mvc;
using TimeTracker.API.Models;
using TimeTracker.API.Services;

namespace TimeTracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CalenderController : ControllerBase
{
    private readonly ICalenderRemainderService _calenderRemainderService;

    public CalenderController(ICalenderRemainderService calenderRemainderService)
    {
        _calenderRemainderService = calenderRemainderService;
    }   
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var calenders = await _calenderRemainderService.GetAllCalendersAsync();
        return Ok(calenders);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var calender = await _calenderRemainderService.GetCalenderByIdAsync(id);
        if (calender == null) return NotFound();
        return Ok(calender);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CalendarRemainder calender)
    {
        var createdCalender = await _calenderRemainderService.CreateCalenderAsync(calender);
        return CreatedAtAction(nameof(Get), new { id = createdCalender.Id }, createdCalender);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, CalendarRemainder calender)
    {
        var updatedCalender = await _calenderRemainderService.UpdateCalenderAsync(id, calender);
        if (updatedCalender == null) return NotFound();
        return Ok(updatedCalender);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _calenderRemainderService.DeleteCalenderAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
}
