$(function () {

    var distance;
    var timer;

    //common pages
    // fullpage =============================================
    var myFullpage = new fullpage('#wrapper', {


        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        lazyLoad: true,
        scrollBar: true

  })


    autoScroll()
    function autoScroll() {
        timer = setTimeout(function () {
            fullpage_api.moveTo('secondPage', 1);
        }, 3000);
        distance = setTimeout(function () {
            fullpage_api.moveTo('3rdPage', 1);
        }, 5000);

       // 滑鼠滾輪事件
        document.documentElement.onmousewheel = function (event) {
            if (event.deltaY > 0) {
                clearTimeout(timer);
                clearTimeout(distance);
            }
        }
    }

    $(document).on('click', '#fp-nav', function(){
            clearTimeout(timer);
            clearTimeout(distance);
    });


   // $(window).load(
   //      function(){
   //      timer = setTimeout(function(){
   //          fullpage_api.moveTo('secondPage', 1);
   //      },5000);
   //      distance = setTimeout(function(){
   //          fullpage_api.moveTo('3rdPage', 1);
   //      },15000);


   //  window.addEventListener('scroll', function () {
   //      if (window.scrollY > 0) {
   //          delete timer; 
   //          delete distance; 
   //      }
   //  })  

   //  })


    //adding the action to the button
    $(document).on('click', '#moveTo1', function(){
      fullpage_api.moveTo('firstPage', 1);
    });
    $(document).on('click', '#moveTo3', function(){
      fullpage_api.moveTo('3rdPage', 1);
    });
    $(document).on('click', '#moveTo2', function(){
      fullpage_api.moveTo('secondPage', 1);
    });
    $(document).on('click', '#moveTo4', function(){
      fullpage_api.moveTo('4thPage', 1);
    });

    $(document).on('click', '#gotop', function(){
      fullpage_api.moveTo('firstPage', 1);
    });



 })

