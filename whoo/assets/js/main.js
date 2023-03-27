$(function () {

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

    $(".wrapper select").click(function () {
        $('.wrapper select').addClass('active');
    });

    $(".btn_enter").click(function () {
        $('.msg_popup').fadeIn();
    });

    $(".popup_close").click(function () {
        $('.popup').fadeOut();
    });

    $(".btn_look").click(function () {
        $('.userrepot').fadeIn();
    });

    //menu
    $(".btn_menu").click(function () {
        $(this).toggleClass('click');
        $('.antiaging_essence header ul,.wrapper header ul').toggleClass('click');
    });

    //input
    $('input[name="read"]').on('change', function () {
        var $this = $(this);
        if ($this.prop('checked')) {
            $('.checkmark').addClass('active');
        } else {
            $('.checkmark').removeClass('active');
        }
    });

})
