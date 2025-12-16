using Microsoft.AspNetCore.Mvc;
using TimeTracker.API.Models;
using TimeTracker.API.Services;
using BCrypt.Net;
namespace TimeTracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
        // return Ok(new [] { "User1", "User2" });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        if (user == null) return NotFound();
        return Ok(user);
    }

    [HttpPost]
    // public async Task<IActionResult> Create(User user)
    // {
    //     var createdUser = await _userService.CreateUserAsync(user);
    //     return CreatedAtAction(nameof(Get), new { id = createdUser.Id }, createdUser);
    // }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, User user)
    {
        var updatedUser = await _userService.UpdateUserAsync(id, user);
        if (updatedUser == null) return NotFound();
        return Ok(updatedUser);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _userService.DeleteUserAsync(id);
        if (!result) return NotFound();
        return NoContent();
    }
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        user.password_hash = BCrypt.Net.BCrypt.HashPassword(user.password_hash);
        var createdUser = await _userService.CreateUserAsync(user);
        if (createdUser == null)
            return BadRequest("User could not be created");

        return Ok(createdUser); // you can return Id, Email or DTO
    }
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User user)
    {
        var existingUser = await _userService.GetUserByEmailAsync(user.Email);
        if (existingUser == null)
            return Unauthorized("Invalid email or password");

        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(user.password_hash, existingUser.password_hash);
        if (!isPasswordValid)
            return Unauthorized("Invalid email or password");

        return Ok(existingUser); // you can return a token or user info
    }
}