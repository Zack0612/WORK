$(function () {


    // hover-effect ==================================================

    $(".menu-list ul li").hover(function () {
        $(this).addClass("hover-effect-on");
        // $(this).next().addClass("hover-effect-off1");
        // $(this).prev().addClass("hover-effect-off1");
        // $(this).siblings().addClass("hover-effect-off");

    }, function () {
        $(this).removeClass("hover-effect-on");
        // $(this).next().removeClass("hover-effect-off1");
        // $(this).prev().removeClass("hover-effect-off1");
        // $(this).siblings().removeClass("hover-effect-off");
    });





    // menu-top ==================================================


    // goto-link ============================================

    function navback() {
        menuBtn.classList.remove('open');
        menuOpen = false;
        $('.menu-list ').removeClass('menu-list-open').addClass('menu-list-close');
        // $('html,body').css('overflow', '');
        $('.nav-mask').removeClass('fox-down').addClass('fox-back');
        $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
    }

    $('.go_').click(function () {

        $('.pages').removeClass('scaleB');

        $('.menu-list').fadeOut(0);
        $('.video-opening').fadeIn(0).delay(1600).fadeOut();
        $('.pages').addClass('scaleB');
        $('#video-opening').trigger('play');
        // $('.for-m').fadeOut();
        navback();

    });



    // media   ==================================================
    if ($(window).width() < 767) {
        // JavaScript here
        // 當視窗寬度小於767px時執行
        $('.go-top').click(function () {
            // $('html,body').css('overflow', '');
            // $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
            $('.pages').removeClass('scaleB');

            $('.video-opening').fadeIn(0).delay(1600).fadeOut();
            $('#video-opening').trigger('play');
            $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
            $('.nav-mask').removeClass('fox-down').addClass('fox-back');
            $('#video-opening').trigger('play');
            $('.for-m').fadeOut();


        });

    } else {
        // JavaScript here
        // 當視窗寬度不小於767px時執行
        $('.go-top').click(function () {
            // $('html,body').css('overflow', '');
            // $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
            $('.pages').removeClass('scaleB');

            $('.video-opening').fadeIn(0).delay(1600).fadeOut();
            $('#video-opening').trigger('play');
            $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
            $('.nav-mask').removeClass('fox-down').addClass('fox-back');
            $('#video-opening').trigger('play');
            $('.for-m').fadeIn();


        });

    }
    //common pages
    // fullpage =============================================
    var myFullpage = new fullpage('#wrapper', {
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        lazyLoad: true,
        // navigation: true,
        // continuousVertical: true,




    });

    // swiper ==================================================
    //不可移動順序
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        loopFillGroupWithBlank: false,
        loopAdditionalSlides: 2,


        breakpoints: {
            1920: {
                slidesPerView: 4,
                spaceBetween: 10,
                direction: "vertical",
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
                // direction: "horizontal",
                direction: "vertical",
                // freeMode: true,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
                direction: "horizontal",
                // freeMode: true,
            },

        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    // df-box ==================================================

    function boxopen() {
        $('.df-box').removeClass('box-close').addClass('box-open');
        $('.df-cover').delay(220).fadeIn(500);
        $('#section2,#section3,#section4,#section5,#section6,.footer_').hide();


    }

    function boxopen2() {
        $('.df-box').removeClass('box-close').addClass('box-open');
        $('.df-cover').delay(220).fadeIn(500);
        $('#section1,#section3,#section4,#section5,#section6,.footer_').hide();
    }

    $('.df-close').click(function () {
        // $('.df-close,.df-cover').click(function() {
        $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').show();
        $(".df-video-item").attr("src", $(".df-video-item").attr("src").replace("autoplay=1", "autoplay=0"));
        $('.df-cover').fadeOut(0);
        $('.df-box').delay(220).removeClass('box-open').addClass('box-close');
    });

    /*    $('.btn-sign').click(function() {
            $('#section1,#section3,#section4,#section5,#section6,.footer_').show();
            $(".df-video-item").attr("src", $(".df-video-item").attr("src").replace("autoplay=1", "autoplay=0"));
            $('.go-sign,.df-cover').fadeOut(0);
            $('.df-box').delay(220).removeClass('box-open').addClass('box-close');
        });*/

    //



    // new-box ==================================================

    $('.go-note').click(function () {


        boxopen();

        $('.note').fadeIn(300).siblings().hide();

        $(".box-text").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
    });

    $("#box-text-close").click(function () {
        $(".box-text").mCustomScrollbar("destroy")
    })
    /* $('.go-sign').click(function() {
         boxopen2();
         $('.sign').fadeIn(300).siblings().hide();
     });*/


    $('.go-wallpaper01').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        $(".img-order").fadeIn(0);
        $(".df-video").fadeOut(0);
        $(".img-order img.pc").attr("src", "images/gallery/wallpaper01.jpg");
        $(".img-order img.mobile").attr("src", "images/mobile_01.jpg");
        $(".download_01").attr("href", "images/gallery/wallpaper01.jpg");
        $(".download_02").attr("href", "images/mobile_01.jpg");
    });

    $('.go-wallpaper02').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        $(".img-order").fadeIn(0);
        $(".df-video").fadeOut(0);
        $(".img-order img.pc").attr("src", "images/gallery/wallpaper02.jpg");
        $(".img-order img.mobile").attr("src", "images/gallery/wallpaper02-m.jpg");
        $(".download_01").attr("href", "images/gallery/wallpaper02.jpg");
        $(".download_02").attr("href", "images/gallery/wallpaper02-m.jpg");
    });
    $('.go-video01').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        // $(".df-video-item").attr("src", $(".df-video-item").attr("src").replace("autoplay=0", "autoplay=1"));
        $(".df-video-item").attr("src", "https://www.youtube.com/embed/T8inli7g53Y?hd=1&loop=1&autoplay=1&rel=0&controls=1&mute=1&playlist=T8inli7g53Y");
        $(".img-order").fadeOut(0);
        $(".df-video").fadeIn(0);
    });

    $('.go-video02').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        // $(".df-video-item").attr("src", $(".df-video-item").attr("src").replace("autoplay=0", "autoplay=1"));
        $(".df-video-item").attr("src", "https://www.youtube.com/embed/oDb-7RKT59k?hd=1&loop=1&autoplay=1&rel=0&controls=1&mute=1&playlist=oDb-7RKT59k");
        $(".img-order").fadeOut(0);
        $(".df-video").fadeIn(0);
    });


    $('.go-video03').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        $(".df-video-item").attr("src", "https://www.youtube.com/embed/9_s7iVHmNEg?hd=1&loop=1&autoplay=1&rel=0&controls=1&mute=1&playlist=9_s7iVHmNEg");
        $(".img-order").fadeOut(0);
        $(".df-video").fadeIn(0);
    });
    $('.go-video04').click(function () {
        boxopen();
        $('.wallpaper').fadeIn(300).siblings().hide();
        $(".df-video-item").attr("src", "https://www.youtube.com/embed/21M7nVFMi5Q?hd=1&loop=1&autoplay=1&rel=0&controls=1&mute=1&playlist=21M7nVFMi5Q");
        $(".img-order").fadeOut(0);
        $(".df-video").fadeIn(0);
    });

    // btn-card ===================


  






});