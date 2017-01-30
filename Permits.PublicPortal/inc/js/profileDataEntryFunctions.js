

var currentCarRowId = "";
var currentCarDeleteButtonPressed = null;
var currentCardRowId = "";
var currentCardDeleteButtonPressed = null;
var $currentUiCardItem = null;

var unMaskedCardValue = "";

var creditCardFaqContent = '';
creditCardFaqContent = '<table>';
creditCardFaqContent += '   <tr>';
creditCardFaqContent += '       <td style="text-align:right;">';
creditCardFaqContent += '           <span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;"></span>';
creditCardFaqContent += '       </td>';
creditCardFaqContent += '   </tr>';
creditCardFaqContent += '   <tr>';
creditCardFaqContent += '       <td>';
creditCardFaqContent += '           <span id="creditCardFaqTooltipHeader"><img width="20" height="20" class="iconTextLineAlignment" src="../elements/skin/question.png" alt="Credit Card FAQ" />&nbsp;&nbsp;Credit Card FAQ</span>';
creditCardFaqContent += '           <hr/>';
creditCardFaqContent += '       </td>';
creditCardFaqContent += '   </tr>';
creditCardFaqContent += '   <tr>';
creditCardFaqContent += '       <td>';
creditCardFaqContent += '           Registering your credit card will help us better locate your parking receipts. Register the credit card used with IPS meters. <br/><br/>We do NOT store the entire credit card number to ensure complete data security.<br /><br />';
creditCardFaqContent += '       </td>';
creditCardFaqContent += '   </tr>';
creditCardFaqContent += '</table>';

var vehicleFaqContent = '';
vehicleFaqContent = '<table>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td style="text-align:right;">';
vehicleFaqContent += '           <span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;"></span>';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td>';
vehicleFaqContent += '           <span id="vehicleFaqTooltipHeader"><img width="20" height="20" class="iconTextLineAlignment" src="../elements/skin/question.png" alt="Vehicle FAQ" />&nbsp;&nbsp;Vehicle FAQ</span>';
vehicleFaqContent += '           <hr/>';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td>';
vehicleFaqContent += '           Vehicle information is optional and will be used to improve the user experience.<br /><br />';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '</table>';





var vehicleFaqContent = '';
vehicleFaqContent = '<table>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td style="text-align:right;">';
vehicleFaqContent += '           <span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;"></span>';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td>';
vehicleFaqContent += '           <span id="vehicleFaqTooltipHeader"><img width="20" height="20" class="iconTextLineAlignment" src="../elements/skin/question.png" alt="Vehicle FAQ" />&nbsp;&nbsp;Vehicle FAQ</span>';
vehicleFaqContent += '           <hr/>';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '   <tr>';
vehicleFaqContent += '       <td>';
vehicleFaqContent += '           Vehicle information is optional and will be used to improve the user experience.<br /><br />';
vehicleFaqContent += '       </td>';
vehicleFaqContent += '   </tr>';
vehicleFaqContent += '</table>';

$('body').on("mousewheel", function () {
    event.preventDefault();

    var wheelDelta = event.wheelDelta;

    var currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
});

$(document).ready(function () {

    $('#FirstName').focus();

    $('#creditCardFAQ').tooltip(
        {
            trigger: "manual",
            placement: "auto bottom",
            animation: true,
            html: true,
            title: creditCardFaqContent
        }
    );

    $('#vehicleFAQ').tooltip(
        {
            trigger: "manual",
            placement: "auto bottom",
            animation: true,
            html: true,
            title: vehicleFaqContent
        }
    );

    $("#profileAsyncFailure").hide();

    $(':checkbox').customInput();
    $("#MobilePhone").mask("(999) 999-9999");

});

function GetCardType(cardNumberValue) {

    var cardTypeValue = "";

    if (cardNumberValue.substring(0, 1) == "4") {
        cardTypeValue = "VISA";
    } else if (cardNumberValue.substring(0, 1) == "5") {
        cardTypeValue = "MASTERCARD";
    } else if (cardNumberValue.substring(0, 2) == "37" || cardNumberValue.substring(0, 2) == "34") {
        cardTypeValue = "AMEX";
    } else if (cardNumberValue.substring(0, 2) == "60" || cardNumberValue.substring(0, 2) == "62") {
        cardTypeValue = "DISCOVER";
    } else {
        cardTypeValue = "OTHER";
    }

    return cardTypeValue;

}

function EditCardItem(CardId, CardNumber, CardExpiryMonth, CardExpiryYear, CardAlias, CardZipCode, UiCardItem) {

    $("#hdnEditCardId").val(CardId);
    $("#txtEditCardAlias").val(CardAlias);
    $("#txtEditCardNumber").val("");
    $("#txtEditCardZipCode").val(CardZipCode);
    if (CardExpiryMonth.length == 1) { CardExpiryMonth = "0" + CardExpiryMonth; }
    $("#SelectedEditCardExpMonth").val(CardExpiryMonth);
    $("#SelectedEditCardExpYear").val("20" + CardExpiryYear);

    $currentUiCardItem = $(UiCardItem).parent();

    ShowEditCard();

}

function AddCard(verifyCardExistsUrl,
                 verifyCardNumberUrl,
                 addCardUrl) {

    $("#btnModalAddCard").prop("disabled", true);
    $("#btnModalCancelAddCard").prop("disabled", true);

    var arrErrors = ValidateCard($("#txtAddNewCardNumber"),
                                 $("#SelectedNewCardExpMonth"),
                                 $("#SelectedNewCardExpYear"),
                                 $("#txtAddNewCardZipCode"),
                                 verifyCardExistsUrl,
                                 verifyCardNumberUrl);

    if (arrErrors.length == 0) {

        var formattedCardValue = unMaskedCardValue.split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');
        var formattedYear = $("#SelectedNewCardExpYear").val();
        formattedYear = formattedYear.substring(2, 4);
        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var card = {
            __RequestVerificationToken: token,
            CardId: ((new Date()).getUTCMilliseconds() * -1),
            CardNumber: formattedCardValue,
            CardExpiryMonth: $("#SelectedNewCardExpMonth").val(),
            CardExpiryYear: formattedYear,
            CardZipCode: $("#txtAddNewCardZipCode").val(),
            CardAlias: $("#txtAddNewCardAlias").val(),
            CardType: GetCardType(formattedCardValue)
        };

        $.ajax(
            {
                method: 'POST',
                url: addCardUrl,
                data: {
                    __RequestVerificationToken: card.__RequestVerificationToken,
                    CardNumber: card.CardNumber,
                    CardExpiryMonth: card.CardExpiryMonth,
                    CardExpiryYear: card.CardExpiryYear,
                    CardType: card.CardType,
                    CardZipCode: card.CardZipCode,
                    CardAlias: card.CardAlias,
                    CardId: card.CardId
                },
                success: function (result) {

                    if (result == "") {

                        $("#addCreditCardInfo").modal("hide");

                        AddCardItem(card);

                        $("#txtAddNewCardNumber").val("");
                        $("#SelectedNewCardExpMonth").val("MM");
                        $("#SelectedNewCardExpYear").val("YYYY");
                        $("#txtAddNewCardZipCode").val("");
                        $("#txtAddNewCardAlias").val("");

                        unMaskedCardValue = "";

                        $("#addNewCardValidationSummary").hide();
                        $(".alert-success").hide();

                    } else {

                        $(".alert-success").hide();

                        var errorMessage = "Unable to add card due to the following errors:";
                        errorMessage += "<ul>";
                        errorMessage += "<li>" + result +"</li>";
                        errorMessage += "</ul>";

                        $("#addNewCardValidationSummary").html(errorMessage);
                        $("#addNewCardValidationSummary").show();

                    }

                    $("#btnModalAddCard").prop("disabled", false);
                    $("#btnModalCancelAddCard").prop("disabled", false);

                },
                error: function (result) {

                    $(".alert-success").hide();

                    var errorMessage = "Unable to add card due to the following errors:";
                    errorMessage += "<ul>";
                    errorMessage += "<li>An unexpected error has occured adding this card!</li>";
                    errorMessage += "</ul>";

                    $("#addNewCardValidationSummary").html(errorMessage);
                    $("#addNewCardValidationSummary").show();

                    $("#btnModalAddCard").prop("disabled", false);
                    $("#btnModalCancelAddCard").prop("disabled", false);

                }
            }
        );

    } else {

        $(".alert-success").hide();

        var errorMessage = "Unable to add card due to the following errors:";
        errorMessage += "<ul>"
        for (i = 0; i < arrErrors.length; i++) {
            errorMessage += "<li>" + arrErrors[i] + "</li>";
        }
        errorMessage += "</ul>"

        $("#addNewCardValidationSummary").html(errorMessage);
        $("#addNewCardValidationSummary").show();

        $("#btnModalAddCard").prop("disabled", false);
        $("#btnModalCancelAddCard").prop("disabled", false);

    }

    return false;

}

