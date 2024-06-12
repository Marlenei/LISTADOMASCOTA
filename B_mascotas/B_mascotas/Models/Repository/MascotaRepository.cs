
using Microsoft.EntityFrameworkCore;

namespace B_mascotas.Models.Repository
{
    public class MascotaRepository: IMascotaRepository
    {
        private readonly AplicationDbcontext _context;

        public MascotaRepository(AplicationDbcontext context) 
        {
            _context = context;
        }

        public async Task<Mascota> AddMascota(Mascota mascota)
        {
            _context.Add(mascota);
            await _context.SaveChangesAsync();
            return mascota;
        }

        public async Task DeleteMascota(Mascota mascota)
        {
            _context.Mascotas.Remove(mascota);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Mascota>> GetListMascotas()
        {
            return await _context.Mascotas.ToListAsync();
        }

        public async Task<Mascota> GetMascota(int id)
        {
            return await _context.Mascotas.FindAsync(id);

        }

        public async Task UpdateMascota(Mascota mascota)
        {
            var MascotaItem = await _context.Mascotas.FirstOrDefaultAsync(x => x.Id == mascota.Id);

            if (MascotaItem != null)
            {
                MascotaItem.Nombre = mascota.Nombre;
                MascotaItem.Edad = mascota.Edad;
                MascotaItem.Peso = mascota.Peso;
                MascotaItem.Color = mascota.Color;
                MascotaItem.Raza = mascota.Raza;

                await _context.SaveChangesAsync();

            }


        }
    }
}
