// JavaScript Document

    $(".site_bt4").click(function () {
        $(this).toggleClass("on");
        if ($(".site_bt4").hasClass('on')) {
            audio.play();
        } else {
            audio.pause();
        }
    });

  //youtube
    $(".play_btn").click(function(){
            audio.pause();
            $(".site_bt4").removeClass('on');
    });

//

    //===============================lightbox===============================
    $('.fancybox').fancybox();



 

