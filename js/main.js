

$(document).ready(function(){

    $("#btn_turn").click(function(){
        $('.btn_cy').toggleClass("todown");
        $('footer').toggleClass("active");
    });

    $(".btn_chang").click(function(){
        $('.jin1').toggleClass("none");
        $('.jin2').toggleClass("block");
    });


 //TOP_alin_MV pop
 $('.alin_MV_pop').click(function () {
    $('.alin_MV_test_pop_1').css('display', 'flex').fadeIn(100);
    $('.alin_MV_inner_pop_1').delay(100).fadeIn(500);

  });

  $('.alin_MV_btn_close').click(function () {
    $('.alin_MV_inner_pop_1').fadeOut(100);
    $('.alin_MV_test_pop_1').fadeOut(100);
    $(".youtube-video").attr('src', ''); //關閉連結設為空直
  });

    
});

