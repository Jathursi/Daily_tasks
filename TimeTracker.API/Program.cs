using Microsoft.EntityFrameworkCore;
using TimeTracker.API.Data;
using TimeTracker.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Database connection (MySQL)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<TimeTrackerContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Register services
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IModuleService, ModuleService>();
builder.Services.AddScoped<ILogTimeService, LogTimeService>();
builder.Services.AddScoped<ICalenderRemainderService, CalenderRemainderService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
