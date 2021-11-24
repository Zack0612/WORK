$(function () {



    // media   ==================================================
    if ($(window).width() < 767) {
        // JavaScript here
        // 當視窗寬度小於767px時執行
        $('.go-top').click(function () {
            // $('html,body').css('overflow', '');
            // $('#section1,#section2,#section3,#section4,#section5,#section6,.footer_').fadeIn();
            $('.pages').removeClass('scaleB');


        });

    } else {
        // JavaScript here
        // 當視窗寬度不小於767px時執行
        $('.go-top').click(function () {
            $('.pages').removeClass('scaleB');
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


});