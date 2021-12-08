window.addEventListener('hashchange', function (event) {
    // console.log('event', event)
    const hash = window.location.hash;
    console.log('onload hash', hash)
    if (hash) {
        // loading
        $("#bacc").fadeIn(300);
        $("#bacc").fadeOut(500);
        console.log('hash1')
        const newHash = hash.replace(/^.*#/, '')
        const info = getInfo(newHash);
        if (info !== '') {
            $('#info').html(info);
            $(`[data-id=${newHash}`).children().css('opacity', '1');
            $('.dwn,#info').show();
            $('.content').css('padding-bottom', '1080px');
            $('.slogan').css('top', '16%');
            $('.video').addClass('video-width');
            $('.mubx').css('top', '58%');
            runEffect();
        } else {
            removePathname();
        }
        // 關閉主內頁按鈕
        $('.plant_box .close,.w1200 .close').click(() => {
            // loading
            $("#bacc").fadeIn(300);
            $("#bacc").fadeOut(500);
            removePathname();
            closeInfo(hash);
        })
    }
})

window.onload = function () {
    const hash = window.location.hash;
    console.log('onload hash', hash)
    if (hash) {
        console.log('onload hash', hash)
        // loading
        $("#bacc").fadeIn(300);
        $("#bacc").fadeOut(500);
        console.log('hash2')
        const newHash = hash.replace(/^.*#/, '')
        const info = getInfo(newHash);
        if (info !== '') {
            $('#info').html(info);
            $(`[data-id=${newHash}`).children().css('opacity', '1');
            $('.dwn,#info').show();
            $('.content').css('padding-bottom', '1080px');
            $('.slogan').css('top', '16%');
            $('.video').addClass('video-width');
            $('.mubx').css('top', '58%');
            runEffect();
        } else {
            removePathname();
        }
        // 關閉主內頁按鈕
        $('.plant_box .close,.w1200 .close').click(() => {
            // loading
            $("#bacc").fadeIn(300);
            $("#bacc").fadeOut(500);
            closeInfo(hash);
        })
    }

    // 手機選單
    const cop1 = document.querySelector('.cop1');
    const cop2 = document.querySelector('.cop2');
    const topLink = document.querySelector('.top-link');
    cop1.addEventListener('click', () => {
        console.log('cop1')
        cop1.style = 'display:none';
        cop2.style = 'display:block';
        topLink.style = 'right:0';
    }, false)
    cop2.addEventListener('click', () => {
        console.log('cop2')
        cop2.style = 'display:none';
        cop1.style = 'display:block';
        topLink.style = 'right:-160px';
        setTimeout(() => {
            topLink.removeAttribute('style');
        }, 600);
    }, false)
}

function runEffect() {
    $('html,body').animate({ scrollTop: $('.txt').offset().top - 50 }, 300);
    console.log('runSwiper')
    // 初始化輪播
    var swiper = new Swiper('.swiper-container', {
        /*speed: 500,*/
        slidesPerView: '3',
        spaceBetween: 25,/**/
        /* loop:true,
         centeredSlides:true,
         autoplay : {
           delay:2000,
         },*/
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        /*  pagination: {
            el:'.swiper-pagination',
            clickable: true,
          },*/
        breakpoints: {
            600: {
                slidesPerView: 1,
            }
        },
    });

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
            var goLeft = num * 400;
            _this.find("li").eq(num).show().siblings().hide();
        }
    })

    $('.mu1 span').css('opacity',1);
    $('.sk1').click(function(){
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk1 img:nth-child(1)').fadeOut(1);
        $('.sk1 img:nth-child(2)').fadeIn(1);
        $('.rc1').fadeIn();
        $('.rc1').css('display','flex');
    });
    $('.sk2').click(function(){
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk2 img:nth-child(1)').fadeOut(1);
        $('.sk2 img:nth-child(2)').fadeIn(1);
        $('.rc2').fadeIn();
        $('.rc2').css('display','flex');
    });
    $('.sk3').click(function(){
        $('.rcobx div,.swiper-slide img').removeAttr('style');
        $('.sk3 img:nth-child(1)').fadeOut(1);
        $('.sk3 img:nth-child(2)').fadeIn(1);
        $('.rc3').fadeIn();
        $('.rc3').css('display','flex');
    });


    // 全新職業
    function jobInfo() {
        $('.zf_btn10 a').hover(function () {
            var i = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.plant_count10 .p_c').eq(i).show().siblings('.plant_count10 .p_c').hide();
        })
    }
    jobInfo();
    // 門派/技能影片
    $(".v_box a").mouseenter(function () {
        $(this).addClass('on').siblings('a').removeClass('on');
    })
    $(".v_box .a1").click(function () {
        $('.alin_MV_box #a1').css('display', 'block')
        $('.alin_MV_box #a2').css('display', 'none')
        $('.alin_MV_test_pop_1').fadeIn();
        $('.alin_MV_test_pop_1').css('display', 'flex')
    })
    $(".v_box .a2").click(function () {
        $('.alin_MV_box #a1').css('display', 'none')
        $('.alin_MV_box #a2').css('display', 'block')
        $('.alin_MV_test_pop_1').fadeIn();
        $('.alin_MV_test_pop_1').css('display', 'flex')
    })
    $(".alin_MV_btn_close").click(function () {
        $('.alin_MV_test_pop_1').fadeOut();
        $('.alin_MV_test_pop_1').css('display', 'none')
    })
}

