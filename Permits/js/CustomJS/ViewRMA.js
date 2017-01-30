//"RMADetails"
$(document).ready(function () {
    var flag;
    var customerId = $("#customer").val();
    TabActivator();

    var url = "RMADetails";   
    BindDataTable(url, flag, customerId);

    $("#customer").change(function () {
        var customerId = $("#customer").val();

        waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });

        flag = 1;
        var url = "RMADetails";
        BindDataTable(url, flag, customerId);

    });
    //$("#customer").change(function () {
    //    waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
    //    window.location.href = 'ViewRMA';
    //});

    $("#confermBtn").click(function () {
        var rmaNumber = id;
        $.ajax({
            url: "/RMA/RMADetails/DeleteRMAView?RMANumber=" + rmaNumber,
            type: "GET",
            dataType: "json",
            success: function (data) {
                if (data.data == "true") {
                    $('#myModal').modal('hide');
                    $('#myModal2').modal('show');
                }
                else if (data.data == "false") {
                    $('#myModal').modal('hide');
                    $('#myModal1').modal('show');
                }
            }
        })
    });



    $("#SearchBtn").click(function () {
       SearchViewRma();
    });


    $(".modal").on("shown.bs.modal", alignModal);

    // Align modal when user resize the window
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });

    $("#txtFromDate").datepicker({
        maxDate: 0,
        numberOfMonths: 1,
        changeYear: true,
        changeMonth: true,
        yearRange: "c-10:+nn",
        onSelect: function (selected) {
            $("#txtToDate").datepicker("option", "minDate", selected)
            $("#Monthlydiv>ul>li>input").removeClass("activeli");
        }
    });

    $("#txtToDate").datepicker({
        minDate: 0,
        maxDate: 0,
        numberOfMonths: 1,
        changeYear: true,
        changeMonth: true,
        yearRange: "c-10:+nn",
        onSelect: function (selected) {
            $("#txtFromDate").datepicker("option", "maxDate", selected)
            $("#Monthlydiv>ul>li>input").removeClass("activeli");
        }
    });

    $("#modalclose").click(function () {
        $('#myModal2').modal('hide');
        window.location.href = 'ViewRMA';
    });

    $(".DPFrom").on('click', function (e) {
        $("#txtFromDate").focus();
    });
    $(".DPTo").on('click', function (e) {
        $("#txtToDate").focus();
    });




    $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('[data-toggle="popover"]').popover(
    {
        html: true,
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title" style="display:none;"></h3><div class="popover-content"style="margin-top:-20px"></div><div class="popover-footer" style="margin-bottom:2%;padding: 0px;"><a href="#" class="btn " style="display:block;padding:4px;"><input type="submit" value="Export To Excel" id="ExportToExcel" name="Command" style="border:none;background-color:white;color:#186163"/></a><a href="#" class="btn  margin_top" style="display:block;padding:0px 0px;"><input value="Export To PDF" type="submit" id="ExportToPDF" name="Command" style="border:none;background-color:white;color:#186163"/></a></div></div>'
    });

    $.ajax({
        url: "/RMA/RMADetails/GetRMANumber",
        type: "POST",
        data: "",
        dataType: "json",
        success: function (data) {

            $("#RMANumber").autocomplete({
                source: data.data
            })

        }
    });
});





