faultIds = "";
faultarray = "";
faultarrayLength = "";
PartNumbers = [];
var partDeleteId = 0;


$(document).ready(function () {

    TabActivator();

    function alignModal() {
        var modalDialog = $(this).find(".modal-dialog");
        // Applying the top margin on modal dialog to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);

    // Align modal when user resize the window
    $(window).on("resize", function () {
        $(".modal:visible").each(alignModal);
    });

    $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('.dwn_btn').click(function () {
        //$('html, body').animate({
        //    scrollTop: $('.btnAddPart').offset().top
        //}, 'slow');

        setTimeout(function () {
            $('[data-toggle="popover"]').popover('hide');
        }, 10000);
    });

    $('[data-toggle="popover"]').popover(
    {
        html: true,
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title" style="display:none;"></h3><div class="popover-content"style="margin-top:-20px"></div><div class="popover-footer" style="margin-bottom:2%;padding: 0px;"><a href="#" class="btn " style="display:block;padding:4px;"><input type="submit" value="Export To Excel" id="ExportToExcel" name="Command" style="border:none;background-color:white;color:#186163"/></a><a href="#" class="btn  margin_top" style="display:block;padding:0px 0px;"><input value="Export To PDF" type="submit" id="ExportToPDF" name="Command" style="border:none;background-color:white;color:#186163"/></a></div></div>'
    });

    $(function () {
        $.extend($.ui.autocomplete.prototype, {
            _renderItem: function (ul, item) {
                var term = this.element.val(), html = item.label.replace(term,
						"<b>" + term + "</b>");
                return $("<li></li>").data("item.autocomplete", item).append(
						$("<a></a>").html(html)).appendTo(ul);
            }
        });

        var availableTags = [];

        $(".ddlRMANumber option").each(function () {
            availableTags.push($(this).text());
        });

        $("#RMANumber").autocomplete({
            source: availableTags,
            delay: 0,
            select: function (event, ui) {

                $('.btnfirstAddPart').addClass('hide');
                $('.btnAddPart').removeClass('hide');

                var RmaNo = ui.item.value;
                waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
                var table = $('#AddPartTable').dataTable({
                    destroy: true,
                    "ajax": {
                        "url": "/AddPart/RMAPartDetailsbyRMAID",
                        "data": { RmaNumber: RmaNo },
                        "type": "POST",
                        "datatype": "json",
                    },
                    "fnRowCallback": function (nRow, aData, iDisplayIndex) {

                        var RMATerminalId = $('td:eq(0)', nRow).html();
                        var status = $('td:eq(6)', nRow).html();
                        if (status == 'L' || status == 'R') {
                            $('td:eq(10)', nRow).html(('<img src="/img/edit.png" onclick="EditFunction(' + RMATerminalId + ')"> <img src="/img/delete.png" onclick = "DeleteFunction(' + RMATerminalId + ')">'));
                            return nRow;
                        }
                        else {
                            $('td:eq(10)', nRow).html(('<img src="/img/edit.png" style="opacity:0.5;cursor:none;"> <img src="/img/delete.png" style="opacity:0.5;cursor:none;">'));
                            return nRow;
                        }
                    },
                    "bPaginate": true,
                    "bInfo": true,
                    "bJQueryUI": true,
                    "iDisplayLength": 10,
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    filter: false,
                    //"autoWidth": false,
                    "columns": [
                                        { "data": "RMATerminalId", "autoWidth": true },
                                        { "data": "PartNumber", "autoWidth": true },
                                        { "data": "ProductType", "autoWidth": true },
                                        { "data": "Fault", "autoWidth": true },
                                        { "data": "Comments", "autoWidth": false },
                                        { "data": "CreatedDate", "autoWidth": true },
                                        { "data": "Status", "autoWidth": true },
                                        { "data": "Warranty", "autoWidth": true },
                                        { "data": "Billable", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true }
                    ]
,
                    "columnDefs": [
                               {
                                   "targets": 0,
                                   "width": "50px"
                               },
                               {
                                   "targets": 1,
                                   "width": "80px"
                               },
                               {
                                   "targets": 2,
                                   "width": "100px"
                               },
                               {
                                   "targets": 3,
                                   "width": "200px"
                               },
                               {
                                   "targets": 4,
                                   "width": "200px"
                               },
                               {
                                   "targets": 5,
                                   "width": "160px"
                               },
                               {
                                   "targets": 6,
                                   "width": "60px"
                               },
                               {
                                   "targets": 7,
                                   "width": "75px"
                               },
                               {
                                   "targets": 8,
                                   "width": "65px"
                               },
                               {
                                   "targets": 9,
                                   "width": "60px"
                               },
                               {
                                   "targets": 10,
                                   "width": "50px",
                                   "orderable": false
                               }
                    ]
                });
                $(".dataTables_length").addClass("pull-right");
                waitingDialog.hide();
            }
        });
    });

    //$("#alertSinglePartAdd").fadeTo(2000, 500).slideUp(500, function () {
    //    $("#alertSinglePartAdd").slideUp(500);
    //});

    window.setTimeout(function () {
        $("#alertSinglePartAdd").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 2000);

    //$("#alertMultiPartAdd").fadeTo(2000, 500).slideUp(500, function () {
    //    $("#alertMultiPartAdd").slideUp(500);
    //});

    window.setTimeout(function () {
        $("#alertMultiPartAdd").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 2000);

    //$("#alertUpdatePart").fadeTo(2000, 500).slideUp(500, function () {
    //    $("#alertUpdatePart").slideUp(500);
    //});

    window.setTimeout(function () {
        $("#alertUpdatePart").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 2000);

    $("#customer").change(function () {
        waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
        var CustomerID = $("#customer").val();
        var params = {
            "CustomerId": CustomerID
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
                    window.location.href = 'AddPart';
                }
                else {
                    console.log("Failed : Unable to Update Customer");
                    waitingDialog.hide();
                }
            },
            error: function () {
                console.log("Error: Unable to Update Customer");
                waitingDialog.hide();
            }
        });
        //once start working remove below code


        if (CustomerID != null) {
            $.ajax({
                url: "/RMA/AddPart/GetRMANumber",
                type: "POST",
                data: params,
                dataType: "json",
                success: function (data) {

                    $("#RMANumber").autocomplete({
                        source: data.data,
                        select: function (event, ui) {
                            var RmaNo = ui.item.value;
                            var table = $('#AddPartTable').dataTable({
                                destroy: true,
                                "ajax": {
                                    "url": "/AddPart/RMAPartDetailsbyRMAID",
                                    "data": { RmaNumber: RmaNo },
                                    "type": "POST",
                                    "datatype": "json",
                                },
                                "fnRowCallback": function (nRow, aData, iDisplayIndex) {

                                    var RMATerminalId = $('td:eq(0)', nRow).html();
                                    var status = $('td:eq(6)', nRow).html();

                                    if (status == 'L' || status == 'R') {

                                        $('td:eq(10)', nRow).html(('<img src="/img/edit.png" onclick="EditFunction(' + RMATerminalId + ')"> <img src="/img/delete.png" onclick = "DeleteFunction(' + RMATerminalId + ')">'));
                                        return nRow;
                                    }
                                    else {

                                        $('td:eq(10)', nRow).html(('<img src="/img/edit.png" style="opacity:0.5;cursor:none;"> <img src="/img/delete.png" style="opacity:0.5;cursor:none;">'));
                                        return nRow;
                                    }
                                },
                                "bPaginate": true,
                                "bInfo": true,
                                "bJQueryUI": true,
                                "iDisplayLength": 10,
                                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                                filter: false,
                                //"autoWidth": false,
                                "columns": [
                                        { "data": "RMATerminalId", "autoWidth": true },
                                        { "data": "PartNumber", "autoWidth": true },
                                        { "data": "ProductType", "autoWidth": true },
                                        { "data": "Fault", "autoWidth": true },
                                        { "data": "Comments", "autoWidth": false },
                                        { "data": "CreatedDate", "autoWidth": true },
                                        { "data": "Status", "autoWidth": true },
                                        { "data": "Warranty", "autoWidth": true },
                                        { "data": "Billable", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true }
                                ]
        ,
                                "columnDefs": [
                                           {
                                               "targets": 0,
                                               "width": "50px"
                                           },
                               {
                                   "targets": 1,
                                   "width": "80px"
                               },
                               {
                                   "targets": 2,
                                   "width": "100px"
                               },
                               {
                                   "targets": 3,
                                   "width": "200px"
                               },
                               {
                                   "targets": 4,
                                   "width": "200px"
                               },
                               {
                                   "targets": 5,
                                   "width": "160px"
                               },
                               {
                                   "targets": 6,
                                   "width": "60px"
                               },
                               {
                                   "targets": 7,
                                   "width": "75px"
                               },
                               {
                                   "targets": 8,
                                   "width": "65px"
                               },
                               {
                                   "targets": 9,
                                   "width": "60px"
                               },
                               {
                                   "targets": 10,
                                   "width": "50px",
                                   "orderable": false
                               }
                                ]
                            });
                            $(".dataTables_length").addClass("pull-right");
                        }
                    })
                }
                ,
                complete: function () {
                    waitingDialog.hide();
                }
            });
        }
    });

    $('.singleRadio1.partscan').prop('checked', true);

    $('#file').prop("disabled", true);

    $(".singleRadio1.partscan").click(function () {

        $('#PartNumber').prop("disabled", false);
        $('#file').prop("disabled", true);
    });

    $(".singleRadio1.fileupload").click(function () {
        $('#file').prop("disabled", false);
        $('#PartNumber').prop("disabled", true);
    });

    var html = '<tr><td><input class="form-control" id="inputdefault" type="text"></td><td><input class="form-control" id="inputdefault" type="text">' +
        '</td><td><input class="form-control" id="inputdefault" type="text"></td><td><input class="form-control" id="inputdefault" type="text"></td><td>' +
        '<input class="form-control" id="inputdefault" type="text"></td><td><input class="form-control" id="inputdefault" type="text"></td><td>' +
        '<input class="form-control" id="inputdefault" type="text"></td><td><input class="form-control" id="inputdefault" type="text"></td>	<td>' +
        '</td></tr>'

    if ($('#RMANumber').val() == "") {

        $('.btnfirstAddPart').removeClass('hide');
        $('.btnAddPart').addClass('hide');

        var table = $('#AddPartTable').dataTable({
            "language": {
                "emptyTable": "No data available in table"
            },
            "bPaginate": true,
            "bInfo": true,
            "bJQueryUI": true,
            "iDisplayLength": 10,
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            filter: false,
            //"autoWidth": false,
            "columns": [
                                        { "data": "RMATerminalId", "autoWidth": true },
                                        { "data": "PartNumber", "autoWidth": true },
                                        { "data": "ProductType", "autoWidth": true },
                                        { "data": "Fault", "autoWidth": true },
                                        { "data": "Comments", "autoWidth": false },
                                        { "data": "CreatedDate", "autoWidth": true },
                                        { "data": "Status", "autoWidth": true },
                                        { "data": "Warranty", "autoWidth": true },
                                        { "data": "Billable", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true }
            ],
            "columnDefs": [
                       {
                           "targets": 0,
                           "width": "50px"
                       },
                               {
                                   "targets": 1,
                                   "width": "80px"
                               },
                               {
                                   "targets": 2,
                                   "width": "100px"
                               },
                               {
                                   "targets": 3,
                                   "width": "200px"
                               },
                               {
                                   "targets": 4,
                                   "width": "200px"
                               },
                               {
                                   "targets": 5,
                                   "width": "160px"
                               },
                               {
                                   "targets": 6,
                                   "width": "60px"
                               },
                               {
                                   "targets": 7,
                                   "width": "75px"
                               },
                               {
                                   "targets": 8,
                                   "width": "65px"
                               },
                               {
                                   "targets": 9,
                                   "width": "60px"
                               },
                               {
                                   "targets": 10,
                                   "width": "50px",
                                   "orderable": false
                               }
            ]
        });
        $(".dataTables_length").addClass("pull-right");
    }
    else {

        $('.btnfirstAddPart').addClass('hide');
        $('.btnAddPart').removeClass('hide');
        waitingDialog.show('Loading...', { dialogSize: 'sm', progressType: 'success' });
        var RmaNo = $('#RMANumber').val();
        var table = $('#AddPartTable').dataTable({
            destroy: true,
            "ajax": {
                "url": "/AddPart/RMAPartDetailsbyRMAID",
                "data": { RmaNumber: RmaNo },
                "type": "POST",
                "datatype": "json",
            },
            "fnRowCallback": function (nRow, aData, iDisplayIndex) {

                var RMATerminalId = $('td:eq(0)', nRow).html();
                var status = $('td:eq(6)', nRow).html();

                if (status == 'L' || status == 'R') {

                    $('td:eq(10)', nRow).html(('<img src="/img/edit.png" onclick="EditFunction(' + RMATerminalId + ')"> <img src="/img/delete.png" onclick = "DeleteFunction(' + RMATerminalId + ')">'));
                    return nRow;
                }
                else {

                    $('td:eq(10)', nRow).html(('<img src="/img/edit.png" style="opacity:0.5;cursor:none;"> <img src="/img/delete.png" style="opacity:0.5;cursor:none;">'));
                    return nRow;
                }
            },
            "bPaginate": true,
            "bInfo": true,
            "bJQueryUI": true,
            "iDisplayLength": 10,
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            filter: false,
            //"autoWidth": false,
            "columns": [
                                        { "data": "RMATerminalId", "autoWidth": true },
                                        { "data": "PartNumber", "autoWidth": true },
                                        { "data": "ProductType", "autoWidth": true },
                                        { "data": "Fault", "autoWidth": true },
                                        { "data": "Comments", "autoWidth": false },
                                        { "data": "CreatedDate", "autoWidth": true },
                                        { "data": "Status", "autoWidth": true },
                                        { "data": "Warranty", "autoWidth": true },
                                        { "data": "Billable", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true },
                                        { "data": "Value", "autoWidth": true }
            ]
,
            "columnDefs": [
                       {
                           "targets": 0,
                           "width": "50px"
                       },
                               {
                                   "targets": 1,
                                   "width": "80px"
                               },
                               {
                                   "targets": 2,
                                   "width": "100px"
                               },
                               {
                                   "targets": 3,
                                   "width": "200px"
                               },
                               {
                                   "targets": 4,
                                   "width": "200px"
                               },
                               {
                                   "targets": 5,
                                   "width": "160px"
                               },
                               {
                                   "targets": 6,
                                   "width": "60px"
                               },
                               {
                                   "targets": 7,
                                   "width": "75px"
                               },
                               {
                                   "targets": 8,
                                   "width": "65px"
                               },
                               {
                                   "targets": 9,
                                   "width": "60px"
                               },
                               {
                                   "targets": 10,
                                   "width": "50px",
                                   "orderable": false
                               }
            ]
        });
        $(".dataTables_length").addClass("pull-right");
        waitingDialog.hide();
    }

    $.ajax({
        url: "/RMA/AddPart/GetPartNumber",
        type: "GET",
        dataType: "json",
        success: function (data) {

            $("#PartNumber").bind("keydown", function (event) {
                if (event.keyCode === $.ui.keyCode.TAB && $(this).autocomplete("instance").menu.active) {
                    event.preventDefault();
                }
            }).autocomplete({
                minLength: 1,
                source: function (request, response) {
                    response($.ui.autocomplete.filter(data.data, extractLast(request.term)));
                },
                focus: function () { return false; },
                select: function (event, ui) {
                    var terms = split(this.value);
                    terms.pop();
                    terms.push(ui.item.value);
                    terms.push("");
                    this.value = terms.join("\n");
                    PartNumbers = terms;
                    return false;

                    //var partNo = ui.item.value;                    
                    //var RMANumber = $('#autocompleteRmaNumber').val();

                    //if ($("#autocompleteRmaNumber").val() == "") {
                    //    ui.item.value = "";                       
                    //    alert('Please select RMA Number');
                    //}
                    //else {
                    //    validatePartNumber(partNo, RMANumber);
                    //}
                }
            });

            function split(val) {
                return val.split(/\n/);
            }

            function extractLast(term) {
                return split(term).pop();
            }
        }
    });

    //$.ajax({
    //    url: "/RMA/AddPart/GetPartNumber",
    //    type: "GET",
    //    dataType: "json",
    //    success: function (data) {
    //        $("#PartNumber").autocomplete({
    //            source: data.data,
    //            select: function (event, ui) {
    //                var partNo = ui.item.value;
    //                var RMANumber = $(".ddlRMANumber").find("option:selected").text();
    //                if ($(".ddlRMANumber").val() == "") {
    //                    ui.item.value = "";
    //                    swal({
    //                        title: '',
    //                        text: "Please select RMA Number",
    //                        type: "",
    //                        confirmButtonText: 'OK',
    //                        showCancelButton: false,
    //                        buttonsStyling: true
    //                    });
    //                }
    //                else {
    //                    validatePartNumber(partNo, RMANumber);
    //                }
    //            }
    //        })
    //    }
    //});
});

$(function () {
    $('#lstview ').scrollator();
});

function DeleteFunction(id) {

    partDeleteId = id;
    $('#myModal').modal({
        show: 'true'
    });

    $('#confirmBtn').click(function () {
        var id = partDeleteId;
        var url = "/RMA/AddPart/DeletePart?id=" + id;
        $.ajax({
            type: 'POST',
            url: url,
            contentType: "application/json; charset=utf-8",
            datatype: 'json',
            success: function (data) {
                $('#myModal').modal('hide');
                $('#myDeletedModal').modal('show');
                $('#closeBtn').click(function () {
                    var RmaNumber = $('#RMANumber').val();
                    window.location.href = "AddPartById/?RMANumber=" + RmaNumber;
                    //window.location.href = 'AddPart';
                });
            },
            error: function () {
                console.log("Some problem occured, unable to delete part!!!");
            }
        });
    });
}

function EditFunction(id) {
    $.ajax({
        type: 'GET',
        url: "/RMA/AddPart/EditPart",
        data: { id: id },
        contentType: "application/json; charset=utf-8",
        datatype: 'json',
        success: function (data) {
            $('.singleRadio1.partscan').prop('checked', true);
            $(".singleRadio1").attr('disabled', true);
            //$("#customer").prop("readonly", true);
            //$("#customer").attr("disabled", "disabled");
            $("#customer").prop("disabled", true);
            $('#RMANumber').val(data.addPartModel.RMANumber);
            //$("#RMANumber").attr("disabled", "disabled");
            $("#RMANumber").prop("readonly", true);
            $('#PartNumber').val(data.addPartModel.PartNumber);
            //$("#PartNumber").attr("disabled", "disabled");
            $("#PartNumber").prop("readonly", true);
            $('.ProductType').val(data.addPartModel.ProductType);
            $('#lstview option[value="' + data.addPartModel.FaultId + '"]').attr("selected", "selected");
            $('#Comments').val(data.addPartModel.Comments);
            $('#RMATerminalId').val(data.addPartModel.RMATerminalId);
            $("#UpdatePart").show();
            $("#AddPart").hide();
        },
        error: function () {
            alert("An error has occured!!!");
        }
    });
}

function getProductType(partno) {
    $.ajax({
        url: "/RMA/AddPart/RmaPartProductType",
        type: "GET",
        data: { partNumber: partno },
        dataType: "json",
        success: function (data) {
            $('.ProductType').val(data.data);
            var productType = data.data;
            getlistofFaultsByProductType(productType);
        }
    });
}

function getlistofFaultsByProductType(productType) {
    $.ajax({
        url: "/RMA/AddPart/RMAPartListofFaultIdByProductType",
        type: "GET",
        data: { productType: productType },
        dataType: "json",
        success: function (data) {
            var faults = data.data;
            var listItems = [];
            for (var key in faults) {
                listItems.push('<option value="' +
                faults[key].FaultId + '">' + faults[key].Fault
                + '</option>');
            }
            $("#lstview").html(listItems);

            for (var i = 0; i < faultarrayLength; i++) {
                $('#lstview option[value="' + faultarray[i] + '"]').attr("selected", "selected");
            }
        }
    });
}

function validatePartNumber(partno, RMANumber) {
    $.ajax({
        url: "/RMA/AddPart/ValidatePartNumber",
        type: "GET",
        data: { PartNumber: partno, RMANumber: RMANumber },
        dataType: "json",
        success: function (data) {
            if (data.PartExists) {
                alert("This part is already logged against " + RMANumber + " RMA");
                $('#PartNumber').val('');
            }
            else {
                getProductType(partno);
            }
        }
    });
}