function UpdateCard(updateCardUrl) {

    $("#btnModalEditCard").prop("disabled", true);
    $("#btnModalCancelEditCard").prop("disabled", true);

    var arrErrors = ValidateCard($("#txtEditCardNumber"),
                                 $("#SelectedEditCardExpMonth"),
                                 $("#SelectedEditCardExpYear"),
                                 $("#txtEditCardZipCode"));


    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();

        var formattedCardValue = unMaskedCardValue.split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');
        var formattedYear = $("#SelectedEditCardExpYear").val();
        formattedYear = formattedYear.substring(2, 4);

        var cardType = GetCardType(formattedCardValue);

        var card = {
            __RequestVerificationToken: token,
            CardId: $("#hdnEditCardId").val(),
            CardNumber: formattedCardValue,
            CardExpiryMonth: $("#SelectedEditCardExpMonth").val(),
            CardExpiryYear: formattedYear,
            CardZipCode: $("#txtEditCardZipCode").val(),
            CardAlias: $("#txtEditCardAlias").val(),
            CardType: cardType
        }

        $.ajax(
            {
                method: 'POST',
                url: updateCardUrl,
                data: {
                    __RequestVerificationToken: card.__RequestVerificationToken,
                    CardId: card.CardId,
                    CardNumber: card.CardNumber,
                    CardExpiryMonth: card.CardExpiryMonth,
                    CardExpiryYear: card.CardExpiryYear,
                    CardZipCode: card.CardZipCode,
                    CardAlias: card.CardAlias
                },
                success: function (result) {

                    if (result == "true") {

                        $("#editCreditCardInfo").modal("hide");

                        UpdateCardItem(card);

                        $("#txtEditCardAlias").val("");
                        $("#txtEditCardZipCode").val("");
                        $("#txtEditCardNumber").val("");
                        $("#SelectedEditCardExpMonth").val("MM");
                        $("#SelectedEditCardExpYear").val("YYYY");

                        $("#txtEditCardAlias").removeClass("input-validation-error");
                        $("#txtEditCardZipCode").removeClass("input-validation-error");
                        $("#txtEditCardNumber").removeClass("input-validation-error");
                        $("#SelectedEditCardExpMonth").removeClass("input-validation-error");
                        $("#SelectedEditCardExpYear").removeClass("input-validation-error");

                        unMaskedCardValue = "";

                        $("#editCardValidationSummary").hide();
                        $(".alert-success").hide();

                        $("#btnModalEditCard").prop("disabled", false);
                        $("#btnModalCancelEditCard").prop("disabled", false);

                        $currentUiCardItem = null;

                    }
                    else
                    {

                        $(".alert-success").hide();

                        var errorMessage = "Error:  Unable to update requested card!";

                        $("#editCardValidationSummary").html(errorMessage);
                        $("#editCardValidationSummary").show();

                        $("#btnModalEditCard").prop("disabled", false);
                        $("#btnModalCancelEditCard").prop("disabled", false);

                    }

                }
            }
        );

    } else {

        $(".alert-success").hide();

        var errorMessage = "Unable to update card due to the following errors:";
        errorMessage += "<ul>"
        for (i = 0; i < arrErrors.length; i++) {
            errorMessage += "<li>" + arrErrors[i] + "</li>";
        }
        errorMessage += "</ul>"

        $("#editCardValidationSummary").html(errorMessage);
        $("#editCardValidationSummary").show();

        $("#btnModalEditCard").prop("disabled", false);
        $("#btnModalCancelEditCard").prop("disabled", false);

    }

    return false;

}

function CardNumberChanged($txtCardNumber) {

    if ($txtCardNumber.val().length > 1) {

        var cardType = GetCardType($txtCardNumber.val());

        $txtCardNumber.removeClass("textBoxVisaLogo");
        $txtCardNumber.removeClass("textBoxMasterCardLogo");
        $txtCardNumber.removeClass("textBoxDiscoverLogo");
        $txtCardNumber.removeClass("textBoxAmExLogo");

        if (cardType == "VISA") {
            $txtCardNumber.addClass("textBoxVisaLogo");
        } else if (cardType == "MASTERCARD") {
            $txtCardNumber.addClass("textBoxMasterCardLogo");
        } else if (cardType == "AMEX") {
            $txtCardNumber.addClass("textBoxAmExLogo");
        } else if (cardType == "DISCOVER") {
            $txtCardNumber.addClass("textBoxDiscoverLogo");
        }

    } else {

        $txtCardNumber.removeClass("textBoxVisaLogo");
        $txtCardNumber.removeClass("textBoxMasterCardLogo");
        $txtCardNumber.removeClass("textBoxDiscoverLogo");
        $txtCardNumber.removeClass("textBoxAmExLogo");

    }

}

//function AddCardNumberChanged() {

//    var $input = $("#txtAddNewCardNumber");

//    if ($("#txtAddNewCardNumber").val().length > 1) {
        
//        var cardType = GetCardType($("#txtAddNewCardNumber").val());

//        $input.removeClass("textBoxVisaLogo");
//        $input.removeClass("textBoxMasterCardLogo");
//        $input.removeClass("textBoxDiscoverLogo");
//        $input.removeClass("textBoxAmExLogo");

//        if (cardType == "VISA") {
//            $input.addClass("textBoxVisaLogo");
//        } else if (cardType == "MASTERCARD") {
//            $input.addClass("textBoxMasterCardLogo");
//        } else if (cardType == "AMEX") {
//            $input.addClass("textBoxAmExLogo");
//        } else if (cardType == "DISCOVER") {
//            $input.addClass("textBoxDiscoverLogo");
//        }

