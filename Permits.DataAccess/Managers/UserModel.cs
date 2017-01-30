using System;
using System.Collections.Generic;
using Permits.DataAccess;
using System.ComponentModel.DataAnnotations;

namespace Permits.DataAccess.Managers
{
    public class UserSignUpView
    {
        [Key]
        public int UserID { get; set; }
        public int RoleID { get; set; }
        public int AgencyID { get; set; }

        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
        public string RoleName { get; set; }
        //[Required(ErrorMessage = "Login Name Required")]
        [Display(Name = "UserName")]
        public string LoginName { get; set; }
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid Phone number")]
        public string PhoneNumber { get; set; }
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required(ErrorMessage = "First name is required")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string Gender { get; set; }
        //[Required(ErrorMessage = "Email address is required")]
        //[DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        //[Compare("EmailAddress")]
        public string ConfirmEmail { get; set; }

        public bool EmailOption { get; set; }
        public IEnumerable<UserProfileView> UserProfile { get; set; }
        public UserRoles UserRoles { get; set; }
        public Agency Agency { get; set; }
        public UserGender UserGender { get; set; }
    }

    public class UserLoginView
    {
        [Key]
        public int UserID { get; set; }
        [Required(ErrorMessage = "*")]
        [Display(Name = "Login ID")]
        public string LoginName { get; set; }
        [Required(ErrorMessage = "*")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }

    public class UserProfileView
    {
        [Key]
        public int UserID { get; set; }
        public int RoleID { get; set; }
        public string RoleName { get; set; }
        public bool? IsRoleActive { get; set; }
        [Required(ErrorMessage = "*")]
        [Display(Name = "Login ID")]
        public string LoginName { get; set; }
        [Required(ErrorMessage = "*")]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required(ErrorMessage = "*")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "*")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string EmailID { get; set; }
        public int AgencyID { get; set; }
    }

    public class LOOKUPAvailableRole
    {
        [Key]
        public int RoleID { get; set; }
        public string RoleName { get; set; }
        public string RoleDescription { get; set; }
    }

    public class AgencyList
    {
        [Key]
        public int AgencyID { get; set; }
        public string Name { get; set; }
        public string RoleDescription { get; set; }
    }
    public class Agency
    {
        public int? SelectedagencyID { get; set; }
        public IEnumerable<AgencyList> AgencyList { get; set; }
    }

    public class Gender
    {
        public string Text { get; set; }
        public string Value { get; set; }
    }
    public class UserRoles
    {
        public int? SelectedRoleID { get; set; }
        public IEnumerable<LOOKUPAvailableRole> UserRoleList { get; set; }
    }

    public class UserGender
    {
        public string SelectedGender { get; set; }
        public IEnumerable<Gender> Gender { get; set; }
    }
    public class UserDataView
    {
        public IEnumerable<UserProfileView> UserProfile { get; set; }
        public UserRoles UserRoles { get; set; }
        public UserGender UserGender { get; set; }
    }

    public class UserForgotView
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }

    public class UserChangePassword
    {
        [Required(ErrorMessage = "*")]
        [Display(Name = "Current Password")]
        public string OldPassword { get; set; }

        [Required(ErrorMessage = "*")]
        [Display(Name = "New Password")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Password does not match.")]
        [Display(Name = "Confirm Password")]
        public string ConfirmPassword { get; set; }
    }
}
