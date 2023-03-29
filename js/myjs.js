var swiper3_1 = new Swiper("#sub_pair_Swiper-1", {
	cssMode: true,
	loop: true,
	navigation: {          
		nextEl: "#pairNext-1",
	},
	pagination: {
	  el: ".sub_swiper-pagination-1",
	},       
	observeParents:true,
	observer:true,
	mousewheel: true,
	keyboard: true,
});

var swiper3_2 = new Swiper("#sub_pair_Swiper-2", {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: "#pairNext-2",
	},
	pagination: {
		el: "#sub_swiper-pagination-2",
	},
	observeParents:true,
	observer:true,
	mousewheel: true,
	keyboard: true,
});

var swiper3_3 = new Swiper("#sub_pair_Swiper-3", {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: "#pairNext-3",
	},
	pagination: {
		el: "#sub_swiper-pagination-3",
	},
	observeParents:true,
	observer:true,
	mousewheel: true,
	keyboard: true,
});

//01表單驗證
$('.register_form').validator().on('submit', function (e) {
	if (e.isDefaultPrevented()) { // 未驗證通過 則不處理
		return;
	} else { // 通过后，送出表单
		alert("已送出表單");
	}
	e.preventDefault(); // 防止原始 form 提交表单
});

//02派對聯誼的刪選過濾
$('select#sort-county').change(function () {
	var filter = $(this).val();
	filterList(filter);
});

function filterList(value) {
	var list = $(".county .county-info");
	$(list).hide();
	if (value == "All") {
		$(".county").find("article").each(function (i) {
			$(this).show();
		});
	} else {
		// *=" means that if a data-custom type contains multiple values, it will find them
		$(".county").find("article[data-custom-type*=" + value + "]").each(function (i) {
			$(this).show();
		});
	}
}

//03頁籤切換-派對聯誼詳細頁
$(function () {
	// 預設顯示第一個 Tab
	var _showTab = 0;
	$('.abgne_tab').each(function () {
		// 目前的頁籤區塊
		var $tab = $(this);

		var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();

		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li', $tab).click(function () {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function () {
			this.blur();
		});
	});
});



