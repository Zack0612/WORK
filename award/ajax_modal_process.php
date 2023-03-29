<?php
session_start();
require_once('../Connections/con1.php');
date_default_timezone_set('Asia/Taipei');
header("Content-Type:text/html;charset=utf-8");//設定header，否則alert會亂碼
mysql_select_db($database_con1, $con1);//需指定要連結的資料，否則資料常常無法正常
// ini_set( "memory_limit", "256M");//照片上傳之記憶體由原24M改為256M,否則記憶體不足，照片無法上傳
// ini_set( "max_execution_time", "300");//每個PHP頁面運行的最大時間值(秒)，預設30秒->修改為300秒

foreach($_POST as $key => $val) {
  $$key=$val;
}

## 判斷地區為台北市、新北市、基隆、宜蘭、桃園，需要分類為1、2、3
		//抓出最後一筆，判斷分類給分類
		if($add_city == '1' || $add_city == '2' || $add_city == '3' || $add_city == '4' || $add_city == '5') {
			$sql_last_class = "SELECT * FROM `love_ads_gashapon` where love_ads_gashapon_city in ('1', '2', '3', '4', '5') order by love_ads_gashapon_id desc limit 1";
			$rs_last_class = mysql_query($sql_last_class);
			$data_last_class = mysql_fetch_assoc($rs_last_class);
			if($data_last_class['love_ads_gashapon_class'] == '1') {
				$love_ads_gashapon_class = '2';
			} else if($data_last_class['love_ads_gashapon_class'] == '2') {
				$love_ads_gashapon_class = '3';
			} else {
				$love_ads_gashapon_class = '1';
			}
		} else {
			$love_ads_gashapon_class = '';
		}

#寫入到資料庫love_ads_gashapon
$sql_insert = "INSERT INTO `love_ads_gashapon` (`love_ads_gashapon_class`, `love_ads_gashapon_name`, `love_ads_gashapon_sex`, `love_ads_gashapon_city`, `love_ads_gashapon_mobile`, `love_ads_gashapon_year`, `love_ads_gashapon_gift`, `create_time`) VALUES ('{$love_ads_gashapon_class}', '{$user_name}', '{$sex}', '{$add_city}', '{$mobile}', '{$year}', '{$case}', '".date("Y/m/d")."')";
mysql_query($sql_insert);

## 出生年改為民國年
$year = ($year-1911);

		## 判斷地區為台北市、新北市、基隆、宜蘭，需要分類為1、2、3
		//抓出最後一筆，判斷分類給分類
		/*
		if($add_city == '1' || $add_city == '2' || $add_city == '3' || $add_city == '4') {

			$sql_ac_last_class = "SELECT * FROM `love_account` where Love_Account_live in ('1', '2', '3', '4') order by Love_Account_id desc limit 1";
			$rs_ac_last_class = mysql_query($sql_ac_last_class);
			$data_ac_last_class = mysql_fetch_assoc($rs_ac_last_class);
			if($data_ac_last_class['Love_Account_Class'] == '1') {
				$Love_Account_Class = '2';
			} else if($data_ac_last_class['Love_Account_Class'] == '2') {
				$Love_Account_Class = '3';
			} else {
				$Love_Account_Class = '1';
			}

		} else {
			$Love_Account_Class = '';
		}
		*/
		$Love_Account_Class = '轉蛋註冊';

			#寫入到資料庫love_account(創帳號  ，密碼為手機)
			$sql_insert_account = "INSERT INTO `love_account` (`Love_Account_Class`, `Love_Account_acc`, `Love_Account_pwd`, `Love_Account_nickname`, `Love_Account_sex`, `Love_Account_biry`, `Love_Account_cellphone`, `Love_Account_mail`, `Love_Account_live`, `Love_Account_time`) VALUES ('{$Love_Account_Class}', '{$email}', '{$mobile}', '{$user_name}', '{$sex}',  '{$year}', '{$mobile}', '{$email}', '{$add_city}', '".date("Y/m/d H:i:s")."')";
			mysql_query($sql_insert_account);

			echo "ok";

?>