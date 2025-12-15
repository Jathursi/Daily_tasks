using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Data;
using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public class ModuleService : IModuleService
{
    private readonly TimeTrackerContext _context;

    public ModuleService(TimeTrackerContext context)
    {
        _context = context;
    }

    public async Task<List<Module>> GetAllModulesAsync()
    {
        return await _context.Modules.ToListAsync();
    }

    public async Task<Module?> GetModuleByIdAsync(int id)
    {
        return await _context.Modules.FindAsync(id);
    }

    public async Task<Module> CreateModuleAsync(Module module)
    {
        _context.Modules.Add(module);
        await _context.SaveChangesAsync();
        return module;
    }

    public async Task<Module?> UpdateModuleAsync(int id, Module module)
    {
        var existingModule = await _context.Modules.FindAsync(id);
        if (existingModule == null) return null;

        existingModule.Name = module.Name;
        // existingModule.Email = module.Email;
        // existingModule.PasswordHash = module.PasswordHash;

        await _context.SaveChangesAsync();
        return existingModule;
    }

    public async Task<bool> DeleteModuleAsync(int id)
    {
        var module = await _context.Modules.FindAsync(id);
        if (module == null) return false;

        _context.Modules.Remove(module);
        await _context.SaveChangesAsync();
        return true;
    }
}
