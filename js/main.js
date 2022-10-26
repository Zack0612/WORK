
var animationObj = {};
var scrollTimer = null;
var scrollStage = 0;
var smoking = false;

$(document).ready(function () {

    initAnimation();
    initWheel();
    switchPage('#sectionIntro')

})

function checkIsPhone() {
    // testExp = new RegExp('Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile', 'i');

// console.log($(document).width());
    // return (testExp.test(navigator.userAgent))
    return ($(document).width()<960)
}


function initWheel() {
    $(window).on('scroll', function (e) {
            if (checkIsPhone()) {
                var scrollPosition = $(window).scrollTop();
                var index = 0;
                var section;

                $('section').each(function (i) {
                    if($(this).hasClass('hide')){
                        return
                    }

                    if($(this).offset().top - scrollPosition<300){
                        index = i;
                        section = $(this);
                    }
                    
                })

                console.log(index);
                if(!section.hasClass('played')){
                    section.addClass('played');
                    animationObj['ani'+(index+1)].restart();
                }

               
                

            }
        })

    $(window).on('mousewheel', function (e) {
        
        if (smoking) {
            return
        }

        if (checkIsPhone()) {
            return
        }

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

       
    });
}

function initAnimation() {
    var isPhone=false;
    $(window).resize(function () {
            var imgW = 600;
            var imgH = 344;
            var ww = $(document).width();
            var vh = $(document).height();
            var s;
            if (ww / vh > imgW / imgH) {
                s = ww / imgW;
            } else {
                s = vh / imgH;
            }

            TweenMax.set($('#smokeBg'), {scale: s,x: '-50%',y: '-50%'})


            if(ww<955&&isPhone==false){
                
                isPhone=true;
                console.log('isPhone: ', isPhone);
                console.log($($('.quick-menu-items.is-active').find('a').attr('href')).offset().top);

                var $body = (window.opera)? (document.compatMode == "CSS1Compat"? $('html'): $('body')): $('html,body');
                $body.animate({
                    scrollTop: $($('.quick-menu-items.is-active').find('a').attr('href')).offset().top
                }, 400);

            }
            
            if(ww>=955&&isPhone){
                isPhone= false
                console.log('isPhone: ', isPhone);
            }
        }).resize();

    $(".smoke_inner").animateSprite({
        fps: 20,
        loop: false,
        complete: function () {
            // use complete only when you set animations with 'loop: false'
            if ($('.smoke_inner').css('background-position') !== '0px 0px') {
                $('#smokeBg').css('display', 'none');
                smoking = false;
            }
        }
    });

  

}

function switchPage(page) {
    smokeAniMation();
    $(page).addClass('is-active').siblings('section').removeClass('is-active');
    var $body = (window.opera)
        ? (document.compatMode == "CSS1Compat"
            ? $('html')
            : $('body'))
        : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 400);

}

function smokeAniMation() {
    $(".smoke_inner").css('background-position', '0 0')
    $('#smokeBg').css('display', 'block');
    smoking = true;
    $(".smoke_inner").animateSprite('restart');
}



