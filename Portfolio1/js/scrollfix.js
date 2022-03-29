// JavaScript Document
$(document).ready(function(){
	
	var MainNavTop = $('#nav').offset().top;
	$(window).scroll(function(){
		if ($(this).scrollTop() > MainNavTop) {
			$('.scroll_show').fadeIn();
		} else {
			$('.scroll_show').fadeOut();
		}
	});
	


$(document).ready(function(){
    $(window).resize(function() {
        wdth=$(window).width();
    });



$(window).load(function() {
	 
/*------------- 判斷畫面寬度的matchMedia方法   -------------*/
var mm = window.matchMedia("(max-width: 768px)");
mm.addListener(resizeWidth);
resizeWidth(mm);

function resizeWidth(pMatchMedia){
  if (pMatchMedia.matches) {
	  
	 //小於768時執行的js
	$('#nav2').addClass("navnone");
	 
  }else {
    //大於768時執行的js
	$('#nav2').removeClass("navnone");
  }
}

});

	//頁面導覽置底
    $(window).load(function() {
        var MainNavTop = $('#owl-demo').offset().top;
        var B6Top = $('.B6').offset().top;
				
        $(this).scroll(function(){           
            if ($(this).scrollTop() > MainNavTop) {
				

				
                $("#nav2").css({
                    display:'block'
                });

						
                $("#nav .scroll_show img").fadeIn();
            }else{
				
                $("#nav2").css({
                    display:'none'
                });
				

				
                $("#nav .scroll_show img").fadeOut();
            };   
			
        });

		
		
		$(this).scroll(function(){           
            if ($(this).scrollTop() > B6Top) {
				
                $("#nav2").css({
                    display:'none'
                });

            }else{
				
            };   
			
        });
		
		
	});
        
  
});

});