// 關閉主內頁
function closeInfo(hash) {
    $('html,body').animate({ scrollTop: 0 }, 300);
    $('.dwn,#info').css('display', '');
    const newHash = hash.replace(/^.*#/, '');
    console.log('newHash', newHash)
    $(`[data-id=${newHash}`).siblings().children('span').removeAttr("style");
    $(`[data-id=${newHash}`).children('span').removeAttr("style");
    $('.content').removeAttr("style");
    $('.slogan').removeAttr("style");
    $('.video').removeClass('video-width');
    $('.mubx').removeAttr("style");
}

// 移除pathname
function removePathname() {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}

function getInfo(hash) {
    switch (hash) {
        case 'update_1_1':
            return update_1_1;
            break;
        case 'update_1_2':
            return update_1_2;
            break;
        case 'update_1_3':
            return update_1_3;
            break;
        case 'update_1_4':
            return update_1_4;
            break;
        default:
            closeInfo(hash)
            return '';
            break;
    }
}


const update_1_1 = `<div class="txt t_1"></div>
<!-- 選單 -->
<div id="imubx">
    <a href="#update_1_1" data-id="update_1_1" class="mu2_0"><span></span></a>
    <a href="#update_1_2" data-id="update_1_2" class="mu2_1_1"><span></span></a>
    <a href="#update_1_3" data-id="update_1_3" class="mu2_1_2"><span></span></a>
    <a href="#update_1_4" data-id="update_1_4" class="mu2_1_3"><span></span></a>
</div>
<!-- 全新門派 -->
<div class="w1200">
    <div class="close"></div>
    <div class="name_lk name_bg"></div>
    <div class="bg_img10"></div>
    <div class="peo_img_1 peo_bg"></div>
    <div class="plant_box">
        <div class="close"></div>
        <img src="images/ph4.png" class="yf_1">
    </div>
    <div class="btn_box">
        <div class="zf_btn zf_btn10">
            <a href="javascript:;" class="zf1 on"></a>
            <a href="javascript:;" class="zf2"></a>
        </div>
        <div class="plant_count plant_count10">
            <div class="p_c" style="display:block">
                <span class="span1">五音事桑【法攻】</span>
                <span class="span_line1"></span>
                <span class="span2">鈴音指揮</span>
                <span class="span_line2"></span>
                <span class="span3">
                    鈴客攻擊專精，觀植株聆聽仙樂快速生長獲得靈感，總結出以音律調轉自然之力的法訣，催生千萬藤蘿葉脈進行攻擊，亦能勾連周圍的草木靈精，爆發出強大戰力。</i>
                </span>
                <span class="span_line3"></span>
            </div>
            <div class="p_c">
                <span class="span1">素脈真藏【輔助】</span>
                <span class="span_line1"></span>
                <span class="span2">蓄療薄發</span>
                <span class="span_line2"></span>
                <span class="span3">
                    鈴客治療專精，以祖師傳下的草藥典籍為基，強化對經絡肌體的認知，修習丹黃之術，通過聚斂靈草異木中的自然生機，達到治癒的效果。
                </span>
                <span class="span_line3"></span>
            </div>

        </div>
    </div>
    <!-- 影片按鈕-->
    <div class="v_box">
        <a href="javascript:;" class="a1 on video_Btn" data="lk_v1">
            <div class="plant_icon">門派影片</div>
            <div class="v_btn">
                <img src="images/play.png">
            </div>
            <div class="a1_img1 lk_mp"></div>
        </a>
        <a href="javascript:;" class="a2 video_Btn" data="lk_v2">
            <div class="plant_icon">技能影片</div>
            <div class="v_btn on">
                <img src="images/play.png">
            </div>
            <div class="a2_img1 lk_jn"></div>
        </a>
    </div>
</div>
<!-- 門派/技能影片 -->
<div class="alin_MV_test_pop_1">
    <div class="alin_MV_inner_pop_1">
        <div class="alin_MV_btn_close">
            <img src="images/close.png" alt="">
        </div>
        <div class="alin_MV_box">
            <iframe id="a1" class="youtube-video" width="100%" height="100%"
                src="https://www.youtube.com/embed/NKeMj4tf__s?autoplay=0&amp;loop=1&amp;rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""></iframe>
            <iframe id="a2" class="youtube-video" width="100%" height="100%"
                src="https://www.youtube.com/embed/wUZ0pBkoyYk?autoplay=0&amp;loop=1&amp;rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""></iframe>
            <div class="alin_MV_br">
                <img src="images/swiperbg.png" width="100%" height="100%">
            </div>
        </div>
    </div>
</div>`;

const update_1_2 = ` <div class="txt t_1"></div>
<!-- 選單 -->
<div id="imubx">
    <a href="#update_1_1" data-id="update_1_1" class="mu2_0"><span></span></a>
    <a href="#update_1_2" data-id="update_1_2" class="mu2_1_1"><span></span></a>
    <a href="#update_1_3" data-id="update_1_3" class="mu2_1_2"><span></span></a>
    <a href="#update_1_4" data-id="update_1_4" class="mu2_1_3"><span></span></a>
</div>

<!-- 勢力起源START -->
<div class="w1200 info2">
<div class="eject_box" style="display: block;">
<div class="close"></div>
<div class="change-control">
    <div class="prev1"><a href="javascript:;"></a></div>
    <div class="next1"><a href="javascript:;"></a></div>
</div>
<div class="chest_main" style="display: block;">

<div class="tk_box">
  <ul>
      <li >
        <img src="images/swiper/sw1.jpg">
        <p>在三十六洞天之一的商谷洞天中隱居修行的眾多仙家宗門之一，其原身為上古時代的異獸翡翠廉，千年前隨四皓仙人之一的夏黃公進入商谷洞天，在一處雲海浮島上開掘藥田，設青靄園自居。後仙人隕落秦陵，青靄園浮游洞天雲海間，直至三十年前第二次秦陵之變，這些翡翠廉方才重現世間，與鹿蜀紫都結識。<br>
待秦陵之盟尋到疑似劍主轉世者，竟是一對翡翠廉，鹿蜀紫都同青靄園商議，將它們送入翡翠廉族群撫養，並派遣精擅藥理的妙法一派、以及親近自然生靈的補天嶺入駐青靄園照料，翡翠廉們也十分歡喜。

      </li>
      <li style="display: none;">
        <img src="images/swiper/sw2.jpg">
        <p>後有靈草鹿銜芝受身負劍心碎片的仙家弟子照料，瀕臨化靈，被翡翠廉吞食，翡翠廉發生異變，成為靈獸與草木靈結合的異種，修為大增。經秦陵之盟眾家商議，認為此法不失為一種修行法門，或許能由此培育出更多能夠繼承劍心碎片的弟子。於是秦陵之盟邀請太華山聿丹長老墨依、補天嶺司命洛千里、咒隱鳳筱入駐青靄園任長老之位，與翡翠廉一同開宗立派，開創出一門集秦陵眾派各家之長的全新秘法。 </p>
      </li>
  </ul>
</div>
</div>


</div>
</div>
<!-- 勢力起源END　-->
`

const update_1_3 = `           <div class="txt t_1"></div>
<!-- 選單 -->
<div id="imubx">
    <a href="#update_1_1" data-id="update_1_1" class="mu2_0"><span></span></a>
    <a href="#update_1_2" data-id="update_1_2" class="mu2_1_1"><span></span></a>
    <a href="#update_1_3" data-id="update_1_3" class="mu2_1_2"><span></span></a>
    <a href="#update_1_4" data-id="update_1_4" class="mu2_1_3"><span></span></a>
</div>

<!-- 勢力起源START -->
<div class="w1200 info2">
<div class="eject_box" style="display: block;">
<div class="close"></div>
<div class="chest_main">
<div class="tk_box">
  <ul>
      <li>
        <img src="images/swiper/sw3.jpg">
        <p>   青靄園：位於商谷洞天中的一處雲海浮島上，名「青靄園」，四皓仙人之一的夏黃公曾在此開闢藥圃，培植大量仙芝靈草。後仙人殞落秦陵，青靄園浮遊洞天雲海間，直至三十年前第二次秦陵之變，方才令翡翠廉重現世間。</p>
      </li>
  </ul>
</div>
</div>


</div>
</div>
<!-- 勢力起源END　-->`

const update_1_4 = ` <div class="txt t_1"></div>
<!-- 選單 -->
<div id="imubx">
    <a href="#update_1_1" data-id="update_1_1" class="mu2_0"><span></span></a>
    <a href="#update_1_2" data-id="update_1_2" class="mu2_1_1"><span></span></a>
    <a href="#update_1_3" data-id="update_1_3" class="mu2_1_2"><span></span></a>
    <a href="#update_1_4" data-id="update_1_4" class="mu2_1_3"><span></span></a>
</div>

<!-- 勢力起源START -->
<div class="w1200 info4">
<div class="close"></div>
<div class="rolebx rw1">
<div class="swiper-container">
<div class="swiper-wrapper">
<div class="swiper-slide sk1"><img src="images/peo1a.png" style="display:none"/><img src="images/peo1.png" style="display:block"/></div>
<div class="swiper-slide sk2"><img src="images/peo2a.png"/><img src="images/peo2.png"/></div>
<div class="swiper-slide sk3"><img src="images/peo3a.png"/><img src="images/peo3.png"/></div>
</div>
</div>
<!-- Add Arrows -->
<div class="swiper-button-next swiper-button-white"></div>
<div class="swiper-button-prev swiper-button-white"></div>
</div>

<div class="rcobx">

<!--  -->
<div class="rc1" style="display:block">
<div class="pname"><img src="images/ph8.png"></div>
有「素手丹青」之稱，精通醫理、丹術，其學識修為受夏黃公影響頗深，對他收養下的翡翠廉們也很是疼惜。<br>
墨依如今多負責統整夏黃公留下的醫書，結合妙法、補天岭功法，探索鈴客的修行之道，兼顧青靄園各項事務，與其他兩位長老一同教導商遙青，培養優秀的青主。
</div>

<!--  -->
<div class="rc2">
<div class="pname"><img src="images/ph9.png"></div>
對草木靈獸抱有強烈的好奇心，喜歡做大膽的實驗，將製蠱與培育靈植結合起來，被譽為「蠱裡成芝」。<br>
負責帶領身負劍心的秦陵弟子，培育翡翠廉化形必備的鹿銜芝，並煉製各種調理體質、增進修為的丹藥，為鈴客弟子煉化本命法器鈴杖。
</div>

<!--  -->
<div class="rc3">
<div class="pname"><img src="images/ph10.png"></div>
性情沉靜內斂，不擅言辭，但天生對各類靈獸有著很強的親和力，擅長和小動物交流，備受翡翠廉喜愛，被尊為「百廉理事」。<br>
負責從青靄園中選拔根骨奇佳的翡翠廉進行初期培養，並向鈴客弟子傳授偏向療癒的「素脈真藏」心法。

</div>





<!--  -->
</div>

</div>
<!-- 勢力起源END　-->`