function BindDataTable(url, flag, customerId) {
    var params;
    if (flag == 1) {
        params =
            {
                "flag": flag,
                "customerId": customerId
            }
    }
    $('#myTable tfoot td').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text"  style="width:100px;" placeholder=" ' + title + '" />');
    });
    $('#myTable').DataTable({
        destroy: true,
        "ajax": {
            "url": url,
            "data": params,
            "type": "POST",
            "datatype": "json",
            "processing": true,
            "serverSide": true,

        },
        "order": [[3, "desc"]],
        "oLanguage": {
            //"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfo": "Total Records : _TOTAL_",
            "sInfoEmpty": "Total Records : _TOTAL_"
        },
        "fnInitComplete": function(oSettings, json) {
            $("#txtFromDate").val(json.modeldata.StartDate);
            $("#txtToDate").val(json.modeldata.EndDate);
            $("#Fromtimepicker1").val(json.modeldata.StartDateTime);
            $("#Totimepicker1").val(json.modeldata.EndDateTime);            
            $("#RMANumber").val(json.modeldata.RmaNumber);
            var status = json.modeldata.RMAStatus;
            if (status == "ALL")
            {
                $("#Status option:first").attr("selected", "selected");
            }
            else
            {
                $("#Status").val(json.modeldata.RMAStatus);
            }

            var id = json.modeldata.ButtonFilter;
            if (id != "")
            {
                $("#" + id).addClass("activeli");
            }
            else
            {
                $('input[type="button"]').removeClass("activeli");
            }
                
            
           
        },
        "paging": true,
        //"bJQueryUI": true,
        "iDisplayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        //"binfo": true,
        //"autoWidth": false,
        "bSortCellsTop": true,
        "columns": [
                { "data": "RMANumber" },
                { "data": "IPSContact" },
                { "data": "CustomerContact" },
                { "data": "CreatedDateTime" },
                { "data": "FSDateTime" },
                { "data": "Comments" },
                { "data": "ProductType" },
                { "data": "RMAType" },
                { "data": "Status" },
                { "data": "ActionLinks" }
        ],
        "columnDefs": [
                   {
                       "targets": 0,
                       "width": "100px"
                   },
                   {
                       "targets": 1,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 2,
                       "width": "150px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 3,
                       "width": "100px"
                   },
                   {
                       "targets": 4,
                       "width": "100px"
                   },
                   {
                       "targets": 5,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 6,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 7,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 8,
                       "width": "50px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                        "targets": 9,
                        "width": "150px",
                        "orderable": false
                   }
        ]
    });
    $(".dataTables_length").addClass("pull-right");
    $('#myTable tfoot tr').insertAfter($('#myTable thead tr'));
    var table = $('#myTable').DataTable();
    
    table.columns().every(function () {
        var that = this;

        $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });    

    waitingDialog.hide();
}



function MinusDaysFromDate(Days) {
    var today = new Date();
    today.setDate(today.getDate() - Days);
    return today;
}
function LastDaysToDate(Days) {
    var today = new Date();
    today.setDate(today.getDate() + Days);
    return today;
}

function CreateMMDDYYYYDate(yourDate) {
    var C_dd = yourDate.substring(0, 2);
    var C_mm = yourDate.substring(3, 5);
    var C_yyyy = yourDate.substring(6, 10);
    yourDate = C_mm + "/" + C_dd + "/" + C_yyyy;
    yourDate = new Date(yourDate);
    return yourDate;
}

function OnRMATodayDateOnclick(e) {
    $("#Monthlydiv>ul>li>input").removeClass("activeli");
    $("#btntoday").addClass("activeli");

    var today1 = new Date();
    var mm = today1.getMonth() + 1;
    var dd = today1.getDate();
    var yyyy = today1.getFullYear();
    today1 = mm + '/' + dd + '/' + yyyy;
    $("#txtFromDate").val(today1);
    $("#txtToDate").val(today1);
}



function OnRMAyesterdayDateOnclick(e) {
    $("#Monthlydiv>ul>li>input").removeClass("activeli");
    $("#btnyesterday").addClass("activeli");

    var yesterday1 = (function (d) {
        d.setDate(d.getDate() - 1);
        return d
    })(new Date);
    var dd = yesterday1.getDate();
    var mm = yesterday1.getMonth() + 1;
    var yyyy = yesterday1.getFullYear();
    yesterday1 = mm + '/' + dd + '/' + yyyy;
    $("#txtFromDate").val(yesterday1);
    $("#txtToDate").val(yesterday1);
}



function OnRMAWeekDateOnclick(e) {
    $("#Monthlydiv>ul>li>input").removeClass("activeli");
    $("#btnweek").addClass("activeli");

    var targetDate = MinusDaysFromDate(7);
    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1; //January is 0!
    var yyyy = targetDate.getFullYear();
    targetDate = mm + '/' + dd + '/' + yyyy;
    var LastDate = new Date();
    var dd1 = LastDate.getDate();
    var mm1 = LastDate.getMonth() + 1; //January is 0!
    var yyyy1 = LastDate.getFullYear();
    LastDate = mm1 + '/' + dd1 + '/' + yyyy1;
    $("#txtFromDate").val(targetDate);
    $("#txtToDate").val(LastDate);



}




