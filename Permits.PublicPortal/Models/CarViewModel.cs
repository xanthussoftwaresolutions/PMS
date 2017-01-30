using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Permits.PublicPortal
{
    public class CarViewModel
    {
        public string Code { get; set; }
        public Nullable<int> WebUserID { get; set; }
        public string CarMake { get; set; }
        public string CarModel { get; set; }
        public string CarColor { get; set; }
        public Nullable<int> CarYear { get; set; }
        public string CarLicense { get; set; }
        public string CarState { get; set; }
        public bool IsActive { get; set; }
    }
}