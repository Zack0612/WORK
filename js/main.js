

$(document).ready(function(){

    $("#btn_turn").click(function(){
        $('.btn_cy').toggleClass("todown");
        $('footer').toggleClass("active");
    });

    $(".btn_chang").click(function(){
        $('.jin1').toggleClass("none");
        $('.jin2').toggleClass("block");
    });


 //reward_button
 $('.reward_buttonactive').click(function () {
    $('.wanzi_popup').css('display', 'flex').fadeIn(100);
    $('.wanzi_popup').delay(100).fadeIn(500);

  });

  $('.wanzi_popup_close').click(function () {
    $('.wanzi_popup').fadeOut(100);
  });

  $('.wanzi_popup_content .ok').click(function () {
    $('.wanzi_popup').fadeOut(100);
  });
    
});

