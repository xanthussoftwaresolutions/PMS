//Method used to create Table for Pint method, Expects Return object of DataTable Jquery
function CreateTableFromObject(tblObj) {
    objHeader = JSON.parse(JSON.stringify(tblObj.buttons.exportData()))["header"];
    objRows = JSON.parse(JSON.stringify(tblObj.buttons.exportData()))["body"];

    //Check If Action Exists in Table and remove it
    var index = objHeader.indexOf('Action');
    if (index > -1) {
        objHeader.splice(index, 1);
    }

    tblToPrint = "<table style='border: 1px solid black; border-collapse: collapse;'><thead><tr>";
    $.each(objHeader, function (key, value) {
        tblToPrint += "<th style='border: 1px solid black;'>" + value + "</th>";
    });
    tblToPrint += "</tr></thead><tbody>";
    $.each(objRows, function (key, value) {
        tblToPrint += "<tr>";
        //If action exists then decrease target by 1
        if (index > -1) {
            target = value.length - 1;
        }else {
            target = value.length;
        }
        for (var i = 0; i < target; i++) {
            tblToPrint += "<td style='border: 1px solid black;'>" + value[i] + "</td>";
        }
        tblToPrint += "</tr>";
    });
    tblToPrint += "</tbody></table>";
    return tblToPrint;
}

//************Create and Edit RMA Module Methods ********************//
function OnAddressChange(e) {
    var CustomerID = $("#customer").val();
    if (CustomerID != 0 && e != 0) {
        var params = {
            "customerid": CustomerID,
            "addressid": e
        }
        $.ajax({
            type: 'GET',
            url: "/RMA/RMADetails/GetShippingName",
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            data: params,
            success: function (result) {
                if (result.toString() == "failed") {
                    console.log("An error has occured!!! Unable to Load ShippingName");
                    $("#divAddressline").hide();
                }
                else {
                    $.each(result, function () {
                        var data = result[0];
                        var ShippingName = data.ShippingName + " " + data.StreetNumber + " " + data.StreetAddress + " " + data.City + ", " + data.State + " " + data.ZipCode;
                        $('#AddressLine').text(ShippingName);
                        $('#lblAddressLine').text(ShippingName);

                        var link = "/Shipping/Shipping/EditShipping?addressId=" + e;
                        $('#AddressLine').attr("href", link);
                        $("#divAddressline").show();
                    });
                }
            },
            error: function () {
                console.log("An error has occured!!! Unable to Load ShippingName");
            }
        });
    }
    else {
        $("#divAddressline").hide();
        $('#AddressLine').text("");
    }
}

function OnTypeChange(e) {
    if (e != "") {
        var params = {
            "rmaType": e
        }
        $.ajax({
            type: 'GET',
            url: "/RMA/RMADetails/GetRMADescription",
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            data: params,
            success: function (result) {
                if (result.toString() == "failed") {
                    $('#RMADescription').text("");
                    console.log("An error has occured!!! Unable to Load RMA Description");
                }
                else {
                    $('#RMADescription').text(result);
                }
            },
            error: function () {
                console.log("An error has occured!!! Unable to Load RMA RMA Description");
            }
        });
    }
    else {
        $('#RMADescription').text("");
    }
}

function MaintainView() {
    var values = {};
    $('.form-control').each(function () {
        if (this.name != "" && this.name != undefined) {
            values[this.name] = this.value;
        }
    });
    //console.log(JSON.stringify(values));
    var model = {
        "createRMAViewModel": values
    };

    $.ajax({
        url: "/RMA/RMADetails/MaintainView",
        type: "POST",
        data: JSON.stringify(model),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (response) {
        },
        success: function (response) {
        }
    });
}
//************Create and Edit RMA Module Methods ********************//

//Add active class to current Tab
function TabActivator() {
    var shownOnRefresh = JSON.parse(localStorage.getItem('shownOnRefresh'));
    $('a[href="#' + shownOnRefresh + '"]').click();
}