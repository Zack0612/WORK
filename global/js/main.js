$(function () {

    //input
    $('input[name="read"]').on('change', function () {
        var $this = $(this);
        if ($this.prop('checked')) {
            $('.checkmark').addClass('active');
        } else {
            $('.checkmark').removeClass('active');
        }
    });

    var $window = $(window);
    var ww = $window.width();

    //scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 400);
                return false;
            }
        }
    });

    $(".btn_enter").click(function () {
        $('.msg_popup').fadeIn();
    });

    $(".popup_close").click(function () {
        $('.popup').fadeOut();
    });

    $(" .wish_event a").click(function () {
        $('.wish_event a').removeClass('click_now');
        $(this).addClass('click_now');
    });

    $(".btn_goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
                scrollTop: 0,
            },
            600
        );
    });
})
