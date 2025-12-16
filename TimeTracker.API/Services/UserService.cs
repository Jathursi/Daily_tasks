using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Data;
using TimeTracker.API.Models;

namespace TimeTracker.API.Services;

public class UserService : IUserService
{
    private readonly TimeTrackerContext _context;

    public UserService(TimeTrackerContext context)
    {
        _context = context;
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<User> CreateUserAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<User?> UpdateUserAsync(int id, User user)
    {
        var existingUser = await _context.Users.FindAsync(id);
        if (existingUser == null) return null;

        existingUser.name = user.name;
        existingUser.Email = user.Email;
        existingUser.password_hash = user.password_hash;

        await _context.SaveChangesAsync();
        return existingUser;
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return false;

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
        return true;
    }
    public async Task<User?> ValidateUserAsync(string email, string password)
    {
        if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password)) return null;

        var normalizedEmail = email.Trim().ToLowerInvariant();
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == normalizedEmail);
        if (user == null) return null;

        return BCrypt.Net.BCrypt.Verify(password, user.password_hash) ? user : null;
    }

    public async Task<User?> GetUserByEmailAsync(string email)
    {
        var normalizedEmail = email.Trim().ToLowerInvariant();
        return await _context.Users.FirstOrDefaultAsync(u => u.Email.ToLower() == normalizedEmail);
    }
}
