WebFont.load({
	google: { families: ['Lato:300:latin'] }
});
/*! jquery.cookie v1.4.0 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=decodeURIComponent(a.replace(g," "))}catch(b){return}try{return h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}});
$(function(){
	
	$('.colorbox').colorbox({
		iframe: true,
		innerWidth: '80%',
		innerHeight: '70%'
	});
	
	$('.print').on('click',function(e) {
		e.preventDefault();
		window.print();
	});
	
	$(':checkbox').customInput();
	
	$('.transaction-date').pickadate({
	    format: 'mm/dd/yyyy',
	    max: true
	});
	
	/*
	$('.expiration-date').on('blur',function() {
		// console.log("exp-date");
		validateForm(false);
	});
	*/
	
	//$('.submit-search').on('click',function(e) {
	//	// console.log("submitted");
	//	if (!validateForm(true)) e.preventDefault();
	//});
	
	//function validateForm($year) {
		
	//	var year = $year ? $year : false;
	//	var validationResult = false;
	//	var expResult = false;
	//	var transResult = false;

	//	$('.expiration-date').removeClass("input-validation-error");
	//	$('.transaction-date').removeClass("input-validation-error");
	//	$('.first-six').removeClass("input-validation-error");
	//	$('.last-four').removeClass("input-validation-error");
		
	//	var expValue = $('.expiration-date').val().split('/');
	//	var patternA = /^\d{2}$/;
	//	var patternB = /^\d{4}$/;
		
	//	if (expValue[0] < 1 || expValue[0] > 12) expResult = true;
	//	if (!patternA.test(expValue[0]) || !patternA.test(expValue[1])) expResult = true;
	//	if (expValue[2]) expResult = true;
		
	//	if (year) {
			
	//		var transValue = $('.transaction-date').val().split('/');
		
	//		if (transValue[0] < 1 || transValue[0] > 12) transResult = true;
	//		if (!patternA.test(transValue[0]) || !patternA.test(transValue[1]) || !patternB.test(transValue[2])) transResult = true;
	//		// if (transValue[2] < 2015) transResult = true; 
	//		if (transValue[3]) transResult = true;
			
	//	}
		
	//	var firstSixResult = false;
	//	if ($('.first-six').val().length < 6) firstSixResult = true;
		
	//	var lastFourResult = false;
	//	if ($('.last-four').val().length < 4) lastFourResult = true;
		
	//	// console.log("Exp Result: " + expResult + " -- Trans Result: " + transResult);
		
	//	if (expResult && !transResult) {
	//	    alert("Please enter a valid Expiration Date in MM/YY format.");
	//	    $('.expiration-date').addClass("input-validation-error");
	//		return false;
	//	} else if (!expResult && transResult) {
	//	    alert("Please enter a valid Transaction Date in MM/DD/YYYY format.");
	//	    $('.transaction-date').addClass("input-validation-error");
	//		return false;
	//	} else if (expResult && transResult) {
	//	    alert("Please enter a valid Expiration Date (MM/YY format) and Transaction Date (MM/DD/YYYY format).");
	//	    $('.expiration-date').addClass("input-validation-error");
	//	    $('.transaction-date').addClass("input-validation-error");
	//		return false;
	//	} else if (firstSixResult) {
	//	    $('.first-six').addClass("input-validation-error");
	//	    alert("Please enter the First Six digits of the card number.");
	//		return false;
	//	} else if (lastFourResult) {
	//	    $('.last-four').addClass("input-validation-error");
	//		alert("Please enter the Last Four digits of the card number.");
	//		return false;
	//	} else {
	//		return true;
	//	}
	//}
	
	//$(document).on('keyup', '.card-number', function() {
	//	console.log('keyed');
	//	var v = this.value;
	//	if ($.isNumeric(v) === false) {
	//		this.value = this.value.slice(0,-1);	
	//	}
	//});

});
$.fn.extend({
	placeholderTip: function(options){
		var defaults = {offset: 5, id: 'placeholder-tip', cssClass: '', cloneStyles: ['font-weight','font-size','font-family','line-height', 'padding', 'border', 'outline','margin']};
		var options = $.extend(defaults, options);
		var tip = $('#'+ options.id);
		if (tip.length === 0){ tip = $('<div id="'+ options.id +'"><div /><span /></div>').css({'position': 'absolute','z-index': 1000 }).appendTo('body').hide(); }
		$(':input[placeholder][placeholder!=""]', this).focus(function (e) {
			var input = $(this);
			var inputWidth = input.outerWidth();
			var inputHeight = input.outerHeight();
			var inputPos = input.offset();
			tip.stop().hide().removeClass().addClass(options.id +'-'+ options.position +' '+options.cssClass).find('div').html(input.attr('placeholder')).end().css({ top: inputPos.top, left: inputPos.left});
			$.each(options.cloneStyles, function(item, value) { tip.css(value, input.css(value)); });
			var tipHeight = tip.outerHeight();		
			var tipWidth = tip.outerWidth();
			var animation = {top: '-='+ (tipHeight + options.offset) +'px'};
			switch (options.position) {
				case 'right': animation = {left: '+='+ (inputWidth + options.offset) +'px'}; break;
				case 'left':  animation = {left: '-='+ (tipWidth + options.offset) +'px'}; break;
				case 'bottom': animation = {top: '+='+ (inputHeight + options.offset) +'px'}; break;
			}
			$.extend(animation, { opacity: 100});
			tip.show().animate(animation);
		}).blur(function(e){ tip.hide(); });
		return this;
	},
	customInput : function(options) {
		if (!$('html').hasClass('lt-ie7')){
			return this.each(function() {
				var $this = $(this);
				if ($this.data('styled')){ return; }
				$this.data('styled', true);
				
				$this.wrap('<span class="custom-'+ (this.type ? this.type : this.tagName.toLowerCase()) +'" />');
				
				if (this.tagName.toLowerCase().indexOf('select') >= 0){
					var currentSelected = $this.find(':selected');
					$this.parent().append('<span>'+ currentSelected.text() +'</span>');
					var text = $this.next();
					$this.bind('change update', function(){
						text.text($this.find(':selected').text());
					});
				}
				else {
					$this.on('change', function(){
						if (this.type.toLowerCase() == 'radio'){
							$('input[type="radio"][name="'+ this.name +'"]').each(function(index,element){ $(this).parent().removeClass('checked'); });
						}
						else {
							$this.parent().removeClass('checked');
						}
						if ($this.is(':checked')) {  $this.parent().addClass('checked'); } 
					}).
					focus(function() { $this.parent().addClass('focus'); }).
					blur(function() { $this.parent().removeClass('focus'); });
					if ($this.is(':checked')) {  $this.parent().addClass('checked'); }
				}				
			});
		}
		return this;
	}
});















