//01 影片背景的 youtube-background 啟動
jQuery(document).ready(function() {
    jQuery('[data-youtube], [data-vbg]').youtube_background();
});

//02 收合的表單效果
$(".form_items .col-md-4 .title").click(function() {
    var $this = $(this);
    $this.siblings(".form_item").slideToggle();
});


//03 表單按鈕的切擜
$(".form_items .col-md-4.form01 .title img").hover(function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle01_hover.svg");
}, function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle01.svg");
});

$(".form_items .col-md-4.form02 .title img").hover(function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle02_hover.svg");
}, function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle02.svg");
});

$(".form_items .col-md-4.form03 .title img").hover(function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle03_hover.svg");
}, function() {
    var $this = $(this);
    $this.attr("src", "images/your_Own_formTitle03.svg");
});

//04 表單按鈕出內容
$("img.Generate_Plan").click(function() {
    $("#chart_Solutions .chart_content").show();
});

//03 slidershow 首頁滑塊秀的swiper啟動
var swiper2 = new Swiper(".mySwiper_slidershow", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
    },

});


//01表單驗證
$('#register_form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) { // 未驗證通過 則不處理
      return;
    } else { // 通过后，送出表单
      alert("已送出表單");
    }
    e.preventDefault(); // 防止原始 form 提交表单
  });

//02派對聯誼的刪選過濾
//Filter Recruiters
$('select#sort-recruiters').change(function() {
	var filter = $(this).val();
	filterList(filter);
});

// Recruiters filter function
function filterList(value) {
	var list = $(".recruiter .recruiter-info");
	$(list).hide();
	if (value == "All") {
		$(".recruiter").find("article").each(function (i) {
			$(this).show();
		});
	} else {
		// *=" means that if a data-custom type contains multiple values, it will find them
		$(".recruiter").find("article[data-custom-type*=" + value + "]").each(function (i) {
			$(this).show();
		});
	}
}