// JavaScript Document

$(document).ready(function() {	
	//
	 AOS.init({
		duration: 1000
		});
		
			
	//右邊按鈕		
	function openNav() {
    $('#nalist').addClass('active');
	}

    function closeNav() {
    $('#nalist').removeClass('active');
    }

    $('.menu').click(openNav);
	$('.muclose').click(closeNav);
	//結束右邊按鈕
	
	//上方按鈕
	$('#nav_close').click(function(){
			$('#nav_close').hide();
			$('#nav_open').show();
			$('#menu_pbox').slideDown(200);
			$('#menu_pbox').scrollTop(0);
			});

	$('#nav_open').click(function(){
			$('#nav_open').hide();
			$('#nav_close').show();
			$('#menu_pbox').slideUp(100);
			$('body').removeAttr('style');
			setTimeout(function(){$('#menu_pbox').removeAttr('style');},200);
			});	
	//結束上方按鈕
	
	// 設定產生共有 40 個指定圖片在網頁中飄移

		
		
        $('body').snowfall({
            image: "images/flake-",
            minSize: 5,
            maxSize: 30,
            flakeCount: 20,
            flakeIndex: 10
        });		
					
});
//

function ac(){
	$('.m_close').hide();
	$('.m_open').show();
	$('#menu_pbox').removeAttr('style');
	//$('#menu_pbox').slideUp(0);
	setTimeout(function(){$('#menu_pbox').removeAttr('style');},100);
	};
	
$(function() {


    // gotop
    $(function() {
        $("#gotop").click(function() {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000);


        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#gotop').fadeIn(0);
            } else {
                $('#gotop').stop().fadeOut(0);

            }
        });
    });


 // bottom
/*
$(function() {
 $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.menu').fadeIn(0);
            } else {
                $('.menu').stop().fadeOut(0);

            }
        });
});
*/

    //=============================== opening ===============================
    //  $( ".movie" ).delay(1000).fadeIn(200).delay(950000).fadeOut(300);
    //  $( ".cover,.close_" ).delay(1200).fadeIn(200).delay(950000).fadeOut(300);

    //===============================lightbox===============================
    $(".cover,.close_").on("click", hide);

    function hide() {
        $(".cover,.close_").stop(true, true).fadeOut(300);
        $(".movie").stop(true, true).fadeOut(300).delay(100).empty(); //清空選取元件裡的內容，但元件本身不會被移除。
    }


    // $(".B0").on("click", show_news);

    // function show_news() {
    //     $(".swiper-container").css("height","300");
    //     $(".content-slide").css("height","300");
    //     $(".B0").fadeOut(100);
    //     $(".B0_1").fadeIn(200);


    // }

    //===============================lightbox===============================

    $('.fancybox').fancybox();
	
	$("a#inline").fancybox({
		hideOnContentClick: false,
		autoHeight: true
	});


});




$(window).load(function(){
        $("#bacc").fadeOut(1000);

 });