//    } else {

//        $input.removeClass("textBoxVisaLogo");
//        $input.removeClass("textBoxMasterCardLogo");
//        $input.removeClass("textBoxDiscoverLogo");
//        $input.removeClass("textBoxAmExLogo");

//    }

//}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// takes the form field value and returns true on valid number
function valid_credit_card(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

function ValidateCard($txtCurrentCardNumber,
                      $selectedCardExpMonth,
                      $selectedCardExpYear,
                      $txtCurrentCardZipCode,
                      verifyCardExistsUrl,
                      verifyCardNumberUrl) {
    debugger;
    var arrErrors = new Array();
    var formattedCardValue = unMaskedCardValue.split(' ').join('');
    formattedCardValue = formattedCardValue.split('-').join('');

    if (unMaskedCardValue.length < 1 || unMaskedCardValue.length > 100) {

        arrErrors[arrErrors.length] = "Card number is required."
        $txtCurrentCardNumber.addClass("input-validation-error");

    } else {


        var formattedCardValue = unMaskedCardValue.split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');

        if (!isNumeric(formattedCardValue)) {

            arrErrors[arrErrors.length] = "Card number must be numeric."
            $txtCurrentCardNumber.addClass("input-validation-error");

        }
        else {

            if (!valid_credit_card(unMaskedCardValue))
            {

                arrErrors[arrErrors.length] = "Card number is not valid."
                $txtCurrentCardNumber.addClass("input-validation-error");

            }
            else
            {
                
                $txtCurrentCardNumber.removeClass("input-validation-error");

            }

        }

    }

    var temp = $selectedCardExpMonth.val();
    if ($selectedCardExpMonth.val() == "MM") {

        arrErrors[arrErrors.length] = "Card expiration month is required to be set."
        $selectedCardExpMonth.addClass("input-validation-error");

    } else {

        $selectedCardExpMonth.removeClass("input-validation-error");

    }

    if ($selectedCardExpYear.val() == "YYYY") {

        arrErrors[arrErrors.length] = "Card expiration year is required to be set."
        $selectedCardExpYear.addClass("input-validation-error");

    } else {

        $selectedCardExpYear.removeClass("input-validation-error");

    }

    if ($txtCurrentCardZipCode.val() != "") {

        var zipCodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;
        if (zipCodeRegEx.test($txtCurrentCardZipCode.val())) {

            $txtCurrentCardZipCode.removeClass("input-validation-error");

        } else {

            arrErrors[arrErrors.length] = "Zip code is not valid."
            $txtCurrentCardZipCode.addClass("input-validation-error");

        }

    } else {

        arrErrors[arrErrors.length] = "Zip code is required."
        $txtCurrentCardZipCode.addClass("input-validation-error");

    }

    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var cardNumber = formattedCardValue;
        var card = {
            __RequestVerificationToken: token,
            CardNumber: cardNumber,
            ExpiryYear: $selectedCardExpYear.val(),
            ExpiryMonth: $selectedCardExpMonth.val()
        };

        $.ajax({
            async: false,
            type: "POST",
            url: verifyCardExistsUrl,
            data: {
                __RequestVerificationToken: card.__RequestVerificationToken,
                Card_Number: card.CardNumber,
                Expiry_Year: card.ExpiryYear,
                Expiry_Month: card.ExpiryMonth
            },
            success: function (data) {

                if (data == "False") {

                    $txtCurrentCardNumber.removeClass("input-validation-error");

                } else {

                    arrErrors[arrErrors.length] = "This credit card already exists."
                    $txtCurrentCardNumber.addClass("input-validation-error");

                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                arrErrors[arrErrors.length] = "Failed to retrieve existing card status."
                $txtCurrentCardNumber.addClass("input-validation-error");
            }
        });

    }

    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var cardNumber = formattedCardValue;
        var card = {
            __RequestVerificationToken: token,
            CardNumber: cardNumber
        };

        $.ajax({
            async: false,
            type: "POST",
            url: verifyCardNumberUrl,
            data: {
                __RequestVerificationToken: card.__RequestVerificationToken,
                Card_Number: card.CardNumber
            },
            success: function (data) {

                if (data == "True") {

                    $txtCurrentCardNumber.removeClass("input-validation-error");

                } else {

                    arrErrors[arrErrors.length] = "Credit card number is not valid."
                    $txtCurrentCardNumber.addClass("input-validation-error");

                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                arrErrors[arrErrors.length] = "Failed to retrieve valid card status."
                $txtCurrentCardNumber.addClass("input-validation-error");
            }
        });

    }

    return arrErrors;

}

function ValidateCard($txtCurrentCardNumber,
                      $selectedCardExpMonth,
                      $selectedCardExpYear,
                      $txtCurrentCardZipCode) {

    var arrErrors = new Array();
    var formattedCardValue = unMaskedCardValue.split(' ').join('');
    formattedCardValue = formattedCardValue.split('-').join('');

    if (unMaskedCardValue.length < 1 || unMaskedCardValue.length > 100) {

        arrErrors[arrErrors.length] = "Card number is required."
        $txtCurrentCardNumber.addClass("input-validation-error");

    } else {


        var formattedCardValue = unMaskedCardValue.split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');

        if(!isNumeric(formattedCardValue))
        {

            arrErrors[arrErrors.length] = "Card number must be numeric."
            $txtCurrentCardNumber.addClass("input-validation-error");

        }
        else
        {

            if (!valid_credit_card(unMaskedCardValue)) {

                arrErrors[arrErrors.length] = "Card number is not valid."
                $txtCurrentCardNumber.addClass("input-validation-error");

            }
            else {

                $txtCurrentCardNumber.removeClass("input-validation-error");

            }

        }

    }

    var temp = $selectedCardExpMonth.val();
    if ($selectedCardExpMonth.val() == "MM") {

        arrErrors[arrErrors.length] = "Card expiration month is required to be set."
        $selectedCardExpMonth.addClass("input-validation-error");

    } else {

        $selectedCardExpMonth.removeClass("input-validation-error");

    }

    if ($selectedCardExpYear.val() == "YYYY") {

        arrErrors[arrErrors.length] = "Card expiration year is required to be set."
        $selectedCardExpYear.addClass("input-validation-error");

    } else {

        $selectedCardExpYear.removeClass("input-validation-error");

    }

    if ($txtCurrentCardZipCode.val() != "") {

        var zipCodeRegEx = /^\d{5}(?:[-\s]\d{4})?$/;
        if (zipCodeRegEx.test($txtCurrentCardZipCode.val())) {

            $txtCurrentCardZipCode.removeClass("input-validation-error");

        } else {

            arrErrors[arrErrors.length] = "Zip code is not valid."
            $txtCurrentCardZipCode.addClass("input-validation-error");

        }

    } else {

        arrErrors[arrErrors.length] = "Zip code is required."
        $txtCurrentCardZipCode.addClass("input-validation-error");

    }

    return arrErrors;

}

function GetCardImageLogo(CardType) {

    var cardImageTag = "";
    if (CardType == "VISA") {
        cardImageTag = '<div class="visaLogoCardItemContainer"><div class="visaLogo cardLogo"></div></div>';
    } else if (CardType == "MASTERCARD") {
        cardImageTag = '<div class="masterCardLogoCardItemContainer"><div class="masterCardLogo cardLogo"></div></div>';
    } else if (CardType == "AMEX") {
        cardImageTag = '<div class="amexLogoCardItemContainer"><div class="amexLogo cardLogo"></div></div>';
    } else if (CardType == "DISCOVER") {
        cardImageTag = '<div class="discoverLogoCardItemContainer"><div class="discoverLogo cardLogo"></div></div>';
    } else {
        cardImageTag = '&nbsp;'
    }

    return cardImageTag;

}

function AddCardItem(card) {

    var cardImageTag = GetCardImageLogo(card.CardType);

    var formattedCardNumber = card.CardNumber.substring(0, 6) + '....' + card.CardNumber.substring((card.CardNumber.length)-4)

    var strBackgroundClass = "background";
    if (card.CardType == "VISA")
    {
        strBackgroundClass = "backgroundVisa";
    }
    else if (card.CardType == "MASTERCARD")
    {
        strBackgroundClass = "backgroundMastercard";
    }
    else if (card.CardType == "AMEX")
    {
        strBackgroundClass = "backgroundAmEx";
    }
    else if (card.CardType == "DISCOVER")
    {
        strBackgroundClass = "backgroundDiscover";
    }

    var cardItem = "";
    cardItem += '<div class="cardItem">';
    cardItem += '   <div class="cardContainer">';
    cardItem += '       <div class="' + strBackgroundClass + '">';
    cardItem += '           <div class="cardRemovedOverlay"><div class="cardRemovedMessage">REMOVED</div></div>';
    cardItem += '           <table class="cardTable">';
    cardItem += '               <tr>';
    cardItem += '                   <td class="cardAlias">' + card.CardAlias + '</td>';
    cardItem += '                   <td class="cardDeleteButton"><span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;" onclick="RemoveCard(\'' + card.CardId + '\', this)"></span></td>';
    cardItem += '               </tr>';
    cardItem += '               <tr>';
    cardItem += '                   <td colspan="2" class="cardIdentificationNumber">' + formattedCardNumber + '</td>';
    cardItem += '               </tr>';
    cardItem += '               <tr>';
    cardItem += '                   <td class="cardIdentificationExpiration"><span class="validThru">Valid Thru: </span>' + card.CardExpiryMonth + '/' + card.CardExpiryYear + '</td>';
    cardItem += '                   <td class="cardLogoContainer">';
    cardItem += '                       ' + cardImageTag;
    cardItem += '                   </td>';
    cardItem += '               </tr>';
    cardItem += '           </table>';
    cardItem += '       </div>';
    cardItem += '   </div>';
    cardItem += '</div>';

    $(cardItem).hide().insertAfter($("#addCardItem")).fadeIn(3000);

}

function UpdateCardItem(card) {

    var cardImageTag = GetCardImageLogo(card.CardType);

    var formattedCardNumber = card.CardNumber.substring(0, 6) + '....' + card.CardNumber.substring((card.CardNumber.length) - 4)

    var strBackgroundClass = "background";
    if (card.CardType == "VISA") {
        strBackgroundClass = "backgroundVisa";
    }
    else if (card.CardType == "MASTERCARD") {
        strBackgroundClass = "backgroundMastercard";
    }
    else if (card.CardType == "AMEX") {
        strBackgroundClass = "backgroundAmEx";
    }
    else if (card.CardType == "DISCOVER") {
        strBackgroundClass = "backgroundDiscover";
    }

    var cardItem = "";
    cardItem += '<div class="cardItem">';
    cardItem += '   <div class="cardContainer">';
    cardItem += '       <div class="' + strBackgroundClass + '">';
    cardItem += '           <div class="cardRemovedOverlay"><div class="cardRemovedMessage">REMOVED</div></div>';
    cardItem += '           <table class="cardTable">';
    cardItem += '               <tr>';
    cardItem += '                   <td class="cardAlias">' + card.CardAlias + '</td>';
    cardItem += '                   <td class="cardDeleteButton"><span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;" onclick="RemoveCard(\'' + card.CardId + '\', this)"></span></td>';
    cardItem += '               </tr>';
    cardItem += '               <tr>';
    cardItem += '                   <td colspan="2" class="cardIdentificationNumber">' + card.CardNumber.substring(0, 6) + '....' + card.CardNumber.substring(card.CardNumber.length-4, card.CardNumber.length) + '</td>';
    cardItem += '               </tr>';
    cardItem += '               <tr>';
    cardItem += '                   <td class="cardIdentificationExpiration">Exp.: ' + card.CardExpiryMonth + '/' + card.CardExpiryYear + '</td>';
    cardItem += '                   <td class="cardLogoContainer">';
    cardItem += '                       ' + cardImageTag;
    cardItem += '                   </td>';
    cardItem += '               </tr>';
    cardItem += '           </table>';
    cardItem += '       </div>';
    cardItem += '   </div>';
    cardItem += '</div>';

    $currentUiCardItem.fadeOut(3000).replaceWith($(cardItem)).hide().fadeIn(3000);

}

function CancelAddCard() {

    ClearMaskCreditCardNumbers($("#txtAddNewCardNumber"));

    $("#addCreditCardInfo").modal("hide");

    $("#txtAddNewCardAlias").val("");
    $("#txtAddNewCardZipCode").val("");
    $("#txtAddNewCardNumber").val("");
    $("#SelectedNewCardExpMonth").val("MM");
    $("#SelectedNewCardExpYear").val("YYYY");

    $("#txtAddNewCardAlias").removeClass("input-validation-error");
    $("#txtAddNewCardZipCode").removeClass("input-validation-error");
    $("#txtAddNewCardNumber").removeClass("input-validation-error");
    $("#SelectedNewCardExpMonth").removeClass("input-validation-error");
    $("#SelectedNewCardExpYear").removeClass("input-validation-error");

    $("#addNewCardValidationSummary").hide();
    $(".alert-success").hide();

    return false;

}

function CancelEditCard() {

    ClearMaskCreditCardNumbers($("#txtEditCardNumber"));

    $("#editCreditCardInfo").modal("hide");

    $("#txtEditCardAlias").val("");
    $("#txtEditCardZipCode").val("");
    $("#txtEditCardNumber").val("");
    $("#SelectedEditCardExpMonth").val("MM");
    $("#SelectedEditCardExpYear").val("YYYY");

    $("#txtEditCardAlias").removeClass("input-validation-error");
    $("#txtEditCardZipCode").removeClass("input-validation-error");
    $("#txtEditCardNumber").removeClass("input-validation-error");
    $("#SelectedEditCardExpMonth").removeClass("input-validation-error");
    $("#SelectedEditCardExpYear").removeClass("input-validation-error");

    $("#editCardValidationSummary").hide();
    $(".alert-success").hide();

    $currentUiCardItem = null;

    return false;

}

function ExecRemoveCard(removeCardUrl) {

    var $form = $('#ProfileEditorForm');
    var token = $('input[name="__RequestVerificationToken"]', $form).val();
    var cardId = currentCardRowId.replace("Card:", "");
    var card = {
        __RequestVerificationToken: token,
        CardId: cardId
    };

    $.ajax(
        {
            method: 'POST',
            url: removeCardUrl,
            data: {
                __RequestVerificationToken: card.__RequestVerificationToken,
                CardId: card.CardId
            },
            success: function (result) {

                if (result) {

                    var $cardContainer = $(currentCardDeleteButtonPressed).parent().closest('div');

                    var $cardExpiredOverlay = $cardContainer.find('.cardExpiredOverlay');
                    if ($cardExpiredOverlay.length > 0) { $cardExpiredOverlay.fadeOut(3000); }

                    var $cardRemovedOverlay = $cardContainer.find('.cardRemovedOverlay');
                    $cardRemovedOverlay.fadeIn(3000);

                    $(".alert-danger").hide();
                    $(".alert-success").hide();

                    ResetRemoveCard();
                    $("#cardConfirmDelete").modal('hide');

                } else {

                    ResetRemoveCard();
                    $("#cardConfirmDelete").modal('hide');

                    $(".alert-success").hide();

                    var errorMessage = "Unable to remove card due to the following errors:";
                    errorMessage += "<ul>";
                    errorMessage += "<li>An unexpected error has occured removing this card!</li>";
                    errorMessage += "</ul>";

                    $(".alert-danger").html(errorMessage);
                    $(".alert-danger").show();

                }

            },
            error: function (result) {

                ResetRemoveCard();
                $("#cardConfirmDelete").modal('hide');

                var errorMessage = "Unable to remove card due to the following errors:";
                errorMessage += "<ul>";
                errorMessage += "<li>An unexpected error has occured removing this card!</li>";
                errorMessage += "</ul>";

                $(".alert-danger").html(errorMessage);
                $(".alert-danger").show();

            }
        }
    );

}

function ResetRemoveCard() {
    currentCardRowId = "";
}

function RemoveCard(cardRowId, cardDeleteButtonPressed) {

    window.event.cancelBubble = true;
    currentCardRowId = cardRowId;
    currentCardDeleteButtonPressed = cardDeleteButtonPressed;
    $("#cardConfirmDelete").modal('show');

}

function ValidateVehicle($txtCurrentVehicleMake,
                         $txtCurrentVehicleModel,
                         $txtCurrentVehicleColor,
                         $txtCurrentVehicleYear,
                         $txtCurrentVehicleLicensePlate,
                         $SelectedState) {

    var arrErrors = new Array();

    if ($txtCurrentVehicleMake.val().length < 1 || $txtCurrentVehicleMake.val().length > 50) {

        arrErrors[arrErrors.length] = "Vehicle make is required."
        $txtCurrentVehicleMake.addClass("input-validation-error");

    } else {

        $txtCurrentVehicleMake.removeClass("input-validation-error");

    }

    if ($txtCurrentVehicleModel.val().length < 1 || $txtCurrentVehicleModel.val().length > 50) {

        arrErrors[arrErrors.length] = "Vehicle model is required."
        $txtCurrentVehicleModel.addClass("input-validation-error");

    } else {

        $txtCurrentVehicleModel.removeClass("input-validation-error");

    }

    if ($txtCurrentVehicleColor.val().length < 1 || $txtCurrentVehicleColor.val().length > 50) {

        arrErrors[arrErrors.length] = "Vehicle color is required."
        $txtCurrentVehicleColor.addClass("input-validation-error");

    } else {

        $txtCurrentVehicleColor.removeClass("input-validation-error");

    }

    if ($txtCurrentVehicleYear.val().length > 0) {

        if (!$.isNumeric($txtCurrentVehicleYear.val())) {

            arrErrors[arrErrors.length] = "Vehicle year must have a numeric value."
            $txtCurrentVehicleYear.addClass("input-validation-error");

        } else {

            if ($txtCurrentVehicleYear.val().length != 4) {

                arrErrors[arrErrors.length] = "Vehicle year must be 4 numeric digits."
                $txtCurrentVehicleYear.addClass("input-validation-error");

            } else {

                $txtCurrentVehicleYear.removeClass("input-validation-error");

            }

        }

    }
    else
    {

        $txtCurrentVehicleYear.removeClass("input-validation-error");

    }

    if ($txtCurrentVehicleLicensePlate.val().length < 1 || $txtCurrentVehicleLicensePlate.val().length > 50) {

        arrErrors[arrErrors.length] = "Vehicle license plate is required."
        $txtCurrentVehicleLicensePlate.addClass("input-validation-error");

    } else {

        $txtCurrentVehicleLicensePlate.removeClass("input-validation-error");

    }

    if ($SelectedState.val() == "--Select--") {

        arrErrors[arrErrors.length] = "Vehicle state is required."
        $SelectedState.addClass("input-validation-error");

    } else {

        $SelectedState.removeClass("input-validation-error");

    }

    return arrErrors;

}

function UpdateVehicleItem(vehicle) {

    var newVehicleItem = CreateVehicleItem(vehicle);
    var existingItem = $('*[data-carId="' + vehicle.CarId + '"]');

    existingItem.fadeOut(3000).replaceWith($(newVehicleItem).hide().fadeIn(3000));

}

function AddVehicleItem(vehicle) {

    var vehicleItem = CreateVehicleItem(vehicle);

    $(vehicleItem).hide().insertAfter($("#addVehicleItem")).fadeIn(3000);

}

function CreateVehicleItem(vehicle) {

    var vehicleItem = "";
    vehicleItem += '<div data-carId="' + vehicle.CarID + '" class="vehicleItem">';
    vehicleItem += '    <div class="vehicleContainer" onclick="EditVehicleItem(\'' + vehicle.CarID + '\', \'' + vehicle.CarColor + '\', \'' + vehicle.CarLicense + '\', \'' + vehicle.CarMake + '\', \'' + vehicle.CarModel + '\', \'' + vehicle.CarYear + '\', \'' + vehicle.CarState + '\')">';
    vehicleItem += '        <div class="vehicleRemovedOverlay"><div class="vehicleRemovedMessage">REMOVED</div></div>';
    vehicleItem += '        <table class="vehicleTable">';
    vehicleItem += '            <tr>';
    vehicleItem += '                <td colspan="2" class="vehicleDeleteButton"><span class="glyphicon glyphicon-remove" style="font-size: 1.2em; cursor: pointer;" onclick="RemoveVehicle(\'Vehicle:' + vehicle.CarId + '\', this)"></span></td>';
    vehicleItem += '            </tr>';
    vehicleItem += '            <tr>';
    vehicleItem += '                <td colspan="2" class="vehicleIdentificationNumber">' + vehicle.CarLicense + '</td>';
    vehicleItem += '            </tr>';
    vehicleItem += '            <tr>';
    vehicleItem += '                <td class="vehicleMake">' + vehicle.CarMake + '</td>';
    vehicleItem += '                <td class="vehicleModel">' + vehicle.CarModel + '</td>';
    vehicleItem += '            </tr>';
    vehicleItem += '            <tr>';
    vehicleItem += '                <td colspan="2" class="vehicleState">' + vehicle.CarState + '</td>';
    vehicleItem += '            </tr>';
    vehicleItem += '        </table>';
    vehicleItem += '    </div>';
    vehicleItem += '</div>';

    return vehicleItem;

}

function EditVehicleItem(CarId, CarColor, CarLicense, CarMake, CarModel, CarYear, CarState) {

    $("#hdnEditCarId").val(CarId);
    $("#txtEditVehicleMake").val(CarMake);
    $("#txtEditVehicleModel").val(CarModel);
    $("#txtEditVehicleColor").val(CarColor);
    $("#txtEditVehicleYear").val(CarYear);
    $("#txtEditVehicleLicensePlate").val(CarLicense);
    $("#EditVehicleSelectedState").val(CarState);

    ShowEditVehicle();

}

function CancelEditVehicle() {

    $("#editVehicleInfo").modal("hide");

    $("#hdnEditCarId").val("");
    $("#txtEditVehicleMake").val("");
    $("#txtEditVehicleModel").val("");
    $("#txtEditVehicleColor").val("");
    $("#txtEditVehicleYear").val("");
    $("#txtEditVehicleLicensePlate").val("");
    $("#EditVehicleSelectedState").val("--Select--");

    $("#txtEditVehicleMake").removeClass("input-validation-error");
    $("#txtEditVehicleModel").removeClass("input-validation-error");
    $("#txtEditVehicleColor").removeClass("input-validation-error");
    $("#txtEditVehicleYear").removeClass("input-validation-error");
    $("#txtEditVehicleLicensePlate").removeClass("input-validation-error");
    $("#EditVehicleSelectedState").removeClass("input-validation-error");

    $("#editVehicleValidationSummary").hide();
    $(".alert-success").hide();

    return false;

}

function UpdateVehicle(updateCarUrl) {

    $("#btnModalEditVehicle").prop("disabled", true);
    $("#btnModalCancelEditVehicle").prop("disabled", true);

    var arrErrors = ValidateVehicle($("#txtEditVehicleMake"),
                                    $("#txtEditVehicleModel"),
                                    $("#txtEditVehicleColor"),
                                    $("#txtEditVehicleYear"),
                                    $("#txtEditVehicleLicensePlate"),
                                    $("#EditVehicleSelectedState"));


    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var vehicle = {
            __RequestVerificationToken: token,
            CarId: $("#hdnEditCarId").val(),
            CarMake: $("#txtEditVehicleMake").val(),
            CarModel: $("#txtEditVehicleModel").val(),
            CarColor: $("#txtEditVehicleColor").val(),
            CarYear: $("#txtEditVehicleYear").val(),
            CarLicense: $("#txtEditVehicleLicensePlate").val(),
            CarState: $("#EditVehicleSelectedState").val()
        }

        $.ajax(
            {
                method: 'POST',
                url: updateCarUrl,
                data: {
                    __RequestVerificationToken: vehicle.__RequestVerificationToken,
                    CarMake: vehicle.CarMake,
                    CarModel: vehicle.CarModel,
                    CarColor: vehicle.CarColor,
                    CarYear: vehicle.CarYear,
                    CarLicense: vehicle.CarLicense,
                    CarState: vehicle.CarState,
                    CarId: vehicle.CarId
                },
                success: function (result) {

                    $("#editVehicleInfo").modal("hide");

                    UpdateVehicleItem(vehicle);

                    $(".hdnCarColor").val("");
                    $("#txtEditVehicleMake").val("");
                    $("#txtEditVehicleModel").val("");
                    $("#txtEditVehicleColor").val("");
                    $("#txtEditVehicleYear").val("");
                    $("#txtEditVehicleLicensePlate").val("");
                    $("#EditVehicleSelectedState").val("--Select--");

                    $("#editVehicleValidationSummary").hide();
                    $(".alert-success").hide();

                    $("#btnModalEditVehicle").prop("disabled", false);
                    $("#btnModalCancelEditVehicle").prop("disabled", false);

                }
            }
        );

    } else {

        $(".alert-success").hide();

        var errorMessage = "Unable to update vehicle due to the following errors:";
        errorMessage += "<ul>"
        for (i = 0; i < arrErrors.length; i++) {
            errorMessage += "<li>" + arrErrors[i] + "</li>";
        }
        errorMessage += "</ul>"

        $("#editVehicleValidationSummary").html(errorMessage);
        $("#editVehicleValidationSummary").show();

        $("#btnModalEditVehicle").prop("disabled", false);
        $("#btnModalCancelEditVehicle").prop("disabled", false);

    }

    return false;

}

