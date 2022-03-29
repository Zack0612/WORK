// JavaScript Document

$(document).ready(function() {	
		
			
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

    //光箱
    $('.fancybox').fancybox();
    
    $("a#inline").fancybox({
        hideOnContentClick: false,
        autoHeight: true
    });

    //分頁切換
    $('.btn1,.btn1m').click(function(){
            $('#page1').show();
            $('#page2,#page3').hide();
            });

    $('.btn2,.btn2m').click(function(){
            $('#page2').show();
            $('#page1,#page3').hide();
            });


    $('.btn3,.btn3m').click(function(){
            $('#page3').show();
            $('#page1,#page2').hide();
            });

    $('#gotop').click(function(){
            $('#page1,#page2,#page3').hide();
            });

    //PC按鈕點擊滑動
    $('.btn1,.btn1m').click(function(){
        $('html,body').animate({scrollTop:$('#page1').offset().top}, 800);
    });

    $('.btn2,.btn2m').click(function(){
        $('html,body').animate({scrollTop:$('#page2').offset().top}, 800);
    });

    $('.btn3,.btn3m').click(function(){
        $('html,body').animate({scrollTop:$('#page3').offset().top}, 800);
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

});



    //===============================lightbox===============================



$(window).load(function(){
        $("#bacc").fadeOut(1000);

 });


