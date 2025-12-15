using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public interface IModuleService
{
    Task<List<Module>> GetAllModulesAsync();
    Task<Module?> GetModuleByIdAsync(int id);
    Task<Module> CreateModuleAsync(Module module);
    Task<Module?> UpdateModuleAsync(int id, Module module);
    Task<bool> DeleteModuleAsync(int id);
}
