using System.Web;
using System.Web.Optimization;

namespace Permits.PublicPortal
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            BundleFileSetOrdering ordering = new BundleFileSetOrdering("My Order");
            var bundle = new Bundle("~/bundles/JsScripts");

            ordering.Files.Add("~/inc/js/modernizr.min.js");
            ordering.Files.Add("~/inc/js/webfont.js");
            ordering.Files.Add("~/scripts/jquery.min.js");
            ordering.Files.Add("~/inc/js/jquery.validate.min.js");
            ordering.Files.Add("~/Scripts/jquery.unobtrusive-ajax.min.js");
            //ordering.Files.Add("~/inc/js/jquery.min.js");
            ordering.Files.Add("~/inc/js/jquery.colorbox-min.js");
            ordering.Files.Add("~/inc/js/picker.js");
            ordering.Files.Add("~/inc/js/picker.date.js");
            ordering.Files.Add("~/inc/js/functions.js");
            ordering.Files.Add("~/scripts/jquery-ui.min.js");
            ordering.Files.Add("~/scripts/bootstrap.min.js");
            ordering.Files.Add("~/inc/js/jquery.maskedinput.min.js");


            ordering.Files.Add("~/Content/bootstrap.min.css");
            ordering.Files.Add("~/inc/style/pickerDefault.css");
            ordering.Files.Add("~/inc/style/pickerDefault.date.css");
            ordering.Files.Add("~/scripts/jquery-ui.css");
            ordering.Files.Add("~/inc/style/colorbox.css");
            ordering.Files.Add("~/inc/style/base.css");


            bundles.FileSetOrderList.Clear();
            bundles.FileSetOrderList.Add(ordering);

            bundle.Include("~/inc/js/modernizr.min.js");
            bundle.Include("~/inc/js/webfont.js");
            bundle.Include("~/scripts/jquery.min.js");
            bundle.Include("~/inc/js/jquery.validate.min.js");
            bundle.Include("~/Scripts/jquery.unobtrusive-ajax.min.js");
            //bundle.Include("~/inc/js/jquery.min.js");
            bundle.Include("~/inc/js/jquery.colorbox-min.js");
            bundle.Include("~/inc/js/picker.js");
            bundle.Include("~/inc/js/picker.date.js");
            bundle.Include("~/inc/js/functions.js");
            bundle.Include("~/scripts/jquery-ui.min.js");
            bundle.Include("~/scripts/bootstrap.min.js");
            bundle.Include("~/inc/js/jquery.maskedinput.min.js");
            bundles.Add(bundle);



            bundles.Add(new StyleBundle("~/bundles/Styles")
            .Include("~/Content/bootstrap.min.css")
            .Include("~/inc/style/pickerDefault.css")
            .Include("~/inc/style/pickerDefault.date.css")
            .Include("~/scripts/jquery-ui.css")
            .Include("~/inc/style/colorbox.css")
            .Include("~/inc/style/base.css"));
        }
    }
}