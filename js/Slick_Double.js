(function () {
  var slideContainer = $('.slide-container');
  slideContainer.slick({
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000
  });

  var slideContainer = $('.slide-container2');
  slideContainer.slick({
    prevArrow: '<button class="slide-arrow prev-arrow2"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dotsClass: 'slick-dots',
    arrows: false,
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: false,
        mobileFirst: true,
      }
    }, {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
      }
    }
  ]
  });

  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card img').fadeIn(200);

  // On before slide change
  slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });

  // On after slide change
  slideContainer.on('afterChange', function (event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });

  var slidecontainernews = $('.NEWS_content_zone');
  slidecontainernews.slick({
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dotsClass: 'slick-dots',
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: false,
        mobileFirst: true,
      }
    }, {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
      }   
    }
  ]
  });
  
  var slidecontainernews = $('.art_pho');
  slidecontainernews.slick({
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dotsClass: 'slick-dots',
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: true,
        dots: false,
        mobileFirst: true,
      }
    }, {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        arrows: false,
        dots: true,
      }   
    }
  ]
  });

  $slider.slick(slidecontainernews);

})();


