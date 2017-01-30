using AutoMapper;
using Permits.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Permits.PublicPortal
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {

            Mapper.CreateMap<CarViewModel,Car>().ReverseMap();

        }
    }
}