// common
$(function () {

  // wow.js / container
  new WOW().init();


        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#goTop').fadeIn(300);
            } else {
                $('#goTop').stop().fadeOut(300);

            }
        });

  $("#goTop").click(function() {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000);

          });

  //topbar
  $('.hamburger,.icon-link').click(function () {
    $('.hamburger').toggleClass('click');
    $('.icon-link').toggleClass('click');
  });


});