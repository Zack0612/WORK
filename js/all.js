$(function () {
  // 顯示gotop
  $(".anchor").hide(); // 20230210 新增
  $(window).on("scroll", function (e) {
    e.preventDefault();
    if ($(window).scrollTop() >= 50) {
      $(".anchor").fadeIn(300);
    } else {
      $(".anchor").fadeOut(300);
    }
  });

  // right nav
  // go top
  // 向上捲動
  $(".goTop").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".goOrder").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });

  // go reserve
  // 向上捲動
  $(".go-reserve2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top }, 1000);
  });

  // right nav
  $(".btn-app").hover(
    function () {
      $(this).attr("src", "./image/btn_App_Store_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_App_Store.png");
    }
  );
  $(".btn-google").hover(
    function () {
      $(this).attr("src", "./image/btn_Google_Play_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_Google_Play.png");
    }
  );
  $(".btn-inquiry").hover(
    function () {
      $(this).attr("src", "./image/btn_Inquire_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_Inquire.png");
    }
  );
  $(".btn-fb").hover(
    function () {
      $(this).attr("src", "./image/btn_FB_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_FB.png");
    }
  );
  $(".btn-ig").hover(
    function () {
      $(this).attr("src", "./image/btn_IG_hover.png");
    },
    function () {
      $(this).attr("src", "./image/btn_IG.png");
    }
  );
});




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



  // go 活動內容
  $(".gosec2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section2").offset().top }, 1000);
    $(".menu-icon").removeClass("active");
  });
  

  $(".aside_btnsp").on("click", function (e) {
    $(".menu-icon").removeClass("active");
  });



  $(".friend-copy").click(function (e) {
    e.preventDefault();
    $(".black").toggleClass("active");
    $(".content4").toggleClass("brightness");
  });

  $(".reward-select").click(function (e) {
    e.preventDefault();
    $(".black2").toggleClass("active");
    $(".content5").toggleClass("brightness");
  });

  
  $(".cat-send").click(function (e) {
    e.preventDefault();
    $(".cat-gift2").toggleClass("active");
    $(".cat-gift1").toggleClass("none");
  });


    $(".pop-gift").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("popgift-check");
    });



