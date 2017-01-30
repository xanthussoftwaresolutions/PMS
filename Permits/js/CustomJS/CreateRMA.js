$(document).ready(function () {
    waitingDialog.hide();
    TabActivator();
    $("#divAddressline").hide();
    $('#RMADescription').text("");
    $('#AddressLine').text("");

    var hdnStatus = $("#hdnStatus").val();
    if (hdnStatus == 1) {
        setTimeout(function () {
            window.location.href = 'ViewRMA';
        }, 2000);
    }

    setTimeout(function () {
        var AddressID = $("#AddressID").val();
        var TypeId = $("#RMAType").val();
        OnTypeChange(TypeId);
        if (AddressID != 0) {
            OnAddressChange(AddressID);            
        }
        else {
            $('#AddressLine').text("");
        }
    }, 500);

    $("#customer").change(function () {
        waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
        var CustomerID = $("#customer").val();
        var params = {
            "customerid": CustomerID
        }
        //Updates customer Id in session
        $.ajax({
            type: 'GET',
            url: "/RMA/RMADetails/UpdateSession",
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            data: params,
            success: function (result) {
                if (result.data == "success") {
                    window.location.href = 'CreateRMA';
                }
                else {
                    console.log("Failed : Unable to Update Session");
                    waitingDialog.hide();
                }
            },
            error: function () {
                console.log("Failed : Unable to Update Session");
                waitingDialog.hide();
            }
        });
    });

    $("#addshipping").click(function () {
        MaintainView();
    });

    $("#AddressLine").click(function () {
        MaintainView();
    });

});

function AlertFunction(e) {
    console.log(e);
    console.log("Not Implimented Yet");
}