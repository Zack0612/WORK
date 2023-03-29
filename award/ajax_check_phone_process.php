<?php
session_start();
if(!file_exists("../Connections/con1.php")){
	http_response_code(500);
	echo "db connecton error";
	exit();
}

require_once('../Connections/con1.php');
header("Content-Type:text/html;charset=utf-8");//設定header，否則alert會亂碼
mysql_select_db($database_con1, $con1);//需指定要連結的資料，否則資料常常無法正常
// ini_set( "memory_limit", "256M");//照片上傳之記憶體由原24M改為256M,否則記憶體不足，照片無法上傳
// ini_set( "max_execution_time", "300");//每個PHP頁面運行的最大時間值(秒)，預設30秒->修改為300秒

if($_POST){
	foreach($_POST as $key => $val) {
	  $$key=$val;
	}
}

#檢查帳號(email)是否重覆
$sql_a  = mysql_query("select * from love_ads_gashapon where love_ads_gashapon_mobile = '".$phone."' ");
if(mysql_num_rows($sql_a)!=0){
	#帳號重覆問題
	echo "error";
  exit();//不執行以下程式
} else {
	echo "ok";
}
?>