//04 swiper啟用-派對聯誼詳細頁的圖片
var swiper = new Swiper(".mySwiper_01", {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//05 改寫行動選單的彈出
$("button.navbar-toggler.main-menu").click(function () {
	var $this = $(this);
	$this.toggleClass("ture");
});



//06 feedback 公益頁的更多記事
$(".note_list .item_more").click(function () {
	$(".note_list .note_item.be_more").fadeToggle();
	var $this = $(this);
	$this.children("i").toggleClass("do");
});

//07 公益頁的下拉式相簿
$(function () {
	//全部選擇隱藏
	$('.album_list div[id^="year_"]').hide();
	$('.album_list div.latest').show();
	$('.album_list #album_years').change(function () {
		let sltValue = $(this).val();
		console.log(sltValue);

		$('.album_list div[id^="year_"]').hide();
		//指定選擇顯示
		$(sltValue).show();
	});

});

//08 公益頁的相簿輪撥 - 因為很多個需對應所以直接寫在html中


//09 常見問題手風琴
$(".faq_item .question:not(active)").click(function () {
	var $this = $(this);
	$('.faq_item').removeClass("active");
	$('.faq_item .question').removeClass("active");
	$this.addClass("active");
	$this.parents(".faq_item").addClass("active");
	$('.faq_item:not(.active) .answer').slideUp(100);
	$this.next(".answer").slideToggle(100);
});

//10 recruit  斜槓招募 的上傳照片預覽圖片設定
$("#progressbarTWInput").change(function () {
	$("#preview_progressbarTW_imgs").html(""); // 清除預覽
	readURL(this);
});

function readURL(input) {
	if (input.files && input.files.length >= 0) {
		for (var i = 0; i < input.files.length; i++) {
			var reader = new FileReader();
			reader.onload = function (e) {
				var img = $("<img width='140' height='140'>").attr('src', e.target.result);
				$("#preview_progressbarTW_imgs").append(img);
			}
			reader.readAsDataURL(input.files[i]);
		}
	} else {
		var noPictures = $("<p>目前沒有圖片</p>");
		$("#preview_progressbarTW_imgs").append(noPictures);
	}
};

//11 聯誼問卷調查 的 改善原因出現

$(".have_reason input").click(function () {
	var $this = $(this);
	$this.parents(".PQ-radio_list").next(".reason").addClass("show");
});
$(".no_reason input").click(function () {
	var $this = $(this);
	$this.parents(".PQ-radio_list").next(".reason").removeClass("show");
});

//12 member_party-manage 聯誼管理 的項目彈出

$(".party-menage_wrap .show_bar .show_more").click(function () {
	var $this = $(this);
	$this.toggleClass("active");
	$this.parents(".show_bar").next(".more_bar").slideToggle()
});


//13 line_couple_step01.html LINE速配-步驟1-個性特質 的下拉復選
$(function () {
	$('.personality_select').ySelect(
		{
			placeholder: '請選擇個性特質',
			showSearch: false,
			numDisplayed: 4,
			overflowText: '已選中 {n}項',
			isCheck: false
		}
	);
	$('.interest_select').ySelect(
		{
			placeholder: '請選擇興趣',
			showSearch: false,
			numDisplayed: 4,
			overflowText: '已選中 {n}項',
			isCheck: false
		}
	);
});



//14 line_couple_step02  Line速配註冊的身份證上傳
$("#IDcard-front").change(function () {
	$("#IDcard-front_imgs").html(""); // 清除預覽
	readURL(this);

	function readURL(input) {
		if (input.files && input.files.length >= 0) {
			for (var i = 0; i < input.files.length; i++) {
				var reader = new FileReader();
				reader.onload = function (e) {
					var img = $("<img width='400' height='240'>").attr('src', e.target.result);
					$("#IDcard-front_imgs").append(img).addClass("active");
					$(".m_IDcard-front .input_file_wrap").addClass("active");
				}
				reader.readAsDataURL(input.files[i]);
			}
		} else {
			var noPictures = $("<p>目前沒有圖片</p>");
			$("#IDcard-front_imgs").append(noPictures).removeClass("active");
			$(".m_IDcard-front .input_file_wrap").removeClass("active");
		}
	};
});

$("#IDcard-back").change(function () {
	$("#IDcard-back_imgs").html(""); // 清除預覽
	readURL(this);

	function readURL(input) {
		if (input.files && input.files.length >= 0) {
			for (var i = 0; i < input.files.length; i++) {
				var reader = new FileReader();
				reader.onload = function (e) {
					var img = $("<img width='400' height='240'>").attr('src', e.target.result);
					$("#IDcard-back_imgs").append(img).addClass("active");
					$(".m_IDcard-back .input_file_wrap").addClass("active");
				}
				reader.readAsDataURL(input.files[i]);
			}
		} else {
			var noPictures = $("<p>目前沒有圖片</p>");
			$("#IDcard-back_imgs").append(noPictures).removeClass("active");
			$(".m_IDcard-back .input_file_wrap").removeClass("active");
		}
	};
});

//15 line_couple_pair  行動版時的搜尋列彈出
$(".bar_com .icon img.for_mobile").click(function () {
	var $this = $(this);
	$(".bar_com .form_body").slideToggle();
});


//16  line_couple_pair 配對的swiper啟動



var swiper2 = new Swiper(".pair_Swiper", {
	spaceBetween: 0,
	centeredSlides: true,


	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});




//17 line_couple_pair 個資查看更多
$(".pair_warp .pair_com .more_show a.see_more").click(function () {
	var $this = $(this);
	$this.parent(".more_show").addClass("active");
	$this.parent(".more_show").prev(".more_data").addClass("active").slideDown();
});
$(".pair_warp .pair_com .more_show a.see_less").click(function () {
	var $this = $(this);
	$this.parent(".more_show").removeClass("active");
	$this.parent(".more_show").prev(".more_data").removeClass("active").slideUp();
});

//18 member_data_manage 其中line速配資料開關
$(".member_data_wrap .switch_img").click(function () {
	var $this = $(this);
	$this.toggleClass("off");
});

//19首頁脫單計畫的swiper啟動
var swiper_home = new Swiper(".project_Swiper", {
	spaceBetween: 0,
	centeredSlides: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});