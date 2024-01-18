using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        //we have created this class by using automapper extenstion,
        //which automatically maps every source to destination
        
        public MappingProfiles()
        {
            CreateMap<Activityy, Activityy>();
        }
    }
}