function AddVehicle(addCarUrl) {

    $("#btnModalAddVehicle").prop("disabled", true);
    $("#btnModalCancelAddVehicle").prop("disabled", true);

    var arrErrors = ValidateVehicle($("#txtAddNewVehicleMake"),
                                    $("#txtAddNewVehicleModel"),
                                    $("#txtAddNewVehicleColor"),
                                    $("#txtAddNewVehicleYear"),
                                    $("#txtAddNewVehicleLicensePlate"),
                                    $("#NewVehicleSelectedState"));

    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var vehicle = {
            __RequestVerificationToken: token,
            CarId: ((new Date()).getUTCMilliseconds() * -1),
            CarMake: $("#txtAddNewVehicleMake").val(),
            CarModel: $("#txtAddNewVehicleModel").val(),
            CarColor: $("#txtAddNewVehicleColor").val(),
            CarYear: $("#txtAddNewVehicleYear").val(),
            CarLicense: $("#txtAddNewVehicleLicensePlate").val(),
            CarState: $("#NewVehicleSelectedState").val()
        }

        $.ajax(
            {
                method: 'POST',
                url: addCarUrl,
                data: {
                    __RequestVerificationToken: vehicle.__RequestVerificationToken,
                    CarMake: vehicle.CarMake,
                    CarModel: vehicle.CarModel,
                    CarColor: vehicle.CarColor,
                    CarYear: vehicle.CarYear,
                    CarLicense: vehicle.CarLicense,
                    CarState: vehicle.CarState,
                    CarId: vehicle.CarId
                },
                success: function (result) {

                    $("#addVehicleInfo").modal("hide");

                    AddVehicleItem(vehicle);

                    $("#txtAddNewVehicleMake").val("");
                    $("#txtAddNewVehicleModel").val("");
                    $("#txtAddNewVehicleColor").val("");
                    $("#txtAddNewVehicleYear").val("");
                    $("#txtAddNewVehicleLicensePlate").val("");
                    $("#NewVehicleSelectedState").val("--Select--");

                    $("#addNewVehicleValidationSummary").hide();
                    $(".alert-success").hide();

                    $("#btnModalAddVehicle").prop("disabled", false);
                    $("#btnModalCancelAddVehicle").prop("disabled", false);

                }
            }
        );

    } else {

        $(".alert-success").hide();

        var errorMessage = "Unable to add vehicle due to the following errors:";
        errorMessage += "<ul>"
        for (i = 0; i < arrErrors.length; i++) {
            errorMessage += "<li>" + arrErrors[i] + "</li>";
        }
        errorMessage += "</ul>"

        $("#addNewVehicleValidationSummary").html(errorMessage);
        $("#addNewVehicleValidationSummary").show();

        $("#btnModalAddVehicle").prop("disabled", false);
        $("#btnModalCancelAddVehicle").prop("disabled", false);

    }

    return false;

}

