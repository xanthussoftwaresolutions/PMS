//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Permits.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class Card
    {
        public System.Guid Id { get; set; }
        public string Code { get; set; }
        public System.Guid WebUserID { get; set; }
        public string CardName { get; set; }
        public string CardNumber { get; set; }
        public Nullable<decimal> TokenizedCardNumber { get; set; }
        public decimal CardExpiryMonth { get; set; }
        public decimal CardExpiryYear { get; set; }
        public string CardFirstSix { get; set; }
        public string CardLastFour { get; set; }
        public string CardType { get; set; }
        public bool IsActive { get; set; }
        public System.DateTime CreatedAt { get; set; }
        public Nullable<System.DateTime> UpdatedAt { get; set; }
        public Nullable<int> CVV { get; set; }
        public string ZipCode { get; set; }
        public Nullable<bool> IsDefault { get; set; }
        public Nullable<System.Guid> ParentCardId { get; set; }
    }
}
