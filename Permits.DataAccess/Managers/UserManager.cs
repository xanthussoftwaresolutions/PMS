using System;
using System.Linq;
using System.Collections.Generic;
using Permits.DataAccess;
using System.Data;
using System.Security.Cryptography;
using System.Web.Security;
using System.Net.Mail;
using System.Web;
//using Request;

namespace Permits.DataAccess.Managers
{

    public class UserManager
    {

        public Tuple<string, string> Password(string password = "null")
        {
            password = password == "null" ? Membership.GeneratePassword(10, 1) : password;
            byte[] plainText = new byte[password.Length * sizeof(char)];
            System.Buffer.BlockCopy(password.ToCharArray(), 0, plainText, 0, plainText.Length);

            string saltvalue = Membership.GeneratePassword(5, 1);
            byte[] salt = new byte[saltvalue.Length * sizeof(char)];
            System.Buffer.BlockCopy(saltvalue.ToCharArray(), 0, salt, 0, salt.Length);

            //HashAlgorithm algorithm = new SHA256Managed();

            byte[] plainTextWithSaltBytes =
              new byte[plainText.Length + salt.Length];

            for (int i = 0; i < plainText.Length; i++)
            {
                plainTextWithSaltBytes[i] = plainText[i];
            }
            for (int i = 0; i < salt.Length; i++)
            {
                plainTextWithSaltBytes[plainText.Length + i] = salt[i];
            }
            string hashValue = Convert.ToBase64String(plainTextWithSaltBytes);
            return Tuple.Create(hashValue, saltvalue);
        }

        public int AddUserAccount(UserSignUpView user)
        {

            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {

                //return RedirectToAction("Confirm", "Account", new { Email = user.Email });

                UserManager Usermanger = new UserManager();
                //Permits.DataAccess.WebUser SU = new Permits.DataAccess.WebUser();
                WebUser SU = new WebUser();
                string password = user.Password != null ? user.Password : "null";
                var tuple = Usermanger.Password(password);
                SU.UserName = user.EmailAddress;
                SU.EmailAddress = user.EmailAddress;
                //SU.Password = user.Password; tuple.Item1
                SU.Password = tuple.Item1;
                SU.Salt = tuple.Item2;
                SU.FirstName = user.FirstName != null ? user.FirstName : SU.FirstName;
                SU.LastName = user.LastName != null ? user.LastName : SU.LastName;
                SU.EmailAddress = user.EmailAddress != null ? user.EmailAddress : SU.EmailAddress;
                SU.Active = true;
                SU.AgencyID = user.AgencyID == 0 ? 1:user.AgencyID;
                SU.RoleID = user.RoleID == 0 ? 1 : user.RoleID;
                SU.DateTimeCreated = DateTime.Now;
                SU.DateTimeModified = DateTime.Now;

                db.WebUser.Add(SU);

                ;
                if (user.RoleID > 0)
                {
                    Permits.DataAccess.UserRoles SUR = new Permits.DataAccess.UserRoles();
                    SUR.UserId = SU.WebUserID;
                    SUR.RoleId = SU.RoleID??1;
                    db.UserRoles.Add(SUR);
                }
                db.SaveChanges();
                return SU.WebUserID;
            }
        }

