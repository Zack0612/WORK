$(function () {
  //捲動nav
  var scrollNavShow = function (showHeight) {
    $(window).scroll(function () {
        var _top = $(this).scrollTop();
        if (_top >= showHeight) {
            $("#down_nav").addClass("active");
        } else {
            $("#down_nav").removeClass("active");
        }
    });
  };
  //這個50是要讓選單秀出來的位置
  scrollNavShow(100);

  //goTop
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.goTop').fadeIn(500);
      $('.fixed-link').addClass('scroll')
    } else {
      $('.goTop').fadeOut(500);
      $('.fixed-link').removeClass('scroll')
    }
  });
  
  /** 藍色箭頭_緩慢移動 **/
  $('.LV1_Down_arrow').click(function () {
    $('html,body').animate({
      scrollTop: $('#LV2_news').offset().top-100
    }, 800);
  });
  
  /**  綠色箭頭_緩慢移動 **/
  $('.LV2_Down_arrow').click(function () {
    $('html,body').animate({
      scrollTop: $('#LV3_banner').offset().top
    }, 800);
  });
  
  /** 黃色箭頭_緩慢移動 **/
  $('.LV3_Down_arrow').click(function () {
    $('html,body').animate({
      scrollTop: $('#LV4_info').offset().top
    }, 800);
  });

})

