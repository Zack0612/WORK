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

    //==========================  手機滑動效果  ============================

    var tabsSwiper = new Swiper('.swiper-container', {
        speed: 500,
        onSlideChangeStart: function() {
            $(".tabs .active").removeClass('active')
            $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')
        }
    })
    $(".tabs a").on('touchstart mousedown', function(e) {
        e.preventDefault()
        $(".tabs .active").removeClass('active')
        $(this).addClass('active')
        tabsSwiper.swipeTo($(this).index())
    })
    $(".tabs a").click(function(e) {
            e.preventDefault()
        })
        //==========================  RWD輪播效果  =========================
    $(document).ready(function() {
		
       $("#owl-demo").owlCarousel({
		    items: 1,
			singleItem: true,
		    navigation: true,
			navigationText:['',''],
            pagination : false, 
			loops : true,
			slideSpeed : 300, 
            autoPlay: 4000,
            stopOnHover: true,
			infinite: true,
        });
		
        $("#owl-demo3").owlCarousel({
            navigation: true,


        });
    });

    $(document).ready(function() {
        $("#owl-demo2").owlCarousel({
			items: 1,
            navigation: true,
			pagination : false, 
			itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet : [768, 1],
            itemsTabletSmall : false,
            itemsMobile : [479, 1],
        });
    });

    $(document).ready(function() {
        $("#owl-demo4").owlCarousel({
			items: 3,
            navigation: true,
			pagination : false, 
			itemsDesktop : [1199, 3],
            itemsDesktopSmall : [979, 3],
            itemsTablet : [768, 2],
            itemsTabletSmall : false,
            itemsMobile : [479, 2],
        });
    });

    $(document).ready(function() {
        $("#owl-demo5,#owl-demo6,#owl-demo7").owlCarousel({
			items:1,
            navigation: true,
			pagination : false, 
			autoWidth:true,
        });

	//
	$('#t1').click(function(){
			$('#tab1').fadeIn(200);
			$('#tab2').hide();
			$('#tab3').hide();
			$("#t1").addClass('active');
			$("#t2,#t3").removeClass('active');
	});

	$('#t2').click(function(){
			$('#tab2').fadeIn(200);
			$('#tab1').hide();
			$('#tab3').hide();
			$("#t2").addClass('active');
			$("#t1,#t3").removeClass('active');
	});
	
	$('#t3').click(function(){
			$('#tab3').fadeIn(200);
			$('#tab1').hide();
			$('#tab2').hide();
			$("#t3").addClass('active');
			$("#t1,#t2").removeClass('active');
	});
			
	
    });
	
	//==================            =======================
	

    //===============================  menu  ===============================
    // $("#M_btn").click(function() {
    //     $("#M_nav ul").toggle("slideDown"); /*內文*/
    //     return false;
    // });


    // $(".S1").click(function() {
    //     $("html,body").animate({
    //         scrollTop: 920
    //     }, 400, "easeInCirc");
    //     $("#BOX1").stop(true, true).fadeIn(100); /*內文*/
    //     $("#BOX2,#BOX3").stop(true, true).fadeOut(200);
    //     return false;
    // });

    // $(".S2").click(function() {
    //     $("html,body").animate({
    //         scrollTop: 920
    //     }, 400, "easeInCirc");
    //     $("#BOX2").stop(true, true).fadeIn(100);
    //     $("#BOX1,#BOX3").stop(true, true).fadeOut(200);
    //     return false;
    // });


    // $(".S11").click(function() {


    //     $("html,body").animate({
    //         scrollTop: 330
    //     }, 400, "easeInCirc");

    //     $("#BOX1").stop(true, true).fadeIn(100); /*內文*/
    //     $("#BOX2,#BOX3").stop(true, true).fadeOut(200);
    //     return false;
    // });

    // $(".S21").click(function() {
    //     $("html,body").animate({
    //         scrollTop: 330
    //     }, 400, "easeInCirc");
    //     $("#BOX2").stop(true, true).fadeIn(100);
    //     $("#BOX1,#BOX3").stop(true, true).fadeOut(200);
    //     return false;
    // });



});



$(function() {




//=============================== menu-top ===========================

   $(".menu-drop").click(function() {
        $(".menu-drop").fadeOut(0);
        $(".menu-up").fadeIn(0);
        $(".menu-list").stop(true, true).animate({ top: 40 },300, "swing");
        $(".menu-list").css("z-index", "98");
        return false;
    });

   $(".menu-up").click(function() {
        $(".menu-drop").fadeIn(0);
        $(".menu-up").fadeOut(0);
        $(".menu-list").stop(true, true).animate({ top: -200 },300, "swing");
        $(".menu-list").css("z-index", "98");
        return false;
    });



//===============================  menu-list  ============================

    $(".menu-03,.icon-list7").click(function() {
        $(".game-all,.game-all2,.content").fadeOut(100);
        $(".content-gift").fadeIn(300);

        // 可設定到錨點的位置
        $('html,body').animate({ scrollTop: $('.G0').offset().top - 50 }, 1000);
        return false;
    });




});




//===============================  scrollbar  ============================
    $(document).ready(function() {
	$('body').niceScroll({styler:"fb",cursorcolor:"#b2db11",autohidemode:false});
    });


$(function() {




//=============================== menu-top ===========================

   $(".menu-drop").click(function() {
        $(".menu-drop").fadeOut(0);
        $(".menu-up").fadeIn(0);
        $(".menu-list").stop(true, true).animate({ top: 40 },300, "swing");
        $(".menu-list").css("z-index", "98");
        return false;
    });

   $(".menu-up").click(function() {
        $(".menu-drop").fadeIn(0);
        $(".menu-up").fadeOut(0);
        $(".menu-list").stop(true, true).animate({ top: -200 },300, "swing");
        $(".menu-list").css("z-index", "98");
        return false;
    });



//===============================  menu-list  ============================

    $(".menu-03,.icon-list7").click(function() {
        $(".game-all,.game-all2,.content").fadeOut(100);
        $(".content-gift").fadeIn(300);

        // 可設定到錨點的位置
        $('html,body').animate({ scrollTop: $('.G0').offset().top - 50 }, 1000);
        return false;
    });




});

//=================== scroll ==========================

	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;

	};
	
//==================== data-section =======================
$('[data-section]').on({
  
  'mousemove': throttle(function (e) {
  
    var x = -(e.pageX / 16),
        y = -(e.pageY / 16);
    
    $('.parallax').css({
        transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)',
        transition: '300ms ease'
      });
  }, 100)
});

$('[data-section]').on({
  
  'mousemove': throttle(function (e) {
  
    var x = -(e.pageX / 20),
        y = -(e.pageY / 20);
    
    $('.parallax2').css({
        transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)',
        transition: '300ms ease'
      });
  }, 100)
});

function throttle(fn, threshhold, scope) {
  
  var last,
      deferTimer;
  
  threshhold || (threshhold = 250);
  
  return function () {
    
    var context = scope || this,
        now = +new Date,
        args = arguments;
    
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    }
    else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/*======   龍眼發光      =======*/

$(document).ready(function(){
 dneye(); 
 dneye2(); 
	function dneye() {

		$(".dnhd2").delay(300).animate({
		
			opacity: '0'
		}, 1200).animate({
		
			opacity: '1'
		}, 450, dneye);
	}
	
	function dneye2() {

		$(".dnhd2_m").delay(300).animate({
		
			opacity: '0'
		}, 1200).animate({
		
			opacity: '1'
		}, 450, dneye2);
	}
	
});



/*==     loading   ======*/
$(window).load(function(){
        $("#bacc").fadeOut(1000);
 });