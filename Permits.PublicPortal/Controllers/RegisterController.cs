using AutoMapper;
using Permits.Core.Implimentation;
using Permits.Core.Interfaces;
using Permits.DataAccess;
using Permits.DataAccess.Managers;
using Permits.PublicPortal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Permits.PublicPortal.Controllers
{
    public class RegisterController : Controller
    {
       
        
        // GET: Register
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            RegisterViewModel model = new RegisterViewModel();
            return View(model);
        }

        [HttpPost]
        public ActionResult Create(RegisterViewModel viewModel)
        {

            viewModel.User.LoginName = viewModel.User.EmailAddress;
            if (ModelState.IsValid)
            {
                UserManager UM = new UserManager();
                if (!UM.IsLoginNameExist(viewModel.User.LoginName))
                {
                    ICar CarBAL = new CarBAL();
                    List<Car> car = Mapper.Map<List<Car>>(viewModel.Car);
                    var UserId = UM.AddUserAccount(viewModel.User);
                    CarBAL.AddCarDetails(car,UserId);
                    FormsAuthentication.SetAuthCookie(viewModel.User.FirstName, false);
                    return RedirectToAction("Index", "User");

                }
                else
                    ModelState.AddModelError("", "Login Name already taken.");
            }
            return View();
        }
    }
}