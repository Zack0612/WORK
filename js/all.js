/*!-------   20231024更新     --------*/

// menu-icon 動畫

$(".menu-icon").bind("click", function () {
  $(this).toggleClass("active");
  $(this).find("div").removeClass("no-animation");
});

$(function () {
  // ham icon 漢堡選單
  $(".menu-icon").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
  });

  $(".dropdown li a").click(function (e) {
    $(".dropdown").toggleClass("active");
  });

  // $("body").click(function (e) {
  //   $(".dropdown").removeClass("active");
  // });
});

$("body").click(function (e) {
  var container = $(".dropdown");
  var btn = $(".menu-icon");
  // 判斷點擊的地方不是DIV或按鈕
  if (
    !container.is(e.target) &&
    !container.has(e.target).length &&
    !btn.is(e.target) &&
    !btn.has(e.target).length
  ) {
    container.removeClass("active");
    $(".menu-icon").removeClass("active");
  }
});


  // 側邊選單
  $(".aside_toright").on("click", function (e) {
    $(".aside_toright").toggleClass("active");
    $(".aside").toggleClass("hide");
    $(".aside_bar").toggleClass("none");
  });
  

  // go 活動內容
  $(".gosec2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section2").offset().top }, 1000);
    $(".menu-icon").removeClass("active");
    $("html").removeClass("overhidden");
  });
  

