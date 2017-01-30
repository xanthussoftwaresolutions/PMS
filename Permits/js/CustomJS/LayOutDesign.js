$(function () {
    var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/") + 1);
    $(".panel-body a").each(function () {
        if ($(this).attr("name") == pgurl || $(this).attr("name") == '') {
            $(this).addClass("active");
        }
    });
});

//$(function () {
//    $('.date-only').datetimepicker({
//        format: 'DD/MM/YYYY',
//        allowInputToggle: true
//    });

//    $('.time-only').datetimepicker({
//        format: 'LT',
//        allowInputToggle: true
//    });
//});