function OnRMAMonthDateOnclick(e) {
    $("#Monthlydiv>ul>li>input").removeClass("activeli");
    $("#btnmonth").addClass("activeli");

    var targetDate = MinusDaysFromDate(30);
    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1; //January is 0!
    var yyyy = targetDate.getFullYear();
    targetDate = mm + '/' + dd + '/' + yyyy;
    var LastDate = new Date();
    var dd1 = LastDate.getDate();
    var mm1 = LastDate.getMonth() + 1; //January is 0!
    var yyyy1 = LastDate.getFullYear();
    LastDate = mm1 + '/' + dd1 + '/' + yyyy1;
    $("#txtFromDate").val(targetDate);
    $("#txtToDate").val(LastDate);
}





function OnRMATypeChange(e) {

    var value = $('#Status option:selected').html();
    $('#myTable tbody tr').each(function () {
        var status = $(this).find("td").eq(7).html();
        if (value == status) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
        if (value == "Select RMA Status") {
            $(this).show();
        }
    });
}


function DeleteRMA(id1) {
    id = id1;
    $("#confermBtn").val(id);

    $('#myModal').modal({
        show: 'true'
    });
}

function alignModal() {
    var modalDialog = $(this).find(".modal-dialog");
    // Applying the top margin on modal dialog to align it vertically center
    modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}

function SearchViewRma()
{
    waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
    var id = $('.activeli:input[type="button"]').attr('id');
    var activetab = id == 'undefined' ? "" : id; //$('.activeli:input[type="button"]').val();
    
    var rmaNumber = $("#RMANumber").val();
    var status = $('#Status option:selected').html();
    var FromDate = $("#txtFromDate").val();
    var startDate = $("#txtFromDate").val();
    var endDate = $("#txtToDate").val();
    var startTime = $("#Fromtimepicker1").val();
    var endTime = $("#Totimepicker1").val();
    var startDateTime = startDate + " " + startTime;
    var endDateTime = endDate + " " + endTime;
    var customerID = $("#customer").val();
    var params = {
        "rmaNumber": rmaNumber,
        "customerID": customerID,
        "rmaStatus": status,
        "startDate": startDateTime,
        "endDate": endDateTime,
        "activetab": activetab
    }

    $('#myTable').DataTable({
        destroy: true,
        "ajax": {
            "url": "/RMA/RMADetails/AllSearchRma",
            "data": params,
            "type": "POST",
            "datatype": "json"
        },
        "order": [[3, "desc"]],
        "oLanguage": {
            //"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfo": "Total Records : _TOTAL_",
            "sInfoEmpty": "Total Records : _TOTAL_"
        },
        //"fnRowCallback": function (nRow, aData, iDisplayIndex) {
        //},
        "paging": true,
        //"bJQueryUI": false,
        "iDisplayLength": 10,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "binfo": true,
        //"autoWidth": false,
        "bSortCellsTop": true,
        "columns": [
                { "data": "RMANumber" },
                { "data": "IPSContact" },
                { "data": "CustomerContact" },
                { "data": "CreatedDateTime" },
                { "data": "FSDateTime" },
                { "data": "Comments" },
                { "data": "ProductType" },
                { "data": "RMAType" },
                { "data": "Status" },
                { "data": "ActionLinks" }
        ],
        "columnDefs": [
                   {
                       "targets": 0,
                       "width": "100px"
                   },
                   {
                       "targets": 1,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 2,
                       "width": "150px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 3,
                       "width": "100px"
                   },
                   {
                       "targets": 4,
                       "width": "100px"
                   },
                   {
                       "targets": 5,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 6,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 7,
                       "width": "100px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 8,
                       "width": "50px",
                       render: function (data, type, row) {
                           return data.length > 50 ? data.substr(0, 50) + '…' : data;
                       }
                   },
                   {
                       "targets": 9,
                       "width": "150px",
                       "orderable": false
                   }
        ]
    });
    $(".dataTables_length").addClass("pull-right");
    
    waitingDialog.hide();
}
