<?php
/*
session_start();
require_once('../Connections/con1.php');
date_default_timezone_set('Asia/Taipei');
header("Content-Type:text/html;charset=utf-8");//設定header，否則alert會亂碼
mysql_select_db($database_con1, $con1);//需指定要連結的資料，否則資料常常無法正常
// ini_set( "memory_limit", "256M");//照片上傳之記憶體由原24M改為256M,否則記憶體不足，照片無法上傳
// ini_set( "max_execution_time", "300");//每個PHP頁面運行的最大時間值(秒)，預設30秒->修改為300秒
*/


$sex = trim($_POST['sex']);

# 產生隨機字串的 PHP 函數
function random_string($length = 32, $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
	if (!is_int($length) || $length < 0) {
		return false;
	}
	$characters_length = strlen($characters) - 1;
	$string = '';

	for ($i = 0; $i < $length; $i++) {
		$string .= $characters[mt_rand(0, $characters_length)];
	}
	return $string;
}


/*
獎項須設定一些限制：
特等獎、體驗獎：只有女生才會抽到
參獎：只有男生才會抽到 | 20221119 改成男女都抽得到
頭獎&貳獎：男女都可抽到

1: 特等獎-真愛
2: 頭獎-邂逅
3: 貳獎-成長
4: 参獎-蛻變(外在魅力提升諮詢 1 次 ) | 20221119改成相遇
5: 體驗獎-心動
*/


if($sex === 'M') {
  $gift_value = random_string(1, '234');
}

if($sex === 'F') {
  $gift_value = random_string(1, '12345');
}
// $array_key = array_rand($gift_array); //取key值
// echo "award".$gift_array[$array_key].".html"; //亂數取值
echo "award".$gift_value.".html"; //亂數取值
// echo "award1.html";
?>