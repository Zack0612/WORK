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

// 翻轉禮物
$(document).ready(function () {
  $(".gift01").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift02").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift03").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift04").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift05").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift06").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });
  $(".gift07").on("mouseenter", function () {
    $(this).toggleClass("rotateY360");
  });



});

// 壁紙的所有點擊事件
document.addEventListener("DOMContentLoaded", function () {
  var events = [
    "event01",
    "event02",
    "event03",
    "event04",
    "event05",
    "event06",
  ];

  var step1 = document.querySelector(".step1");
  var step2 = document.querySelector(".step2");
  var step3 = document.querySelector(".step3");
  var closeWallpaperBtn = document.querySelector(".colse-wallpaper");
  var openStep2Btn = document.querySelector(".open-step2");
  var openStep1Btn = document.querySelector(".open-step1");
  var openStep3Btn = document.querySelector(".open-step3");
  var dragContainer = document.querySelector("#drag-container");
  var wallpaperContent = document.querySelector(".wallpaper-content");

  // 點擊事件01
  for (var i = 0; i < events.length; i++) {
    (function (eventId) {
      var event = document.getElementById(events[eventId]);
      event.addEventListener("click", function (event) {
        event.preventDefault(); // 阻止預設行為
        var wallpaperContent = document.querySelector(".wallpaper-content");
        var eventPapper = document.getElementById(events[eventId] + "-papper");

        wallpaperContent.style.display = "flex";
        eventPapper.style.display = "block";
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        dragContainer.style.display = "none";

<<<<<<< HEAD
        // 修改 .section2 的 margin-bottom 為 11.5rem
        x = $(window).width();
      if (x  < 780) {
        var section2 = document.querySelector(".section2");
        section2.style.marginBottom = "11.5rem";
        } else
        {
          var section2 = document.querySelector(".section2");
          section2.style.marginBottom = "7.5rem";
        }

=======
        // 修改 .section2 的 margin-bottom 為 13rem
        var section2 = document.querySelector(".section2");
        section2.style.marginBottom = "11.5rem";
>>>>>>> 02a862d2f8a97b99c3c11c7dbeb234093e55ade6
      });
    })(i);
  }

  // 關閉所有事件
  closeWallpaperBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    var wallpaperContent = document.querySelector(".wallpaper-content");

    wallpaperContent.style.display = "none";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    dragContainer.style.display = "block";

    // 隱藏之前開啟的事件壁紙
    for (var i = 0; i < events.length; i++) {
      var eventPapper = document.getElementById(events[i] + "-papper");
      eventPapper.style.display = "none";
    }
    // 修改 .section2 的 margin-bottom 回原來的值 (9rem)
    var section2 = document.querySelector(".section2");
    section2.style.marginBottom = "9rem";
  });

  // 開啟步驟2，關閉步驟1
  openStep2Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "none";
    step2.style.display = "block";
    step3.style.display = "none";
  });

  // 開啟步驟1，關閉步驟2
  openStep1Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
  });

  // 開啟步驟3，關閉步驟2
  openStep3Btn.addEventListener("click", function (event) {
    event.preventDefault(); // 阻止預設行為
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "block";
  });
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

// 抽卡滑入效果
$(document).ready(function () {
  $(".sec4-card1").hover(
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02-off.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03-off.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04-off.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05-off.png");
    },
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05.png");
    }
  );

  $(".sec4-card2").hover(
    function () {
      $(".sec4-card1").attr("src", "./image/pc_card_01-off.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03-off.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04-off.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05-off.png");
    },
    function () {
      $(".sec4-card1").attr("src", "./image/pc_card_01.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05.png");
    }
  );

  $(".sec4-card3").hover(
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02-off.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01-off.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04-off.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05-off.png");
    },
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05.png");
    }
  );
  $(".sec4-card4").hover(
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02-off.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03-off.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01-off.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05-off.png");
    },
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01.png");
      $(".sec4-card5").attr("src", "./image/pc_card_05.png");
    }
  );

  $(".sec4-card5").hover(
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02-off.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03-off.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01-off.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04-off.png");
    },
    function () {
      $(".sec4-card2").attr("src", "./image/pc_card_02.png");
      $(".sec4-card3").attr("src", "./image/pc_card_03.png");
      $(".sec4-card1").attr("src", "./image/pc_card_01.png");
      $(".sec4-card4").attr("src", "./image/pc_card_04.png");
    }
  );

  $(".pane_01").hover(
    function () {
      $(".pane_01").attr("src", "./image/pane_01hover.png");
    },
    function () {
      $(".pane_01").attr("src", "./image/pane_01.png");
    }
  );

  $(".pane_02").hover(
    function () {
      $(".pane_02").attr("src", "./image/pane_02hover.png");
    },
    function () {
      $(".pane_02").attr("src", "./image/pane_02.png");
    }
  );
  $(".pane_03").hover(
    function () {
      $(".pane_03").attr("src", "./image/pane_03hover.png");
    },
    function () {
      $(".pane_03").attr("src", "./image/pane_03.png");
    }
  );
  $(".pane_04").hover(
    function () {
      $(".pane_04").attr("src", "./image/pane_04hover.png");
    },
    function () {
      $(".pane_04").attr("src", "./image/pane_04.png");
    }
  );
  $(".pane_05").hover(
    function () {
      $(".pane_05").attr("src", "./image/pane_05hover.png");
    },
    function () {
      $(".pane_05").attr("src", "./image/pane_05.png");
    }
  );
  $(".pane_06").hover(
    function () {
      $(".pane_06").attr("src", "./image/pane_06hover.png");
    },
    function () {
      $(".pane_06").attr("src", "./image/pane_06.png");
    }
  );
  //MV pop
  $('.mvpop').click(function () {

    $(".youtube-video").attr('src',
      'https://www.youtube.com/embed/Sr1sjU0nsJ8'
    ); 
  });

  $('.popup-close,.cat-close').click(function () {
    $(".youtube-video").attr('src', ''); 
    $(".content4").removeClass("brightness");
    $(".black").removeClass("active");
    $(".black2").removeClass("active");
    $(".content5").removeClass("brightness");
    $(".cat-gift1").removeClass("none");
    $(".cat-gift2").removeClass("active");
    $("html").removeClass("overhidden");
  });



  

});



  // go reserve
 
  $(".goindex").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".main").offset().top }, 1000);
  });
  $(".gosec1").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section1").offset().top-100 }, 1000);
  });
  $(".gosec2").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section2").offset().top-100 }, 1000);
  });
  $(".gosec3").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section3").offset().top-100 }, 1000);
  });
  $(".gosec4").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: $(".section4").offset().top-100 }, 1000);
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



