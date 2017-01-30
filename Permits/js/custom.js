/*$(document).ready(function () {
	  var trigger = $('.hamburger'),
	      overlay = $('.overlay'),
	     isClosed = false;

	    trigger.click(function () {
	      hamburger_cross();      
	    });

	    function hamburger_cross() {

	      if (isClosed == true) {          
	        overlay.hide();
	        trigger.removeClass('is-open');
	        trigger.addClass('is-closed');
	        isClosed = false;
	      } else {   
	        overlay.show();
	        trigger.removeClass('is-closed');
	        trigger.addClass('is-open');
	        isClosed = true;
	      }
	  }
	  
	  $('[data-toggle="offcanvas"]').click(function () {
	        $('#wrapper').toggleClass('toggled');
	  });

	  
});*/


$(document).ready(function () {
	  var trigger = $('.hamburger'),
	      overlay = $('.overlay'),
	     isClosed = false;

	    trigger.click(function () {
	      hamburger_cross();      
	    });
	    function hamburger_cross() {

	      if (isClosed == true) {          
	        //overlay.hide();


	        $("#page-wrapper").animate({"margin-left": "250px"}, {  duration: 800,queue: false });
			$(".sidebar").animate({width: "250px"}, {  duration: 100,queue: false });
			$(".hamburger").animate({duration: 100,queue: false });
			

			trigger.removeClass('is-open');
	        trigger.addClass('is-closed');
	        isClosed = false;
	      } 

	       else{
			
		$("#page-wrapper").animate({"margin-left": "0px"}, {  duration: 500,queue: false });
			$(".sidebar").animate({width: "0px"}, {  duration: 100,queue: false });
			$(".hamburger").animate({  duration: 100,queue: false });

	        trigger.removeClass('is-closed');
	        trigger.addClass('is-open');
	        isClosed = true;

	      }

	      console.log(isClosed);
	  }
	  
	  /*$('[data-toggle="offcanvas"]').click(function () {
	        $('#wrapper').toggleClass('toggled');
	  });*/

	  
});