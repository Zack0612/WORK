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
        }, 5000);
        distance = setTimeout(function () {
            fullpage_api.moveTo('3rdPage', 1);
        }, 15000);

       // 滑鼠滾輪事件
        document.documentElement.onmousewheel = function (event) {
            if (event.deltaY > 0) {
                clearTimeout(timer);
                clearTimeout(distance);
            }
        }
    }

    let startY;
    document.addEventListener("touchstart", function (event) {
        event.preventDefault();
        startY = event.changedTouches[0].pageY;
    }, {passive: false})

    let moveEndY;
    document.addEventListener("touchmove", function (event) {
        event.preventDefault();
        moveEndY = event.changedTouches[0].pageY;
        let Y = moveEndY - startY;

        // 手指往上滑,下滑頁面時停止自動輪播
        if (Y < 0) {
            clearTimeout(timer);
            clearTimeout(distance);
        }
    }, {passive: false})


    //adding the action to the button
    $(document).on('click', '#moveTo1', function(){
      fullpage_api.moveTo('firstPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });
    $(document).on('click', '#moveTo3', function(){
      fullpage_api.moveTo('3rdPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });
    $(document).on('click', '#moveTo2', function(){
      fullpage_api.moveTo('secondPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });
    $(document).on('click', '#moveTo4', function(){
      fullpage_api.moveTo('4thPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });

    $(document).on('click', '#gotop', function(){
      fullpage_api.moveTo('firstPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });

    $(document).on('click', '#logo', function(){
      fullpage_api.moveTo('4thPage', 1);
       clearTimeout(timer);
       clearTimeout(distance);
    });
    $(document).on('click', '#scroll', function(){
      fullpage_api.moveTo('secondPage', 1);
      clearTimeout(timer);
      clearTimeout(distance);
    });

 })


