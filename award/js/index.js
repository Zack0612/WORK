$(function(){
	var user_name = ''; //姓名
	var sex = ''; //性別
	var mobile = ''; //手機

	// $('#the').click(function(){
		// window.open('thank.html');
		// window.location.href = 'thank.html';
		//驗證資料
		// let iframe_content_2 = $('#iframe_modal_2').contentWindow.document.body;
		// user_name = iframe_content_2.find("#user_name").val();

		// user_name = iframe_content2.find("#user_name").val(); //姓名
		// console.log(user_name);


		// window.location.href = 'thank.php';
	// });

	// $('#modal2').click(function(){
		// window.open('modal2.html');
		// window.location.href = 'modal2.html';
		// window.location.href = 'modal2.php';
	// });
	$(".btn-cta2").click(function(){
		
		//抓取iframe欄位並驗證（第一個iframe）
		let iframe_content = $(document.getElementById('iframe_modal').contentWindow.document.body);
		var captcha_value = iframe_content.find("#captcha_value").val(); //驗證碼

		user_name = iframe_content.find("#love_ads_gashapon_name").val(); //姓名
        sex = iframe_content.find("#love_ads_gashapon_sex").val(); //性別
        mobile = iframe_content.find("#love_ads_gashapon_mobile").val(); //手機
		

		//判斷欄位是否有正確
		if(user_name == '') {
			alert('請輸入姓名');
		} else if(sex == '') {
			alert('請選擇性別');
		} else if(mobile == '') {
			alert('請輸入手機號碼');
		} else if(!mobile.match(/^09/)) {
			alert('請輸入正確的手機號碼');
		} else if(mobile.length != 10) {
			alert('手機號碼長度錯誤');
		} else if( check_phone(mobile) == 'error') {	
			alert('手機號碼已使用過');
		} else if(check_captcha(captcha_value) == 'error') {
			alert('驗證碼不正確');	
		} else {
			//寫入 cookie
			// docCookies.setItem('username', user_name);
			document.cookie = 'user_name=' + encodeURIComponent(user_name);
			document.cookie = 'sex=' + encodeURIComponent(sex);
			document.cookie = 'mobile=' + encodeURIComponent(mobile);
			
			$(".gashapon2").show();
			$(".gashapon, #lightbox").hide();
			// console.log('驗證OK');

			//抽獎內容(用ajax抽出)
			$.ajax({
				type: 'POST',                     //GET or POST
				url: "ajax_lottery.php",  //請求的頁面
				data: { 'sex': sex },
				cache: false,   //是否使用快取
				async: false, //Set to false to enable synchronized calls
				dataType : 'html',
				success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
					$('#iframe_modal_2').attr('src', result);
				},
				error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
				  //錯誤訊息
				}
			});

			$("html,body").animate(
				{
					scrollTop: 100,
				},
				600
			);

			//移動畫面到最上方往下一點
			/*
			$('body').animate({
				scrollTop: $(this).offset().top
			}, 2000);
			*/

			// $('#iframe_modal_2').attr('src', 'award2.html');
		}
		
	});
});
function toggleLightbox () {
	
	const lightbox = document.querySelector('#lightbox');

	if (lightbox.className.indexOf('show') > -1) {
		lightbox.className = '';
	}
	else {
		lightbox.className = 'show';
	}
}
function toggleLightbox2 () {
	const lightbox = document.querySelector('#lightbox2');

	if (lightbox.className.indexOf('show') > -1) {
		lightbox.className = '';
	}
	else {
		lightbox.className = 'show';
	}
}

//驗證碼ajax
function check_captcha(checkword_value) {
	var status = '';
	$.ajax({
		type: 'POST',                     //GET or POST
		url: "../../member/ajax/ajax_captcha_check.php",  //請求的頁面
		data: { checkword: checkword_value },
		cache: false,   //是否使用快取
		async: false, //Set to false to enable synchronized calls
		dataType : 'html',
		success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
		  // console.log('step 1:'+result);
			//執行完畢
			if(result == 'ok') {
			//   $('#checkword_alert').attr('class','alert_class');//加入錯誤狀態顏色
			//   $('#checkword_alert').html('驗證成功');
			  status = 'ok';
			  // $('#cap_status').val('yes');
			  return true;
			} else {
			//   $('#checkword_alert').attr('class','warning_span');//加入錯誤狀態顏色
			//   $('#checkword_alert').html('驗證碼錯誤');
			  status = 'error';
			  // $('#cap_status').val('no');
			  return false;
			}
			// return status;
		},
		error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
		  //錯誤訊息
		}
	});
	return status;
	// console.log('123'+status);
  
  } //function check_captcha(checkword_value) {


//檢查手機
function check_phone(phone) {
	var phone_status = '';
	$.ajax({
		  type: 'POST',                     //GET or POST
		  url: "ajax_check_phone_process.php",  //請求的頁面
		  data: { phone:phone },
		  cache: false,   //是否使用快取
		  async: false, //Set to false to enable synchronized calls
		  dataType : 'html',
		  success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
			  //執行完畢
			  if(result == 'ok') {
				// $('#m_tel_alert').attr('class','alert_class');//加入正確狀態顏色
				// $('#m_tel_alert').html('可以使用');
				phone_status = 'ok';
				return true;
			  } else {
				// $('#m_tel_alert').attr('class','warning_span');//加入錯誤狀態顏色
				// $('#m_tel_alert').html('此號碼已註冊使用');
				phone_status = 'error';
				return false;
			  }
		  },
		  error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
			//錯誤訊息
			phone_status = result;
		  }
	});
	return phone_status;
}
  