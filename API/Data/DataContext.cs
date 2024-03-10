using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext 
{
    public DataContext(DbContextOptions options): base(options)
    {

    }
    //AppUser is the db's table name (entity).
    public DbSet<AppUser> Users { get; set; }
}