function CancelAddVehicle() {

    $("#addVehicleInfo").modal("hide");

    $("#txtAddNewVehicleMake").val("");
    $("#txtAddNewVehicleModel").val("");
    $("#txtAddNewVehicleColor").val("");
    $("#txtAddNewVehicleYear").val("");
    $("#txtAddNewVehicleLicensePlate").val("");
    $("#NewVehicleSelectedState").val("--Select--");

    $("#txtAddNewVehicleMake").removeClass("input-validation-error");
    $("#txtAddNewVehicleModel").removeClass("input-validation-error");
    $("#txtAddNewVehicleColor").removeClass("input-validation-error");
    $("#txtAddNewVehicleYear").removeClass("input-validation-error");
    $("#txtAddNewVehicleLicensePlate").removeClass("input-validation-error");
    $("#NewVehicleSelectedState").removeClass("input-validation-error");

    $("#addNewVehicleValidationSummary").hide();
    $(".alert-success").hide();

    return false;

}

function ExecRemoveVehicle(removeCarUrl) {

    var $form = $('#ProfileEditorForm');
    var token = $('input[name="__RequestVerificationToken"]', $form).val();
    var vehicleId = currentCarRowId.replace("Vehicle:", "");
    var vehicle = {
        __RequestVerificationToken: token,
        CarId: vehicleId
    };

    $.ajax(
        {
            method: 'POST',
            url: removeCarUrl,
            data: {
                __RequestVerificationToken: vehicle.__RequestVerificationToken,
                CarId: vehicle.CarId
            },
            success: function (result) {

                if (result) {

                    var $carContainer = $(currentCarDeleteButtonPressed).parent().closest('div');
                    var $vehicleRemovedOverlay = $carContainer.find('.vehicleRemovedOverlay')
                    $vehicleRemovedOverlay.fadeIn(3000);

                    ResetRemoveVehicle();
                    $("#carConfirmDelete").modal('hide');

                    $(".alert-danger").hide();
                    $(".alert-success").hide();

                } else {

                    ResetRemoveVehicle();
                    $("#carConfirmDelete").modal('hide');

                    $(".alert-success").hide();

                    var errorMessage = "Unable to remove vehicle due to the following errors:";
                    errorMessage += "<ul>";
                    errorMessage += "<li>An unexpected error has occured removing this vehicle!</li>";
                    errorMessage += "</ul>";

                    $(".alert-danger").html(errorMessage);
                    $(".alert-danger").show();

                }

            },
            error: function (result) {

                ResetRemoveVehicle();
                $("#carConfirmDelete").modal('hide');

                $(".alert-success").hide();

                var errorMessage = "Unable to remove vehicle due to the following errors:";
                errorMessage += "<ul>";
                errorMessage += "<li>An unexpected error has occured removing this vehicle!</li>";
                errorMessage += "</ul>";

                $(".alert-danger").html(errorMessage);
                $(".alert-danger").show();

            }
        }
    );

}

