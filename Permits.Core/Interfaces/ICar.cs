using Permits.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Permits.Core.Interfaces
{
    public interface ICar
    {
        void AddCarDetails(List<Car> Car,int UserId);
    }
}
