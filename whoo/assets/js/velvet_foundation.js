$(function() {
  var $window = $(window);
  /**
   * 動態
   **/
  var wow = new WOW(
    {
      boxClass:     'animated',      // animated element css class (default is wow)
      animateClass: 'show', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
 
 
  /**
   * 判斷是不是手機版
  **/
  var isMobile;
  isMobile = false;
  if ($window.width() <= 768){
    isMobile = true;
  }

  // 關閉canvas背景動態
  if (isMobile != true && $('.canvas_bg').length !== 0){
    canvasBg();
  }
 

  /**
   * 完美底妝3步驟 輪播
   **/
  // 手機版輪播
  if (isMobile == true && $('.threesteps_selectors').length !== 0){
    var slide = new Slide({
      indicatorSelectors: '.threesteps_selectors .threesteps_indicator .threesteps_indicator_item',
      itemSelectors: '.threesteps_container .threesteps_box .threesteps_item',
      targetSelectors: '.threesteps_container .threesteps_box',
      prevSelectors: '.threesteps_arrow_prev',
      nextSelectors: '.threesteps_arrow_next',
      // mode: 'opacity',
      duration: 5000,
      isAutoPlay: true,
      isTouch: true
    });
  }

  // 手機版關閉動態
  if (isMobile == true){
    $('.threesteps_item div').removeClass('animated fadeInUp');
    $('.threesteps_item img').removeClass('animated fadeInUp');
    $('.threesteps_item a').removeClass('animated');
  }
  

  /**
   * 立即預約 動態
   **/
  if (isMobile != true && $('.activity_wrap').length !== 0){
    $window.on('scroll', function() {
      var scrollTop = $window.scrollTop();
      var windowH = $window.height();
  
      if(!$('.activity_wrap').hasClass('target')){
        var bottom_of_object = $('.activity_wrap').offset().top + $('.activity_wrap').height() / 2;
        var bottom_of_window = scrollTop + windowH;
  
        // 到指定位置時
        if (bottom_of_window >= bottom_of_object) {
          $('.activity_wrap').addClass('target');
        }
      }
    });
    $window.trigger('scroll');
  
    var before = $(window).scrollTop();
  
    $(window).on('scroll.move', function() {
      if ($('.activity_wrap').hasClass('target')){
        //滾動距離
        var after = $(window).scrollTop();
        var distance = (after - before) / 8;
    
        distanceMax = Math.floor(distance);
    
        $('.activity_deco1').attr("style", "transform: translateY(" + distanceMax / 2 + "px)");
        $('.activity_deco2').attr("style", "transform: translateY(" + distanceMax / 2 + "px)");
      }
    });
    $window.trigger('scroll.move');
  }

  // 查看專櫃活動日期與名額
  $('.activity_time_btn').click(function(e) {
    e.preventDefault();
    $('.activity_time_popup').fadeIn();
  });


  /** 
   * 產品說明彈跳視窗
  **/
  var $pop = $('.popupbox');
  $('.threesteps_detail').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $threestepsItem = $this.parents('.threesteps_item');

    var productI = $threestepsItem.index();

    $pop.fadeIn();
    $('.popupbox .popup_product').eq(productI).fadeIn();
    $('.popupbox .popup_product').eq(productI).addClass('active');
  });

  // 彈跳視窗關閉
  var $popClose = $pop.find($('.popupclose'));

  $popClose.click(function(e) {
    e.preventDefault();

    $('.popup_product').fadeOut();
    $pop.fadeOut();
  });

  $('.close_thank_popup').click(function(e) {
    e.preventDefault();

    $('.popup').fadeOut();
  });
  

  /** 
   * 上傳圖片
  **/
  // if ($('.upload_btn').length !== 0 ){
  //   var input = document.querySelector('.uploadbtn');
  //   var $successMessage = $('.upload_box p');

  //   // console.log(input);
  //   // console.log(preview);

  //   input.addEventListener('change', updateImageBox);

  //   function updateImageBox() {
  //     var curFiles = input.files;

  //     if (curFiles.length !== 0){
  //       // while(preview.firstChild) {
  //       //   preview.removeChild(preview.firstChild);
  //       // }

  //       // 顯示上傳成功
  //       $successMessage.show();

  //       // for(var file of curFiles) {
  //       //   if(validFileType(file)) {
  //       //     var image = document.createElement('img');
  //       //     image.src = URL.createObjectURL(file);

  //       //     // preview.appendChild(image);
  //       //   }
  //       // }
  //     }
  //   }
  //   var fileTypes = [
  //     "image/jpeg",
  //     "image/pjpeg",
  //     "image/png"
  //   ];

  //   function validFileType(file) {
  //     return fileTypes.includes(file.type);
  //   }
  // }
});