function RemoveVehicle(vehicleRowId, vehicleDeleteButtonPressed) {

    window.event.cancelBubble = true;
    currentCarDeleteButtonPressed = vehicleDeleteButtonPressed;
    currentCarRowId = vehicleRowId;
    $("#carConfirmDelete").modal('show');

}

function ResetRemoveVehicle() {
    currentCarRowId = "";
}

function InitAsyncUI() {
    ShowLoadingPanel();
    $("#registerAccountLoading").css("visibility", "visible");
}

function CloseAsyncUI() {
    HideLoadingPanel();
    $("#registerAccountLoading").css("visibility", "hidden");
}

function OnSuccess(data) {
    if (data.RedirectUrl) {
        window.location.href = data.RedirectUrl;
    }
    CloseAsyncUI();
}

function OnFailure(error) {

    $("#profileAsyncFailure").show();
    CloseAsyncUI();

}

function ShowCreditCardFAQ() {
    $("#creditCardFAQ").tooltip("toggle");
}

function ShowVehicleFAQ() {
    $("#vehicleFAQ").tooltip("toggle");
}

$(document).mouseup(function (e) {

    var container = $("#creditCardFAQ");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $("#creditCardFAQ").tooltip("hide");
    }

    var container = $("#vehicleFAQ");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $("#vehicleFAQ").tooltip("hide");
    }

});

