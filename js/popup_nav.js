//アニメーションの秒数

var animationTime = 300;
var count = 5;
var timer;
var myTimer;

var currentNum = "";

$(document).ready(function(){
	$(".popupNavi").css({'display':'block'});
	$(".popupNavi .popupNaviChild").css({'display':'none', 'z-index':'0'});
	
	//グローバルナビ全体のホバー関連
	$("header nav").hover(
		function() {
			clearInterval(myTimer);
		},
		function() {
			myTimer = setInterval("wait()", 300);
		}
	);
	
	//グローバルナビ内の各ボタンのホバー関連
	
	$("header nav li img").mouseover(
		function() {
			clearInterval(myTimer);
			
			if ($(this).parents("li").hasClass("pop")) {
				if (currentNum !== $("#globalNavi li").index($(this).parents("li"))) {
					
					currentNum = $("#globalNavi li").index($(this).parents("li"));
					hideNav();
					showNav($(this).parents("li"));
				}
				else {
				}

			}
			else {
				hideNav();
			}
		}
	);
});

function wait() {
	hideNav();
	currentNum = "";			//初期化
	clearInterval(myTimer);
}

//-------------------------------------------------------------------
//　ブロックをポップアップで表示
//-------------------------------------------------------------------

function showNav(inBlock) {
	var tmpStr = "";
	
	$(".popupNavi .popupNaviChild").css({'z-index':'0'})
	
	if ($(inBlock).hasClass("nav01")) {
		tmpStr = "nav01";
	}
	else if ($(inBlock).hasClass("nav02")) {
		tmpStr = "nav02";
	}
	else if ($(inBlock).hasClass("nav03")) {
		tmpStr = "nav03";
	}
	else if ($(inBlock).hasClass("nav04")) {
		tmpStr = "nav04";
	}
	else if ($(inBlock).hasClass("nav05")) {
		tmpStr = "nav05";
	}
	else if ($(inBlock).hasClass("nav06")) {
		tmpStr = "nav06";
	}
	else if ($(inBlock).hasClass("nav07")) {
		tmpStr = "nav07";
	}
	
	if (tmpStr != "") {
		$(".popupNavi #" + tmpStr).stop().css({'display':'block', 'z-index':'1000', 'top':'-10px', opacity:'0.2'}).animate({opacity:'1', top: '0px'}, animationTime, function() { $(".popupNavi #" + tmpStr).css({'display':'block', 'z-index':'1000'});})
	}
}

//-------------------------------------------------------------------
//　ポップアップしたブロックを消去
//-------------------------------------------------------------------

function hideNav() {
	$(".popupNavi .popupNaviChild").stop().animate({opacity:'0'}, animationTime, function() { $(".popupNavi .popupNaviChild").css({'display':'none', 'z-index':'0'});});
}
<!--hamburger------------------->

$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});
<!--NAV_S------------------->

function myFunction() {
    var x = document.getElementById("s_nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
<!--cssmenu------------------->
$(document).ready(function(){

  $('#cssmenu > ul > li:has(ul)').addClass("has-sub");

  $('#cssmenu > ul > li > a').click(function() {
    var checkElement = $(this).next();
    
    $('#cssmenu li').removeClass('active');
    $(this).closest('li').addClass('active');	
    
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#cssmenu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;	
    }		
  });

});

/*--go to top----------------------------*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