        public void UpdateUserAccount(UserProfileView user)
        {

            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                using (var dbContextTransaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        WebUser SU = new WebUser();
                        SU.UserName = user.LoginName;
                        SU.Password = user.Password;
                        SU.FirstName = user.FirstName != null ? user.FirstName : SU.FirstName;
                        SU.LastName = user.LastName != null ? user.LastName : SU.LastName;
                        SU.EmailAddress = user.EmailID != null ? user.EmailID : SU.EmailAddress;
                        SU.DateTimeModified = DateTime.Now;

                        if (user.RoleID > 0)
                        {
                            var userRole = db.UserRoles.Where(o => o.UserId == user.UserID);
                            Permits.DataAccess.UserRoles SUR = null;
                            if (userRole.Any())
                            {
                                SUR = userRole.FirstOrDefault();
                                SUR.RoleId = user.RoleID;
                                SUR.UserId = user.UserID;
                            }
                            else
                            {
                                SUR = new Permits.DataAccess.UserRoles();
                                SUR.RoleId = user.RoleID;
                                SUR.UserId = user.UserID;

                            }

                            db.SaveChanges();
                        }
                        dbContextTransaction.Commit();
                    }
                    catch
                    {
                        dbContextTransaction.Rollback();
                    }
                }
            }
        }

        public bool IsLoginNameExist(string loginName)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                return db.WebUser.Where(o => o.UserName.Equals(loginName)).Any();
            }
        }

        public string GetUserPassword(string loginName)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {

                var user = db.WebUser.Where(o => o.UserName.ToLower().Equals(loginName)).FirstOrDefault();
                if (user != null)

                    return user.Password;
                else
                    return string.Empty;
            }
        }

        public bool GetUserPassword(UserLoginView obj)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                bool Check = false;
                var user = db.WebUser.Where(o => o.UserName.ToLower().Equals(obj.LoginName)).FirstOrDefault();
                if (user != null)
                {
                    var password = Password(obj.Password, user.Salt);
                    if (user.Password == password)
                        Check = true;
                    else
                        Check = false;
                }
                return Check;
            }
        }

        public bool ChangePassword(UserChangePassword obj)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                bool Check = false;
                var user = "";
                //= db.WebUser.Where(o => o.UserName.ToLower().Equals(obj.LoginName)).FirstOrDefault();
                if (user != null)
                {
                    //var password = Password(obj.OldPassword, user.Salt);
                    //if (user.Password == password)
                    //    Check = true;
                    //else
                    //    Check = false;
                }
                return Check;
            }
        }

        public string[] GetRolesForUser(string loginName)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                WebUser SU = db.WebUser.Where(o => o.UserName.ToLower().Equals(loginName))?.FirstOrDefault();
                if (SU != null)
                {
                    var roles = from q in db.UserRoles
                                join r in db.Roles on q.RoleId equals r.Id
                                select r.Name;

                    if (roles != null)
                    {
                        return roles.ToArray();
                    }
                }

                return new string[] { };
            }
        }

        public bool IsUserInRole(string loginName, string roleName)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                WebUser SU = db.WebUser.Where(o => o.UserName.ToLower().Equals(loginName))?.FirstOrDefault();
                if (SU != null)
                {
                    var roles = from q in db.UserRoles
                                join r in db.Roles on q.RoleId equals r.Id
                                where r.Name.Equals(roleName) && q.UserId.Equals(SU.WebUserID)
                                select r.Name;

                    if (roles != null)
                    {
                        return roles.Any();
                    }
                }

                return false;
            }
        }

        public List<AgencyList> GetAllAgency()
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                var agency = db.Agency.Select(o => new AgencyList
                {
                    AgencyID = o.AgencyID,
                    Name = o.Name,
                    //RoleDescription = o.Description
                }).ToList();

                return agency;
            }
        }

        public List<LOOKUPAvailableRole> GetAllRoles()
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                var roles = db.Roles.Select(o => new LOOKUPAvailableRole
                {
                    RoleID = o.Id,
                    RoleName = o.Name,
                    RoleDescription = o.Description
                }).ToList();

                return roles;
            }
        }

        public int GetUserID(string loginName)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                var user = db.WebUser.Where(o => o.UserName.Equals(loginName));
                if (user.Any())
                    return user.FirstOrDefault().WebUserID;
            }
            return 0;
        }

        public List<UserProfileView> GetAllUserProfiles()
        {
            List<UserProfileView> profiles = new List<UserProfileView>();
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                UserProfileView UPV;
                var users = db.WebUser.ToList();

                foreach (WebUser u in db.WebUser)
                {
                    UPV = new UserProfileView();
                    UPV.UserID = u.WebUserID;
                    UPV.LoginName = u.UserName;
                    UPV.Password = u.Password;
                    UPV.FirstName = u.FirstName;
                    UPV.LastName = u.LastName;
                    //UPV.Gender = u.Gender;


                    var SUR = db.UserRoles.Where(o => o.UserId.Equals(u.WebUserID));
                    if (SUR.Any())
                    {
                        var userRole = SUR.FirstOrDefault();
                        UPV.RoleID = userRole.RoleId;
                        UPV.RoleName = userRole.Roles.Name;
                        //UPV.IsRoleActive = userRole.IsActive;
                    }

                    profiles.Add(UPV);
                }
            }

            return profiles;
        }

        public UserSignUpView GetUserDataView(string loginName)
        {

            UserSignUpView UDV = new UserSignUpView();
            List<AgencyList> agency = GetAllAgency();
            List<UserProfileView> profiles = GetAllUserProfiles();
            List<LOOKUPAvailableRole> roles = GetAllRoles();

            int? userAssignedRoleID = 0, userID = 0;
            string userGender = string.Empty;
            int? agencyid = 0;
            userID = GetUserID(loginName);
            //using (PermitEntitiesDb db = new PermitEntitiesDb())
            //{
            //    userAssignedRoleID = db.UserRoles.Where(o => o.UserId == userID)?.FirstOrDefault().RoleId;

            //}

            List<Gender> genders = new List<Gender>();
            genders.Add(new Gender { Text = "Male", Value = "M" });
            genders.Add(new Gender { Text = "Female", Value = "F" });

            UDV.UserProfile = profiles;
            UDV.UserRoles = new UserRoles { SelectedRoleID = userAssignedRoleID, UserRoleList = roles };
            UDV.UserGender = new UserGender { SelectedGender = userGender, Gender = genders };
            UDV.Agency = new Agency { SelectedagencyID = agencyid, AgencyList = agency };
            return UDV;
        }

        public UserProfileView GetUserProfile(int userID)
        {
            UserProfileView UPV = new UserProfileView();
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                var user = db.WebUser.Find(userID);
                if (user != null)
                {
                    UPV.UserID = user.WebUserID;
                    UPV.LoginName = user.UserName;
                    UPV.Password = user.Password;
                    UPV.FirstName = user.FirstName;
                    UPV.LastName = user.LastName;
                    //UPV.Gender = SUP.Gender;

                    var SUR = db.UserRoles.Find(userID);
                    if (SUR != null)
                    {
                        UPV.RoleID = SUR.RoleId;
                        UPV.RoleName = SUR.Roles.Name;
                        //UPV.IsRoleActive = SUR.IsActive;
                    }
                }
            }
            return UPV;
        }

        public UserProfileView GetUserProfileByEmail(string Email)
        {
            UserProfileView UPV = new UserProfileView();
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                var user = db.WebUser.Where(x=>x.EmailAddress == Email).FirstOrDefault();
                if (user != null)
                {
                    UPV.UserID = user.WebUserID;
                    UPV.LoginName = user.UserName;
                    UPV.Password = user.Password;
                    UPV.FirstName = user.FirstName;
                    UPV.LastName = user.LastName;
                    UPV.AgencyID = user.AgencyID;

                    var SUR = db.UserRoles.Where(x=>x.UserId == user.WebUserID).FirstOrDefault();
                    if (SUR != null)
                    {
                        UPV.RoleID = SUR.RoleId;
                        UPV.RoleName = SUR.Roles.Name;
                        //UPV.IsRoleActive = SUR.IsActive;
                    }
                }
            }
            return UPV;
        }
        public void DeleteUser(int userID)
        {
            using (PermitEntitiesDb db = new PermitEntitiesDb())
            {
                using (var dbContextTransaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        var SUR = db.UserRoles.Where(o => o.UserId == userID);
                        if (SUR.Any())
                        {
                            db.UserRoles.Remove(SUR.FirstOrDefault());
                            db.SaveChanges();
                        }

                        //var SUP = db.UserProfile.Where(o => o.UserID == userID);
                        //if (SUP.Any())
                        //{
                        //    db.UserProfile.Remove(SUP.FirstOrDefault());
                        //    db.SaveChanges();
                        //}

                        var SU = db.WebUser.Where(o => o.WebUserID == userID);
                        if (SU.Any())
                        {
                            db.WebUser.Remove(SU.FirstOrDefault());
                            db.SaveChanges();
                        }

                        dbContextTransaction.Commit();
                    }
                    catch
                    {
                        dbContextTransaction.Rollback();
                    }
                }
            }
        }

        public string Password(string password, string saltvalue)
        {
            byte[] plainText = new byte[password.Length * sizeof(char)];
            System.Buffer.BlockCopy(password.ToCharArray(), 0, plainText, 0, plainText.Length);

            byte[] salt = new byte[saltvalue.Length * sizeof(char)];
            System.Buffer.BlockCopy(saltvalue.ToCharArray(), 0, salt, 0, salt.Length);

            //HashAlgorithm algorithm = new SHA256Managed();

            byte[] plainTextWithSaltBytes =
              new byte[plainText.Length + salt.Length];

            for (int i = 0; i < plainText.Length; i++)
            {
                plainTextWithSaltBytes[i] = plainText[i];
            }
            for (int i = 0; i < salt.Length; i++)
            {
                plainTextWithSaltBytes[plainText.Length + i] = salt[i];
            }
            string hashValue = Convert.ToBase64String(plainTextWithSaltBytes);
            return hashValue;
        }

    }
}
