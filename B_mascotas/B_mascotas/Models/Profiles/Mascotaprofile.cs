using AutoMapper;
using B_mascotas.Models.DTO;

namespace B_mascotas.Models.Profiles
{
    public class Mascotaprofile: Profile
    {
        public Mascotaprofile()
        {
            CreateMap<Mascota, MascotaDTO>();
            CreateMap<MascotaDTO, Mascota>();
        }
    }
}
