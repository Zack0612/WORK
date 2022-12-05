(function () {
  var slideContainer = $('.slide-container,.slide-container2');
  slideContainer.slick({
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000
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

  var slidecontainernews = $('.slide-containernews');
  slidecontainernews.slick({
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000
  });
 

})();


