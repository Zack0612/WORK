
$(document).ready(function() {

	$.fn.snow();

	//
	$('#go').click(function () {
		 $('html, body').animate({scrollTop: $("#page1").offset().top},{duration:800},'easeOutExpo'); 
	});



   //頁面導覽置底
    $(window).load(function() {
        var PG3 = $('#page3').offset().top - 300;
		var SPA1 = $('.spa1').offset().top - 200;		

 		 /*------------- 判斷畫面寬度的matchMedia方法   -------------*/
		var mm = window.matchMedia("(max-width: 768px)");

		mm.addListener(resizeWidth);
		resizeWidth(mm);
		function resizeWidth(pMatchMedia){
		  if (pMatchMedia.matches) {
			 //小於768時執行的js
		    $(".w_con").css({
		                    display:'block'
		                });

             $('.jolinm').hide();
		       // fade in #top 
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.jolinm').fadeIn();
				} else {
					$('.jolinm').fadeOut();
				}
	        });		
		    //----------------------------------

		  }else {
		    //大於768時執行的js
		     //------------------
        $(this).scroll(function(){           
            if ($(this).scrollTop() > PG3) {
				
                $(".w_con").css({
                    display:'block'
                });
					
              
            }else{
				
                $(".w_con").css({
                    display:'none'
                });
				
               
            };   
			
        });

		  }
		}

       

        //------------------

        //------------------
        $(this).scroll(function(){           
            if ($(this).scrollTop() > SPA1) {
				
                $(".peobar").css({
                    display:'block'
                });
					
                $(".peobar").fadeIn();
            };   
			
        });
        //------------------

        	});



});




//===============================  scrollbar  ============================

$(document).ready(function() {
	

	
	        $('#top').hide();
	       // fade in #top 
		 	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		   });
      
		// scroll body to 0px on click
		
		$('#top').click(function () {
		 $('html, body').animate({scrollTop: $("#page0").offset().top},{duration:800},'easeOutExpo'); 
		});
	
  

      
	
});
