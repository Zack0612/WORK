$(function() {
    
    $("#btn_menu").click(function () {
        $(".menu_list").toggleClass('active');
    });
    
    $(".menu_list,.menu_list ul li a").click(function () {
        $('.menu_list').removeClass('active');
    });
    
    $(".btn_goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 800);
    });
    
    //scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
        }
        }
    });
	
	$(".c-ct,.check-content").click(function () {
        $(".checkmark").toggleClass('active');
    });
    
})
