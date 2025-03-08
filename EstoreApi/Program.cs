using Microsoft.EntityFrameworkCore;
using EstoreApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register AppDbContext with SQL Server provider
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Build the app.
var app = builder.Build();

// Enable Swagger only in Development (or unconditionally if desired)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "EstoreApi V1");
        c.RoutePrefix = string.Empty; // Swagger at root URL for easy testing
    });
}

// Uncomment if you need to disable HTTPS redirection for local testing
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
