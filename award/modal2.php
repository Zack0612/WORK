<?php
//require_once('../Connections/con1.php');
//mysql_select_db($database_con1, $con1);//需指定要連結的資料，否則資料常常無法正常

# 列出city資料
/*
$sql_city = "SELECT * FROM `city` order by id asc";
$rs_city = mysql_query($sql_city);
while($data_city = mysql_fetch_assoc($rs_city) ) {
	$data_city_array[] = $data_city; 
}
*/
# 列出get到的case資料
$case = $_GET['case'];
?>
<!DOCTYPE html>
<html lang="zh-tw">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/index.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
	<script>
	
	$(window).load(function() {
		//抓cookie資料
		var user_name_value = getCookieByName('user_name'); //名字
		var sex_value = getCookieByName('sex'); //性別
		var mobile_value = getCookieByName('mobile'); //電話

		$('#user_name').val(user_name_value);
		$('#sex').val(sex_value);
		$('#mobile').val(mobile_value);
		
		$('#the').click(function(){

			var user_name = $("#user_name").val(); //姓名
			var sex = $("#sex").val(); //性別
			var mobile = $("#mobile").val(); //手機
			var email = $('#email').val();
			var add_city = $('#add_city').val(); //居住地
			var year = $('#year').val(); //出生年
			var case_value = $('#case').val(); //方案
			
			//判斷欄位是否有正確
			if(user_name == '') {
				alert('請輸入姓名');
			} else if(mobile == '') {
				alert('請輸入手機號碼');	
			} else if(!mobile.match(/^09/)) {
				alert('請輸入正確的手機號碼');
			} else if(mobile.length != 10) {
				alert('手機號碼長度錯誤');
			} else if( check_phone(mobile) == 'error') {	
				alert('手機號碼已使用過');
			} else if( check_phone_register(mobile) == 'error') {	
				alert('手機號碼已註冊過');
			} else if( email == '') {	
				alert('請輸入email');
			} else if( check_email(email) == 'error') {
				alert('email已註冊');
			} else if(add_city == '') {
				alert('請選擇居住地');
			} else if(sex == '') {
				alert('請選擇性別');
			} else if(year == '') {
				alert('請選擇出生年');		
			} else {
				//寫進資料庫

				$.ajax({
					type: 'POST',                     //GET or POST
					url: "ajax_modal_process.php",  //請求的頁面
					data: { 'user_name':user_name, 'sex':sex, 'mobile':mobile, 'email': email, 'add_city':add_city, 'year': year, 'case':case_value  },
					cache: false,   //是否使用快取
					async: false, //Set to false to enable synchronized calls
					dataType : 'html',
					success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
						//執行完畢
						if(result == 'ok') {

							//轉址
							// window.location.href = 'thank.php';
							top.location.href = 'thank.php';
						} else {
							alert('資料送出失敗');
						}
					},
					error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
						//錯誤訊息
					}
				});
				
			}
		});
	});

	function parseCookie() {
		var cookieObj = {};
		var cookieAry = document.cookie.split(';');
		var cookie;
		
		for (var i=0, l=cookieAry.length; i<l; ++i) {
			cookie = jQuery.trim(cookieAry[i]);
			cookie = cookie.split('=');
			cookieObj[cookie[0]] = cookie[1];
		}
		
		return cookieObj;
	}


	function getCookieByName(name) {
		var value = parseCookie()[name];
		if (value) {
			value = decodeURIComponent(value);
		}

		return value;
	}

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
			}
		});
		return phone_status;
	}
	
	//檢查email(註冊帳號)
	function check_email(mail) {
		var email_status = '';
		$.ajax({
			type: 'POST',                     //GET or POST
			url: "../member/ajax/ajax_check_email_process.php",  //請求的頁面
			data: { email:mail },
			cache: false,   //是否使用快取
			async: false, //Set to false to enable synchronized calls
			dataType : 'html',
			success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
				//執行完畢
				if(result == 'ok') {
					email_status = 'ok';
					// return true;
					return true;
				} else {
					email_status = 'error';
					// return false;
					return false;
				}
			},
			error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
				//錯誤訊息
			}
		});
		return email_status;
	}
	//檢查手機(註冊帳號)
	function check_phone_register(phone) {
		var phone_status = '';
		$.ajax({
			type: 'POST',                     //GET or POST
			url: "../member/ajax/ajax_check_phone_process.php",  //請求的頁面
			data: { phone:phone },
			cache: false,   //是否使用快取
			async: false, //Set to false to enable synchronized calls
			dataType : 'html',
			success: function(result){   //處理回傳成功事件，當請求成功後此事件會被呼叫
				//執行完畢
				if(result == 'ok') {
					phone_status = 'ok';
					return true;
				} else {
					phone_status = 'error';
					return false;
				}
			},
			error: function(result){   //處理回傳錯誤事件，當請求失敗後此事件會被呼叫
			//錯誤訊息
			}
		});
		return phone_status;
	}
	
  

	</script>
	<?php
      //include('../include_trackcode.php');
   ?>
</head>
<body style="background-image:none">
	<div id="modal">
		<div class="head">
			<div class="icon"><img src="images/icon2.png"></div>
			<div class="icon_word">
				<span>填寫正確資料</span>&ensp;&ensp;<span>領取你的幸福</span>
			</div>
		</div>
		<div class="content6">
		    <div class="item4">
				<input type="hidden" id="case" value="<?php echo $case;?>">
		    	<input type="text"  class="form-control" placeholder="姓名" id="user_name" required >
			</div>
			<div class="item4">
		    	<input class="form-control w1" type="text" id="mobile" pattern="^[09]{2}[0-9]{8}$" minlength="10" maxlength="10" title="請輸入 09 開頭的十位數手機號碼" placeholder="手機號碼" required >	
		    </div>
			<div class="item4">
		    	<input class="form-control w1" type="text" id="email" title="請輸入正確的email" placeholder="email" required >	
		    </div>

		    <div class="item">
		    	<select name="add_city" id="add_city" class="form-control" required >
					<option value=''>居住區域</option>
					<?php
                    /*
					foreach($data_city_array as $kk => $vv) {
						echo "<option value='".$vv['no']."'>".$vv['name']."</option>";
					}*/ //foreach($data_city as $kk => $vv) {
					?>
				</select>	
		    	<select name="sex" id="sex" class="form-control" required disabled>
					<!-- <option value="">性別</option> -->
					<option value="M">男</option>
					<option value="F">女</option>
				</select>	
			</div>
		    <div class="item">
		    	<select name="year" id="year" class="form-control" required >
					<option value=''>出生年</option>
					<?php
					for($i=1962; $i<=2022; $i++) {
						echo "<option value='".$i."'>".$i."</option>";
					} //for($i=1962; $i<=2022; $i++) {
					?>
				</select>	
			</div>
			<p style="color: #fe7878;margin-top: 20px;margin-bottom: 20px;">資料請務必填寫正確,確保聯繫您領獎,逾期失效</p>
			<button type="button" class="btn-cta" id="the">確認送出</button>
			<p style="color: #9f7171;margin-top: 20px;">
			※ 按下「確認送出」後表示同意註冊戀戀未來官網會員，以確保獎項使用等權益，後續將有專人與您聯繫領獎事宜。</p>
	    </div>
	</div>
</body>
</html>