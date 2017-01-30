using Permits.DataAccess.Managers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Permits.PublicPortal.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SignUp(UserSignUpView USV)
        {
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                if (!UM.IsLoginNameExist(USV.LoginName))
                {
                    UM.AddUserAccount(USV);
                    FormsAuthentication.SetAuthCookie(USV.FirstName, false);
                    return RedirectToAction("Welcome", "Home");

                }
                else
                    ModelState.AddModelError("", "Login Name already taken.");
            }
            return View();
        }

        [Authorize]
        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }


        public ActionResult LogIn()
        {
            return View();
        }

        [HttpPost]
        public ActionResult LogIn(UserLoginView ULV, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                var password = UM.GetUserPassword(ULV);


                if (password)
                {
                    FormsAuthentication.SetAuthCookie(ULV.LoginName, false);
                    return RedirectToAction("Welcome", "Home");
                    //FormsAuthentication.RedirectFromLoginPage(ULV.LoginName, false);
                }
                else
                {
                    ModelState.AddModelError("", "The user login or password provided is incorrect.");
                }
            }
            // If we got this far, something failed, redisplay form
            return View(ULV);
        }

        public ActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ForgotPassword(UserForgotView ULV, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                var user = UM.GetUserProfileByEmail(ULV.Email);
                if (user != null)
                {
                    ////Here you can write method to send email to the user
                    //var set = Email.MethodName(user.AgencyID, "PPF", user.LoginName, ULV.Email);
                    // TempData["Success"] = "Email sent successfully. Please check your email inbox."
                }
                else
                {
                    ModelState.AddModelError("", "The user login or password provided is incorrect.");
                }
            }
            // If we got this far, something failed, redisplay form
            return View(ULV);
        }

        public ActionResult ChangePassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ChangePassword(UserChangePassword ULV, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                var password = UM.GetUserPassword(ULV.OldPassword);
                if (1==1)
                {
                    ////Here you can write method to send email to the user
                    //var set = Email.MethodName(user.AgencyID, "PPF", user.LoginName, ULV.Email);
                    // TempData["Success"] = "Email sent successfully. Please check your email inbox."
                }
                else
                {
                    ModelState.AddModelError("", "The user login or password provided is incorrect.");
                }
            }
            // If we got this far, something failed, redisplay form
            return View(ULV);
        }

    }
}

