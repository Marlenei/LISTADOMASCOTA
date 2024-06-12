using Microsoft.EntityFrameworkCore;

namespace B_mascotas.Models
{
    public class AplicationDbcontext: DbContext
    {

        public AplicationDbcontext(DbContextOptions<AplicationDbcontext> options) : base(options)
        {
        }

        public DbSet<Mascota> Mascotas{ get; set;}



    }
}
