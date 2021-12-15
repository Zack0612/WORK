// 主內 html 列表
import { infoList } from './info.js';

// ---------- 網址 hash 改變時執行 start ---------- //
window.addEventListener('hashchange', function (event) {
    const hash = window.location.hash;
    if (hash) {
        // loading
        $("#bacc").fadeIn(300);
        $("#bacc").fadeOut(500);
        const newHash = hash.replace(/^.*#/, '');
        const info = infoList[newHash];
        // 網址帶有 hash 時, 載入主內容
        if (info) {
            $('#info').html(info);
            $(`[data-id=${newHash}`).children().css('opacity', '1');
            $(`[data-id=${newHash}`).siblings().children('span').removeAttr("style");
            $('.dwn,#info').show();
            $('.content').css('padding-bottom', '1080px');
            $('.slogan').css('top', '16%');
            $('.video').addClass('video-width');
            $('.mubx').css('top', '58%');
            runEffect(hash);
        } else {
            removePathname();
            closeInfo(hash);
        }
        // 關閉主內頁按鈕
        $('.plant_box .close,.w1200 .close,.w1200 .close-mobile,.imubx-close').click(() => {
            // loading
            $("#bacc").fadeIn(300);
            $("#bacc").fadeOut(500);
            removePathname();
            closeInfo(hash);
        })
    }
})
// ---------- 網址 hash 改變時執行 end ---------- //

// ---------- 網頁內容載入完成時執行 start ---------- //
window.onload = function () {
    const hash = window.location.hash;
    if (hash) {
        // loading
        $("#bacc").fadeIn(300);
        $("#bacc").fadeOut(500);
        const newHash = hash.replace(/^.*#/, '');
        const info = infoList[newHash];
        // 網址帶有 hash 時, 載入主內容
        if (info) {
            $('#info').html(info);
            $(`[data-id=${newHash}`).children().css('opacity', '1');
            $(`[data-id=${newHash}`).siblings().children('span').removeAttr("style");
            $('.dwn,#info').show();
            $('.content').css('padding-bottom', '1080px');
            $('.slogan').css('top', '16%');
            $('.video').addClass('video-width');
            $('.mubx').css('top', '58%');
            runEffect(hash);
        } else {
            removePathname();
            closeInfo(hash);
        }
        // 關閉主內頁按鈕
        $('.plant_box .close,.w1200 .close,.w1200 .close-mobile,.imubx-close').click(() => {
            // loading
            $("#bacc").fadeIn(300);
            $("#bacc").fadeOut(500);
            closeInfo(hash);
        })
    }

    // ---------- 手機開合選單 start ---------- //
    const cop1 = document.querySelector('.cop1');
    const cop2 = document.querySelector('.cop2');
    const topLink = document.querySelector('.top-link');
    cop1.addEventListener('click', () => {
        cop1.style = 'display:none';
        cop2.style = 'display:block';
        topLink.style = 'right:0';
    }, false)
    cop2.addEventListener('click', () => {
        cop2.style = 'display:none';
        cop1.style = 'display:block';
        topLink.style = 'right:-160px';
        setTimeout(() => {
            topLink.removeAttribute('style');
        }, 600);
    }, false)
    // ---------- 手機開合選單 end ---------- //

}
// ---------- 網頁內容載入完成時執行 end ---------- //

function runEffect(hash) {
    console.log('hash', hash)
    console.log('hash match', hash.match('2_4'));
    if (hash.match('2_4')) {
        $('html,body').animate({ scrollTop: $('.tk_box').offset().top - 20 }, 300);
    } else {
        $('html,body').animate({ scrollTop: $('.txt').offset().top - 50 }, 300);
    }
    // 手機可
    // var swiper3 = new Swiper(".swiper3", {
    //     effect: "fade",
    //     fadeEffect: { crossFade: true },
    //     spaceBetween: 10,


    //     breakpoints: {
    //         600: {
    //             // mobile
    //             watchSlidesProgress: true,
    //             // mobile
    //             freeMode: true,
    //         }
    //     }
    // });

    // var swiper2 = new Swiper('.swiper-container-info2-2', {
    //     slidesPerView: 4,
    //     spaceBetween: 5,

    //     // mobile
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     // mobile
    //     thumbs: {
    //         swiper: swiper3,
    //     },

    //     breakpoints: {
    //         600: {
    //             slidesPerView: 1,
    //         }
    //     }
    // });

    $('.tk_box').each(function () {
        var _this = $(this);
        var Index = 0;
        var img2 = _this.find('li').length;
        $(".prev1").click(function () {
            Index = (Index > 0) ? (--Index) : (img2 - 1);
            changeTo3(Index);
        });
        $(".next1").click(function () {
            Index = (Index < img2 - 1) ? (++Index) : 0;
            changeTo3(Index);
        });
        function changeTo3(num) {
            _this.find("li").eq(num).show().siblings().hide();
        }
    })

    $('.sk1').click(function () {
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk1 img:nth-child(1)').fadeOut(1);
        $('.sk1 img:nth-child(2)').fadeIn(1);
        $('.rc1').fadeIn();
        $('.rc1').css('display', 'flex');
    });
    $('.sk2').click(function () {
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk2 img:nth-child(1)').fadeOut(1);
        $('.sk2 img:nth-child(2)').fadeIn(1);
        $('.rc2').fadeIn();
        $('.rc2').css('display', 'flex');
    });
    $('.sk3').click(function () {
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk3 img:nth-child(1)').fadeOut(1);
        $('.sk3 img:nth-child(2)').fadeIn(1);
        $('.rc3').fadeIn();
        $('.rc3').css('display', 'flex');
    });
    $('.sk4').click(function () {
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk4 img:nth-child(1)').fadeOut(1);
        $('.sk4 img:nth-child(2)').fadeIn(1);
        $('.rc4').fadeIn();
        $('.rc4').css('display', 'flex');
    });


    // ---------- 全新職業 start ---------- //
    function jobInfo() {
        $('.zf_btn10 a').hover(function () {
            var i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.plant_count10 .p_c').eq(i).show().siblings('.plant_count10 .p_c').hide();
        })
    }
    jobInfo();
    // ---------- 全新職業 end ---------- //

    // ---------- 門派/技能影片 start ---------- //
    let currentVideo;
    $(".v_box a").mouseenter(function () {
        $(this).addClass('on').siblings('a').removeClass('on');
    })
    $(".v_box .a1").click(function () {
        $('.alin_MV_box #a1').css('display', 'block')
        $('.alin_MV_box #a2').css('display', 'none')
        $('.alin_MV_test_pop_1').fadeIn();
        $('.alin_MV_test_pop_1').css('display', 'flex')
        currentVideo = 'a1';
        let iframe = $(`iframe#${currentVideo}`)[0].contentWindow;
        // 開啟影片
        iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    })
    $(".v_box .a2").click(function () {
        $('.alin_MV_box #a1').css('display', 'none')
        $('.alin_MV_box #a2').css('display', 'block')
        $('.alin_MV_test_pop_1').fadeIn();
        $('.alin_MV_test_pop_1').css('display', 'flex')
        currentVideo = 'a2';
        let iframe = $(`iframe#${currentVideo}`)[0].contentWindow;
        // 開啟影片
        iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    })
    $(".alin_MV_btn_close").click(function () {
        // 關閉影片
        let iframe = $(`iframe#${currentVideo}`)[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        $('.alin_MV_test_pop_1').fadeOut();
        $('.alin_MV_test_pop_1').css('display', 'none')
    })
    // ---------- 門派/技能影片 end ---------- //

    // ---------- update_2_1 新劇情 start ---------- //
    $("#kmubx .kmu1_1").click(function () {
        $(this).addClass('kactive').siblings().removeClass('kactive');
        $('.ph2-1').css('opacity', '100');
        $('.ph2-2, .ph2-3').css('opacity', '0');
        $('.ph2-1').addClass('phx2');
        $('.ph2-2, .ph2-3').removeClass('phx2');
    })
    $("#kmubx .kmu1_2").click(function () {
        $(this).addClass('kactive').siblings().removeClass('kactive');
        $('.ph2-2').css('opacity', '100');
        $('.ph2-1, .ph2-3').css('opacity', '0');
        $('.ph2-2').addClass('phx2');
        $('.ph2-1, .ph2-3').removeClass('phx2');
    })
    $("#kmubx .kmu1_3").click(function () {
        $(this).addClass('kactive').siblings().removeClass('kactive');
        $('.ph2-3').css('opacity', '100');
        $('.ph2-1, .ph2-2').css('opacity', '0');
        $('.ph2-3').addClass('phx2');
        $('.ph2-1, .ph2-2').removeClass('phx2');
    })
    // ---------- update_2_1 新劇情 end ---------- //

    // ---------- update_2_3 新秘境 start ---------- //
    $("#kmubx .kmu1_4").click(function () {
        $(this).addClass('kactive').siblings().removeClass('kactive');
        $('.ph2-4').css('opacity', '100');
        $('.ph2-5').css('opacity', '0');
        $('.ph2-4').addClass('phx2');
        $('.ph2-5').removeClass('phx2');
    })
    $("#kmubx .kmu1_5").click(function () {
        $(this).addClass('kactive').siblings().removeClass('kactive');
        $('.ph2-5').css('opacity', '100');
        $('.ph2-4').css('opacity', '0');
        $('.ph2-5').addClass('phx2');
        $('.ph2-4').removeClass('phx2');
    })
    // ---------- update_2_3 新秘境 end ---------- //

}

// ---------- 關閉主內頁 start ---------- //
function closeInfo(hash) {
    $('html,body').animate({ scrollTop: 0 }, 300);
    $('.dwn,#info').css('display', '');
    const newHash = hash.replace(/^.*#/, '');
    // $(`[data-id=${newHash}`).siblings().children('span').removeAttr("style");
    $('.mua').children('span').removeAttr("style");
    $('.content').removeAttr("style");
    $('.slogan').removeAttr("style");
    $('.video').removeClass('video-width');
    $('.mubx').removeAttr("style");
}
// ---------- 關閉主內頁 end ---------- //

// ---------- 移除 pathname start ---------- //
function removePathname() {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}
// ---------- 移除 pathname end ---------- //