function ShowTermsAndConditions() {
    $("#termsAndConditions").modal('show');
    return false;
}

function ShowCreditCardVerification() {
    $("#verifyCreditCardInfo").modal('show');
    return false;
}

function GetCreditCardInformationList(getCardListUrl) {

    var $form = $('#ProfileEditorForm');
    var token = $('input[name="__RequestVerificationToken"]', $form).val();

    $.ajax(
        {
            method: 'POST',
            url: getCardListUrl,
            data: {
                __RequestVerificationToken: token
            },
            success: function (result) {

                var $dataContainer = $("#creditCardVerificationInfoContainer");

                $dataContainer.html("");

                $.each(result, function (index, item) {

                    var cardTypeImage = '';
                    cardTypeImage = GetCardImageLogo(item.CardType);

                    var verifyCardItem = "";
                    verifyCardItem += '<div class="verifyCardItemContainer">';
                    verifyCardItem += '    <div class="verifiedOverlay"><div class="verifiedMessage"><h1>VERIFIED</h1></div></div>';
                    verifyCardItem += '    <div class="verifyCardItem">';
                    verifyCardItem += '         <table cellpadding="4" cellspacing="4">';
                    verifyCardItem += '             <tr>';
                    verifyCardItem += '                 <td class="cardIdentificationContainer">';
                    verifyCardItem += '                     <div><span class="cardIdentificationNumber">' + item.CardFirstSix + '....' + item.CardLastFour + '</span> <span class="cardIdentificationExpiration">[Expire: ' + item.CardExpiryMonth + '/' + item.CardExpiryYear + ']</span></div>';
                    verifyCardItem += '                 </td>';
                    verifyCardItem += '                 <td class="cardLogo">';
                    verifyCardItem += '                     ' + cardTypeImage;
                    verifyCardItem += '                 </td>';
                    verifyCardItem += '             </tr>';
                    verifyCardItem += '             <tr>';
                    verifyCardItem += '                 <td colspan="2"><hr /></td>';
                    verifyCardItem += '             </tr>';
                    verifyCardItem += '             <tr>';
                    verifyCardItem += '                 <td colspan="2">';
                    verifyCardItem += '                 <div class="alert alert-danger validationMessage"></div>'
                    verifyCardItem += '                     <div class="form-group">';
                    verifyCardItem += '                         <label>Verify Card</label>';
                    verifyCardItem += '                         <input type="text" placeholder="Card Number" class="form-control" />';
                    verifyCardItem += '                     </div>';
                    verifyCardItem += '                 </td>';
                    verifyCardItem += '             </tr>';
                    verifyCardItem += '             <tr>';
                    verifyCardItem += '                 <td colspan="2">';
                    verifyCardItem += '                     <button onclick="return verifyFullCardNumber(this, \'' + item.CardFirstSix + '\', \'' + item.CardLastFour + '\', \'' + item.CardExpiryMonth + '\', \'' + item.CardExpiryYear + '\')" value="' + item.PBPCardID + '" class="btn btn-primary verifyCardButton">Verify Card Information</button>';
                    verifyCardItem += '                 </td>';
                    verifyCardItem += '             </tr>';
                    verifyCardItem += '         </table>';
                    verifyCardItem += '     </div>';
                    verifyCardItem += '</div>';
                    verifyCardItem += '<div class="verifyCardItemSeperator">&nbsp;</div>';

                    $dataContainer.append(verifyCardItem);

                });

            }
        }
    );

}

