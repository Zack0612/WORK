<?php
if(!$_POST){
	header("Location: ./tarot.php");
	exit();
}

## 處理塔羅 廣告名單客戶的寫入
session_start();
require_once('Connections/con1.php');
// require_once('PHPMailer_v5.1/class.phpmailer.php');
// include('include/function/function_mail.php');
header("Content-Type:text/html;charset=utf-8");//設定header，否則alert會亂碼
mysql_select_db($database_con1, $con1);//需指定要連結的資料，否則資料常常無法正常

## 接收參數
foreach($_POST as $key => $val) {
  $$key = $val;
}

// mem_name: 姓名
// address: 居住地
// age: 年次
// mem_email: email
// phone: 手機
// gender: 性別
// number: 塔羅牌號碼
// verification: 手機驗證碼

## 判斷驗證碼是否正確
if($verification !== $_SESSION['check_phoneCaptcha']) {
	echo "<script>alert('驗證碼錯誤')</script>";
	echo "<script>history.go(-1)</script>";
	exit();
}

## 判斷驗證碼是否超過驗證時間(預設5分鐘，以秒比對，現在時間-驗證碼產生時間)
if( strtotime(date("Y-m-d H:i:s"))-strtotime($_SESSION['check_phoneCaptcha_time']) > 300 ) {
	echo "<script>alert('驗證碼時間已過')</script>";
	echo "<script>history.go(-1)</script>";
	exit();
}

//驗證成功寫入資料庫

## 判斷地區為台北市、新北市、基隆、宜蘭，需要分類為1、2、3
//抓出最後一筆，判斷分類給分類
if($address == '1' || $address == '2' || $address == '3' || $address == '4') {
	$sql_last_class = "SELECT * FROM `tarot_ad` where address in ('1', '2', '3', '4') order by ta_id desc limit 1";
	$rs_last_class = mysql_query($sql_last_class);
	$data_last_class = mysql_fetch_assoc($rs_last_class);
	if(trim($data_last_class['tarot_class_id']) === '1') {
		$tarot_class_id = '2';
	} else if(trim($data_last_class['tarot_class_id']) === '2') {
		$tarot_class_id = '3';
	} else {
		$tarot_class_id = '1';
	}
} else {
	$tarot_class_id = '';
}

## 判斷手機是否重覆
$sql_tarot = "SELECT * FROM `tarot_ad` where phone = '{$phone}'";
$rs_tarot = mysql_query($sql_tarot);
$num_tarot = mysql_num_rows($rs_tarot);
if($num_tarot > 0) {
	## 手機有重覆
	echo "<script>alert('此號碼已測過塔羅測驗')</script>";
	echo "<script>history.go(-1)</script>";
	exit();
}

## 判斷手機是否已經註冊過
$rs_phone  = mysql_query("select * from love_account where Love_Account_cellphone = '".$phone."' ");
$phone_count = mysql_num_rows($rs_phone);
if($phone_count > 0) {
	## 手機已註冊過
	echo "<script>alert('此手機號碼已經註冊過')</script>";
	echo "<script>history.go(-1)</script>";
	exit();
}

## 判斷email是否已經註冊過
$rs_email  = mysql_query("select * from love_account where Love_Account_mail = '".$mem_email."' ");
$email_count = mysql_num_rows($rs_email);
if($email_count > 0) {
	## email已註冊為會員
	echo "<script>alert('此email已是網站會員')</script>";
	echo "<script>history.go(-1)</script>";
	exit();
}

$sql_insert = "INSERT INTO `tarot_ad` (
	`tarot_class_id`,
	`tarot_id`,
	`mem_name`,
	`sex`,
	`address`,
	`age`,
	`phone`,
	`create_time`
) VALUES (
	'{$tarot_class_id}',
	'{$number}',
	'{$mem_name}',
	'{$gender}',
	'{$address}',
	'{$age}',
	'{$phone}',
	'".date("Y-m-d H:i:s")."'
)";
mysql_query($sql_insert);

//性別
if(trim($gender) === 'boy') {
	//男
	$gender = 'M';
} else {
	//女
	$gender = 'F';
}
//年次(西元轉民國)
$age = $age-1911;

//分類說明
$Love_Account_Class = '塔羅註冊';
# 寫入到資料庫love_account(創帳號 email，密碼為手機)
$sql_insert_account = "INSERT INTO `love_account` (`Love_Account_Class`, `Love_Account_acc`, `Love_Account_pwd`, `Love_Account_nickname`, `Love_Account_sex`, `Love_Account_biry`, `Love_Account_cellphone`, `Love_Account_mail`, `Love_Account_live`, `Love_Account_time`) VALUES ('{$Love_Account_Class}', '{$mem_email}', '{$phone}', '{$mem_name}', '{$gender}',  '{$age}', '{$phone}', '{$mem_email}', {$address}, '".date("Y/m/d H:i:s")."')";
mysql_query($sql_insert_account);

echo "<script>alert('成功送出')</script>";
echo "<script>location.href='tarot4.php?number=".$number."'</script>";
?>