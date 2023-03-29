<!DOCTYPE html>
<html lang="zh-tw">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/index.css"/>
	<?php
      //include('../include_trackcode.php');
   ?>
</head>
<body style="background-image:none">
	<div id="modal">
		<div class="head">
            <div class="icon"><img src="images/icon1.png"></div>
			<div class="icon_word"><span>輸入姓名手機</span>&ensp;&ensp;<span>即刻轉出幸福</span></div>
		</div>
		<div class="content">
		    <div class="item">
		    	<input type="text" id="love_ads_gashapon_name" class="form-control" placeholder="姓名" required >
		    	<select id="love_ads_gashapon_sex" class="form-control" required >
					<option value=''>性別</option>
					<option value="M">男</option>
					<option value="F">女</option>
				</select>	
			</div>
			<div class="item4">
		    	<input class="form-control w1" type="text"  id="love_ads_gashapon_mobile" pattern="^[09]{2}[0-9]{8}$" minlength="10" maxlength="10" title="請輸入 09 開頭的十位數手機號碼" placeholder="手機號碼" required >	
		    </div>
		    <div class="item5">
				<!-- <input type="number" id="verification" name="verification"> -->
			    <input type="text" id="captcha_value" class="form-control" placeholder="驗證碼" required>
				<img id="imgcode" src="captcha.php" style="margin-top:20px;">
			    <!-- <div class="verify">1234</div> -->
			</div>
			<p style="color: #9f7171;margin-top: 20px;">※每人限扭蛋乙次</p>
			<p style="color: #9f7171;margin-bottom: 20px;">※資料請填寫正確以確保領獎資格</p>
	    </div>
	</div>
</body>
</html>