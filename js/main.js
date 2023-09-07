$(function () {
  //scroll
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      var navH = $("#topBar").height();
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navH,
          },
          800
        );
        return false;
      }
    }
  });

  //goTop
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".goTop").fadeIn(500);
      $(".fixed-link").addClass("scroll");
    } else {
      $(".goTop").fadeOut(500);
      $(".fixed-link").removeClass("scroll");
    }
  });

  //topbar
  $(".hamburger,.icon-link").click(function () {
    $(".hamburger").toggleClass("click");
    $(".icon-link").toggleClass("click");
  });

  //新聞大tab
  $(".news_inner_tab").click(function () {
    var nowTab = $(this).index(); //定義一個變數，找到該元素的相對應位置
    $(this).addClass("now").siblings().removeClass("now"); //點道的那個按鈕部分，先添加now的樣式，.siblings()的意思就是除了元素本身之外的其他兄弟元素。
    $(".news_inner_con")
      .eq(nowTab)
      .addClass("now")
      .siblings()
      .removeClass("now");
  });

  //神鏡絕景_slick_pop_1
  $(".slick_btn_test_1").click(function () {
    $(".slick_test_pop_1").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_1").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/y5nkpGV1NBw?autoplay=0&loop=1&rel=0&playlist=y5nkpGV1NBw"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_1").fadeOut(100);
    $(".slick_test_pop_1").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //神鏡絕景_slick_pop_2
  $(".slick_btn_test_2").click(function () {
    $(".slick_test_pop_2").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_2").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/ahXy9UfXocE?autoplay=0&loop=1&rel=0&playlist=ahXy9UfXocE"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_2").fadeOut(100);
    $(".slick_test_pop_2").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //神鏡絕景_slick_pop_3
  $(".slick_btn_test_3").click(function () {
    $(".slick_test_pop_3").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_3").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/sFBTzrArX68?autoplay=0&loop=1&rel=0&playlist=sFBTzrArX68"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_3").fadeOut(100);
    $(".slick_test_pop_3").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //神鏡絕景_lick_pop_4
  $(".slick_btn_test_4").click(function () {
    $(".slick_test_pop_4").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_4").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/of5XT_TLhSc?autoplay=0&loop=1&rel=0&playlist=of5XT_TLhSc"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_4").fadeOut(100);
    $(".slick_test_pop_4").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //神鏡絕景_slick_pop_5

  $(".slick_btn_test_5").click(function () {
    $(".slick_test_pop_5").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_5").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/u6sz5ULxbsg?autoplay=0&loop=1&rel=0&playlist=u6sz5ULxbsg"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_5").fadeOut(100);
    $(".slick_test_pop_5").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //神鏡絕景_slick_pop_6

  $(".slick_btn_test_6").click(function () {
    $(".slick_test_pop_6").css("display", "flex").fadeIn(100);
    $(".slick_inner_pop_6").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/RFD7_-C8RP8?autoplay=0&loop=1&rel=0&playlist=RFD7_-C8RP8"
    ); //打開加入連結
  });

  $(".slick_btn_close").click(function () {
    $(".slick_inner_pop_6").fadeOut(100);
    $(".slick_test_pop_6").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });

  //<!--20210701_update_star-->
  //TOP_MV pop
  $(".MV_pop").click(function () {
    $(".MV_test_pop_1").css("display", "flex").fadeIn(100);
    $(".MV_inner_pop_1").delay(100).fadeIn(500);
    $(".youtube-video").attr(
      "src",
      "https://www.youtube.com/embed/FoDV1KmhmZ0?autoplay=0&loop=1&rel=0&playlist=FoDV1KmhmZ0"
    ); //打開加入連結
  });

  $(".MV_btn_close").click(function () {
    $(".MV_inner_pop_1").fadeOut(100);
    $(".MV_test_pop_1").fadeOut(100);
    $(".youtube-video").attr("src", ""); //關閉連結設為空直
  });
  //<!--20210701_update_end-->

  //艾肯BN-swiper
  certifySwiper = new Swiper("#certify .swiper-container", {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 210,
      modifier: 3,
      slideShadows: true,
    },

    watchSlidesProgress: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    autoplay: true,
    navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      //clickable :true,
    },
    on: {
      progress: function (progress) {
        for (i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          var slideProgress = this.slides[i].progress;
          modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          }
          translate = slideProgress * modify * 10 + "rem";
          scale = 1 - Math.abs(slideProgress) / 5;
          zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          slide.transform("translateX(" + translate + ") scale(" + scale + ")");
          slide.css("zIndex", zIndex);
          slide.css("opacity", 1);
          if (Math.abs(slideProgress) > 3) {
            slide.css("opacity", 0);
          }
        }
      },
      setTransition: function (transition) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          slide.transition(transition);
        }
      },
    },
  });

  // ham icon 漢堡選單
  $(function () {
    $(".ham-icon").click(function (e) {
      e.preventDefault();
      $(".dropdown").toggleClass("active");
      $(this).parents().parents().parents().toggleClass("black");
    });

    $(".dropdown li a").click(function (e) {
      $(".dropdown").toggleClass("active");
    });
  });

  $("body").click(function (e) {
    var container = $(".dropdown");
    var btn = $(".ham-icon");
    // 判斷點擊的地方不是DIV或按鈕
    if (
      !container.is(e.target) &&
      !container.has(e.target).length &&
      !btn.is(e.target) &&
      !btn.has(e.target).length
    ) {
      container.removeClass("active");
    }
  });
});
