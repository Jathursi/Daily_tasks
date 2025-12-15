using Microsoft.AspNetCore.Mvc;
using TimeTracker.API.Models;
using TimeTracker.API.Services;

namespace TimeTracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ModuleController : ControllerBase
{
    private readonly IModuleService _moduleService;

    public ModuleController(IModuleService moduleService)
    {
        _moduleService = moduleService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var modules = await _moduleService.GetAllModulesAsync();
        return Ok(modules);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var module = await _moduleService.GetModuleByIdAsync(id);
        if (module == null) return NotFound();
        return Ok(module);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Module module)
    {
        var createdModule = await _moduleService.CreateModuleAsync(module);
        return CreatedAtAction(nameof(Get), new { id = createdModule.Id }, createdModule);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Module module)
    {
        var updatedModule = await _moduleService.UpdateModuleAsync(id, module);
        if (updatedModule == null) return NotFound();
        return Ok(updatedModule);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _moduleService.DeleteModuleAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
}