function verifyFullCardNumber(btn, cardFirstSix, cardLastFour, cardExpiryMonth, cardExpiryYear, cardZipCode) {

    $(btn).prop("disabled", true);

    var $verifyUIItem = $(btn).parent().closest('div');
    var pbpCardId = $(btn).val();
    var $txtVerifyCardNumber = $verifyUIItem.find(":text")
    var arrErrors = validateVerifiedCardNumber($txtVerifyCardNumber, cardFirstSix, cardLastFour, cardExpiryMonth, cardExpiryYear, pbpCardId);

    var $validationMessage = $verifyUIItem.find(".validationMessage");
    $validationMessage.html("");

    if (arrErrors.length == 0) {

        var formattedCardValue = $txtVerifyCardNumber.val().split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');
        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var cardNumber = formattedCardValue;
        var card = {
            __RequestVerificationToken: token,
            CardNumber: cardNumber,
            CardExpiryMonth: cardExpiryMonth,
            CardExpiryYear: cardExpiryYear,
            CardZipCode: cardZipCode,
            PBPCardID: pbpCardId
        };

        $.ajax({
            async: false,
            type: "POST",
            url: "../../Profile/TokenizeCardNumber",
            data: {
                __RequestVerificationToken: card.__RequestVerificationToken,
                Card_Number: card.CardNumber,
                Card_Expiry_Month: card.CardExpiryMonth,
                Card_Expiry_Year: card.CardExpiryYear,
                Card_Zip_Code: card.CardZipCode,
                PBPCardID: card.PBPCardID
            },
            success: function (data) {

                if (data == "True") {

                    $verifyUIItem.find(":text").removeClass("input-validation-error");
                    $validationMessage.html("");
                    $validationMessage.hide();

                    var $verifiedOverlay = $verifyUIItem.siblings('.verifiedOverlay')
                    $verifiedOverlay.fadeIn(3000);

                } else {

                    arrErrors[arrErrors.length] = "Card verification failed!"
                    $txtVerifyCardNumber.addClass("input-validation-error");

                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                arrErrors[arrErrors.length] = "Card verification failed!"
                $txtVerifyCardNumber.addClass("input-validation-error");
            }
        });

    }

    if (arrErrors.length > 0) {

        for (i = 0; i <= arrErrors.length-1; i++) {
            $validationMessage.append('<span class="glyphicon glyphicon-exclamation-sign" id="alertDangerMessage" aria-hidden="true"></span>&nbsp;&nbsp;' + arrErrors[i]);
            if (i != arrErrors.length - 1) { $validationMessage.append("<br/>");}
        }

        $validationMessage.fadeIn(1000);

    }


    $(btn).prop("disabled", false);

    return false;

}

function MaskCreditCardNumbers($txtCardNumber)
{
 
    $txtCardNumber.focusin(function () {
        var displayMasked = $(this).val();
        displayMasked = displayMasked.substr(0, displayMasked.length - 4) + unMaskedCardValue.substr(unMaskedCardValue.length - 4, 4);

        $(this).val(displayMasked);
    });
    $txtCardNumber.focusout(function () {

        var formattedCardValue = $(this).val().split(' ').join('');
        formattedCardValue = formattedCardValue.split('-').join('');

        var txtMask = "";
        if (isNumeric(formattedCardValue)) {
            unMaskedCardValue = $(this).val();
            for (var i = 0; i < unMaskedCardValue.length; i++) {
                txtMask += "X";
            }
            $(this).val(txtMask);
        } else {
            var tempCardValue = $(this).val();
            for (var i = 0; i < tempCardValue.length; i++) {
                txtMask += "X";
            }
            $(this).val(txtMask);
        }

    });

}

function ClearMaskCreditCardNumbers($txtCardNumber)
{

    $txtCardNumber.off("focusout");
    $txtCardNumber.off("focusin");
    unMaskedCardValue = "";

}

function validateVerifiedCardNumber($txtVerifyCardNumber,
                                    cardFirstSix,
                                    cardLastFour,
                                    cardExpiryMonth,
                                    cardExpiryYear,
                                    pbpCardId) {

    var arrErrors = new Array();

    var formattedCardValue = $txtVerifyCardNumber.val().split(' ').join('');
    formattedCardValue = formattedCardValue.split('-').join('');

    if ($txtVerifyCardNumber.val().length < 1 || $txtVerifyCardNumber.val().length > 100) {

        arrErrors[arrErrors.length] = "Card number is required."
        $txtVerifyCardNumber.addClass("input-validation-error");

    } else {

        var strNewFirstSix = formattedCardValue.substring(0, 6);
        var strNewLastFour = formattedCardValue.substring(formattedCardValue.length - 4, formattedCardValue.length);
        if (strNewFirstSix != cardFirstSix) {
            arrErrors[arrErrors.length] = "First six digits do not match."
        }
        if (strNewLastFour != cardLastFour) {
            arrErrors[arrErrors.length] = "Last four digits do not match."
        }

        if (arrErrors.length == 0) {

            var creditCardRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

            if (creditCardRegEx.test(formattedCardValue)) {

                $txtVerifyCardNumber.removeClass("input-validation-error");

            } else {

                arrErrors[arrErrors.length] = "Card number is not valid."
                $txtVerifyCardNumber.addClass("input-validation-error");

            }

        }

    }

    if (arrErrors.length == 0) {

        var $form = $('#ProfileEditorForm');
        var token = $('input[name="__RequestVerificationToken"]', $form).val();
        var cardNumber = formattedCardValue;
        var card = {
            __RequestVerificationToken: token,
            CardNumber: cardNumber
        };

        $.ajax({
            async: false,
            type: "POST",
            url: "../../Profile/VerifyCardHash",
            data: {
                __RequestVerificationToken: card.__RequestVerificationToken,
                Card_Number: card.CardNumber,
                Expiry_Month: cardExpiryMonth,
                Expiry_Year: cardExpiryYear,
                PBP_Card_Id: pbpCardId
            },
            success: function (data) {

                if (data != "True") {

                    arrErrors[arrErrors.length] = "Credit card number does not match our records."
                    $txtVerifyCardNumber.addClass("input-validation-error");

                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                arrErrors[arrErrors.length] = "Failed to retrieve valid card status."
                $txtVerifyCardNumber.addClass("input-validation-error");
            }
        });

    }

    return arrErrors;

}

function ShowAddCreditCard() {

    CardNumberChanged($("#txtAddNewCardNumber"));
    MaskCreditCardNumbers($("#txtAddNewCardNumber"))
    $("#addCreditCardInfo").modal('show');

    return false;

}

function ShowAddVehicle() {
    $("#addVehicleInfo").modal('show');
    return false;
}

function ShowEditVehicle() {
    $("#editVehicleInfo").modal('show');
    return false;
}

function ShowEditCard() {

    CardNumberChanged($("#txtEditCardNumber"));
    MaskCreditCardNumbers($("#txtEditCardNumber"))
    $("#editCreditCardInfo").modal('show');

    return false;
}





