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
    
    public partial class PermitSubTypeProof
    {
        public int PermitSubTypeProofID { get; set; }
        public int PermitSubTypeID { get; set; }
        public int ProofTypeID { get; set; }
        public Nullable<bool> IsMandatory { get; set; }
    
        public virtual PermitSubType PermitSubType { get; set; }
        public virtual ProofType ProofType { get; set; }
    }
}
