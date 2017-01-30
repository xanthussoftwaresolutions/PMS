using Permits.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Permits.DataAccess;
using System.Data.Entity;

namespace Permits.Core.Implimentation
{
    public class CarBAL : ICar
    {
        PermitEntitiesDb dbContext;
        public CarBAL()
        {
            dbContext = new PermitEntitiesDb();
        }

        public void AddCarDetails(List<Car> Car, int WebUserId)
        {     foreach(var c in Car)
            {
                c.Code = c.CarLicense;
                c.CreatedAt = DateTime.Now;
                c.UpdatedAt= DateTime.Now;
                c.IsActive = true;
                c.WebUserID = WebUserId;
                dbContext.Entry(c).State = EntityState.Added;
            }

            dbContext.SaveChanges();
        }
    }
}
