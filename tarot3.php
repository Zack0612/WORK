<?php 
session_start();
//require_once('Connections/con1.php');

## 接受參數
$gender = trim($_GET['gender']); //性別
$number = intval($_GET['number']); //所選牌組

//列出塔羅資料
/*
$sql_tarot = "SELECT * FROM `tarot` where id = '".$number."' ";
$rs_tarot = mysql_query($sql_tarot);
$data_tarot = mysql_fetch_assoc($rs_tarot);

## 居住地資料
$sql_city = "SELECT * FROM `city` ORDER BY `id` ASC";
$rs_city = mysql_query($sql_city);
while($data_city = mysql_fetch_assoc($rs_city)) {
    $data_city_array[] = $data_city;
}
*/
?>
<!DOCTYPE html>
<!--XHTML語法來自台灣地區 xml:lang="zh-tw"-->
<html lang="zh-tw">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html" />
    <meta charset="UTF-8">
    <meta property="og:image" content="images/og_image/og_images_homepage.jpg" />
    <!--作者-->
    <meta name="author" content="戀戀未來聯誼交友相親排約婚友社" />
    <!--搜尋索引-->
    <meta name="robots" content="all" />
    <meta name="Keywords" content="相親,婚友社,排約,交友,月老,月下老人,戀戀未來,FutureLove" />
    <meta name="Description"
        content="相親排約婚友社-提供最優質的相親婚友服務，戀戀未來不同於一般傳統的婚友社，費用公開平民化，會員素質嚴格篩選認證，並提供線上配對排約服務，是您擺脫單身的最佳選擇" />
    <title>90日脫單|戀戀未來-幸福到來</title>
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet">    
    <!-- fontawesome-free-6.0.0-web  -->
    <link rel="stylesheet" href="fontawesome/FontAwesome-6/css/all.css">
    <!-- Jquery  -->
    <script src="js/jquery.min.js"></script>
    <!-- bootstrap-5.1.1-->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/bootstrap.min.js"></script>
    <!-- Swiper 滑動外掛-->
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <!--引用 Validator 基於bootstrap的表單驗證-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js"></script>
    <!-- 我的 css -->
    <link href="css/mycss.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/90days.css">
    <link rel="stylesheet" href="./css/case.css">
    <link rel="stylesheet" href="./css/tarot-styles.css">
    <link rel="stylesheet" href="./css/layout.css">
</head>
<style>
.bn4_m {
	display:none;
}
.bn4 {
	display:block;
}
@media only screen and (max-width: 600px){
  .bn4_m {
  	display:block;
  }
  .bn4 {
  	display:none;
  }
  
}

</style>
<body style="background-color: #fff;">
    <!-- header 頂部區 -->
    <header id="header">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img src="images/logo.svg" alt="戀戀未來"></a>
                    <!--以下button 使用在行動選單的啟用鈕 -->
                    <div class="mobile_button">
                        <button class="navbar-toggler" type="button" data-bs-toggle="modal"
                            data-bs-target="#login_form-Modal">
                            <span class="user-icon"><i class="fa-light fa-user"></i></span>
                        </button>
                        <button class="navbar-toggler main-menu" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-icon"><i class="fa-regular fa-bars"></i> <i class="fa-regular fa-xmark-large"></i></span>
                        </button>
                    </div>
                    <!--以下offcanvas 使用在行動選單 -->
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                       
                        <div class="offcanvas-body">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="line-match.html">LINE速配</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">實體約會</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="date.html">實體約會</a></li>
                                        <li><a class="dropdown-item" href="wedding_news.html">新人喜訊</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">派對聯誼</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="party.html">派對聯誼</a></li>
                                        <li><a class="dropdown-item" href="party_album.html">聯誼花絮</a></li>
                                        <li><a class="dropdown-item" href="couple.html">配對成功</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="90days.html">90日脫單</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="tarot.html">脫單塔羅</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">聯絡我們</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="about.html">關於我們</a></li>
                                        <li><a class="dropdown-item" href="news-info.html">最新公告</a></li>
                                        <li><a class="dropdown-item" href="https://www.youtube.com/playlist?list=PL7XG9yuWG5vsQmGWQ0OWO22bRCpUxy5_G" target="_blank">結婚見證</a></li>
                                        <li><a class="dropdown-item" href="feedback.html">公益回饋</a></li>
                                        <li><a class="dropdown-item" href="faq.html">常見問答</a></li>
                                        <li><a class="dropdown-item" href="recruit.html">斜槓招募</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>

                    <!--以下collapse 使用在PC選單 -->
                    <div class="collapse navbar-collapse main-menu-collapse" id="main-menu-collapse">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="line-match.html">LINE速配</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="date.html" role="button" aria-expanded="false">實體約會</a>
                                
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="date.html">實體約會</a></li>
                                    <li><a class="dropdown-item" href="wedding_news.html">新人喜訊</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="party.html" role="button" aria-expanded="false">派對聯誼</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="party.html">派對聯誼</a></li>
                                    <li><a class="dropdown-item" href="party_album.html">聯誼花絮</a></li>
                                    <li><a class="dropdown-item" href="couple.html">配對成功</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="90days.html">90日脫單</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="tarot.html">脫單塔羅</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html" role="button" aria-expanded="false">聯絡我們</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="about.html">關於我們</a></li>
                                    <li><a class="dropdown-item" href="news-info.html">最新公告</a></li>
                                    <li><a class="dropdown-item" href="https://www.youtube.com/playlist?list=PL7XG9yuWG5vsQmGWQ0OWO22bRCpUxy5_G" target="_blank">結婚見證</a></li>
                                    <li><a class="dropdown-item" href="feedback.html">公益回饋</a></li>
                                    <li><a class="dropdown-item" href="faq.html">常見問答</a></li>
                                    <li><a class="dropdown-item" href="recruit.html">斜槓招募</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="d-flex active">
                            <!--如果已經登入，請再d-flex這裏加上active，則會出現不同的項目 -->
                            <div class="btn-login">
                                <i class="fa-regular fa-user"></i> <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#login_form-Modal">登入</a> / <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#register_form-Modal">註冊</a>
                            </div>
                            <div class="member_menu">
                                <div class="menu_icon"><img src="images/member_menu_btn.svg">
                                    <div class="sub-menu">
                                        <ul class="menu_list">
                                            <li class="nav-item"><a href="member_center.html">會員中心</a></li>
                                            <li class="nav-item"><a href="member_data_manage.html">個人資料管理</a></li>
                                            <li class="nav-item"><a href="member_party-manage01.html">派對活動管理</a></li>
                                            <li class="nav-item"><a href="member_friend-manageA01.html">交友約會管理</a></li>
                                            <li class="nav-item login-out"><a href="#">登出</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </header>
    <!-- main 主要內容區 -->
    <main id="main" style="background-color: #fff;">
        <section class="wrapper clearfix index-w">

         

        <div id="content" class="clearfix">

            
            
            
						<!-- content -->
						
              <div id="taro-content">
                <div class="loadingMask">
                    <img class="loadingPic" src="./images/tarot/loading.svg">
                </div>
                <div class="tarotMain">
                    <div class="tarotBack tarotMain2"></div>
                    <div class="slogan">
                        <img src="./images/tarot/Tarologo.png">
                    </div>
                  
                    <div class="cardStartHide">
                        <img src="./images/tarot/taro-Card1.png">
                    </div>
                    <div class="formBox" style="display: none;">
                        <div class="title2" style="display: none;margin-top: 15px;">
                            請輸入您的資料及方位，讓占卜更加「精準」
                        </div>
                        <div class="cardResult">

                            <div class="flip-card">  
                                  
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="./images/tarot/taro-Card1.jpg">
                                    </div>
                                    <div class="flip-card-back">
                                        <!--<img src="images/tarot/<?php //echo $data_tarot['img_url'];?>">-->
                                        <img src="images/tarot/card_1.jpg">
                                        <!-- <img src="./images/tarot/taro-Card2.jpg"> -->
                                    </div>
                                </div>
                                <!-- <h3>《 王后 The Empress 》</h3>     -->
                                <h3>王后<?php //echo $data_tarot['name'];?></h3>
                            </div>
                        
                            <!-- <form id="form2" action="tarot4.php" method="post"> -->
                            <form id="form2" action="tarot_process.php" method="post">    
                                <input type="hidden" name="number" id="number" value="<?=$number?>">
                                <input type="hidden" name="gender" id="gender" value="<?=$gender?>">
                                <div class="mid">

                                    <div class="formG">
                                        <label for="mem_name">姓名:</label>
                                        <input type="text" id="mem_name" name="mem_name">
                                    </div>

                                    <div class="formG">
                                        <label for="address">居住地:</label>
                                        <select name="address" id="address">
                                            <option value="">請選填</option>
                                            <?php
                                            /*
                                            foreach($data_city_array as $kk => $vv) {
                                                ?>
                                                <option value="<?php echo $vv['id'];?>"><?php echo $vv['name'];?></option>
                                                <?php
                                            }*/ //foreach($data_city_array $kk => $vv) {
                                            ?>
                                            
                                        </select>
                                        <!-- <input type="text" id="address" name="address"> -->
                                    </div>

                                    <div class="formG">
                                        <label for="age">年次:</label>
                                        <select name="age" id="age">
                                            <?php
                                            for($i=1945;$i<date("Y");$i++) {
                                                if($i == 1992) {
                                                    echo '<option selected="selected"  value="">請選填</option>';
                                                    continue;
                                                }
                                                ?>
                                                <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                                <?php
                                            }
                                            ?>
                                        </select>

                                    </div>

                                    <div class="formG">
                                        <label for="mem_email">email:</label>
                                        <input type="text" id="mem_email" name="mem_email">

                                    </div>


                                    <div class="formG">
                                        <label for="phone">手機號碼:</label>
                                        <input type="number" id="phone" name="phone" 
                                        style="width: calc(100% - 95px);">  
                                        <div class="formG2">                                
                                            <button onclick="fm_vfcode()" type="button" id="putvf" style="width: 90px;">
                                                <span>送出驗證碼</span> 
                                            </button>
                                            <button style="display: none;background-color: #c6c6c6;cursor: default;border:#c6c6c6 1px solid;width: 90px;" type="button"  id="putvf1">
                                                <span>送出驗證碼</span> 
                                            </button>
                                        </div>

                                    </div>

                                    <div class="formG">
                                        <label for="verification">驗證碼:</label>
                                        <input type="number" id="verification" name="verification">

                                    </div>

                                    
                                    <div class="downBtn">       
                                        <button type="submit" class="submit">          
                                            占卜結果
                                        </button>
                                        
                                    </div>
                                    
                                </div>
                                
                            </form>
                            
                        </div>
                        <div class="remark">※ 按下「占卜結果」表示同意戀戀未來與您聯繫</div> 
                    </div>
                    
                  
                </div>
              </div>

						<!-- content end -->
						
        </div>

    </section>

        
        
    </main>

    <div class="btn-top"><img src="./images/date/top-triangle.png" alt=""></div>

    <!-- footer 頁底內容區 -->
    <footer id="footer">
        <div class=" container ">
            <div class="row footer-info">
                <div class="col-lg-12 contact">
                    <div class="social"><a href="#"><img src="images/footer-social_fb.svg"></a> <a href="#"><img
                                src="images/footer-social_yt.svg"></a> <a href="#"><img
                                src="images/footer-social_ig.svg"></a></div>
                    <div class="mail"><img src="images/footer-icon_mail.svg"> 客服信箱：<a
                            href="mailto:love@futurelove.com.tw">love@futurelove.com.tw</a></div>
                    <div class="phone"><img src="images/footer-icon_phone.svg"> TEL：0986-699521
                        <span>服務時間10：00~18：00(日一公休)</span>
                    </div>
                </div>
                <div class="col-lg-12 copyright">©Since 2008 戀戀未來 All Rights Reserved.</div>
            </div>
        </div>
        <div class="line_link"><a href="https://line.me/R/ti/p/%40futurelove" target="_blank"><img
                    src="images/line_icon.svg"></a></div>
    </footer>

    <!--以下是彈跳出來的Modal視窗   -->
    <!--#login_form-Modal 登入表單   -->
    <div class="modal fade" id="login_form-Modal" tabindex="-1" aria-labelledby="login_form-ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="login_form-ModalLabel">會員登入</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form_body">
                        <form id="register_form" role="form" data-toggle="validator">
                            <div class="form-group">
                                <input id="inputName" name="Name" type="text" class="form-control" placeholder="手機/電子信箱"
                                    data-error="格式錯誤或尚未填寫" required="required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input id="inputPassword" name="Password" class="form-control" type="password"
                                    placeholder="密碼" data-error="格式錯誤或尚未填寫" required="required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="button"><button id="register_check" class="btn btn-danger btn-block"
                                    onclick="">登入</button></div>
                        </form>
                        <div class="forget-register"> <a href="#" data-bs-target="#forgetpwd-Modal"
                                data-bs-toggle="modal">忘記密碼</a> <a href="#" data-bs-target="#register_form-Modal"
                                data-bs-toggle="modal">快速註冊</a></div>

                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!--#register_form-Modal 註冊表單   -->
    <div class="modal fade" id="register_form-Modal" tabindex="-1" aria-labelledby="register_form-ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="register_form-ModalLabel">免費註冊會員</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form_body">
                        <form id="register_form" role="form" data-toggle="validator" class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group m_sex">
                                        <label class="title">性別:</label>
                                        <label><input type="radio" id="female" name="m_sex" value="F"
                                                checked><span>女性</span></label>
                                        <label><input type="radio" id="male" name="m_sex"
                                                value="M"><span>男性</span></label>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <input id="m_email" name="m_email" type="text" class="form-control"
                                            placeholder="電子信箱" data-error=" " required="required">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <input id="m_nickname" name="m_nickname" type="text" class="form-control"
                                            placeholder="暱稱" data-error=" " required="required">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <input id="m_password" name="m_password" type="password" class="form-control"
                                            placeholder="密碼" data-error=" " required="required">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <input id="m_sec_password" name="m_sec_password" type="password"
                                            class="form-control" placeholder="確認密碼" data-error=" " required="required">
                                        <div class="help-block ">請輸入8~12字元密碼</div>
                                    </div>

                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <select name="Love_Account_live" id="Love_Account_live">
                                            <option value="0">居住地</option>
                                            <option value="1">台北</option>
                                            <option value="2">新北</option>
                                            <option value="3">基隆</option>
                                            <option value="4">宜蘭</option>
                                            <option value="5">桃園</option>
                                            <option value="6">新竹</option>
                                            <option value="7">苗栗</option>
                                            <option value="8">台中</option>
                                            <option value="9">彰化</option>
                                            <option value="10">南投</option>
                                            <option value="11">嘉義</option>
                                            <option value="12">雲林</option>
                                            <option value="13">台南</option>
                                            <option value="14">高雄</option>
                                            <option value="15">屏東</option>
                                            <option value="16">台東</option>
                                            <option value="17">花蓮</option>
                                            <option value="18">澎湖</option>
                                            <option value="19">金門</option>
                                            <option value="20">馬祖</option>
                                            <option value="21">其它</option>
                                        </select>

                                    </div>
                                    <div class="form-group">
                                        <select name="Love_Account_msg" id="Love_Account_msg">
                                            <option value="0">何處知道本站</option>
                                            <option value="02">google搜尋引擎</option>
                                            <option value="01">yahoo搜尋引擎</option>
                                            <option value="04">親友推薦</option>
                                            <option value="03">FB</option>
                                            <option value="07">戀戀未來部落格</option>
                                            <option value="06">其它</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input id="Love_Account_recommendNumber" name="Love_Account_recommendNumber"
                                            type="text" class="form-control" placeholder="推薦碼 / 優惠代碼 ( 若無請跳過 )">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-8"> <input id="m_tel" name="m_tel" type="text"
                                                    class="form-control" placeholder="手機號碼" data-error=" "
                                                    required="required">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="col-4"><button class="verify">獲取驗證碼</button></div>
                                        </div>

                                    </div>
                                    <div class="form-group">
                                        <input id="m_tel_checkword" name="m_tel_checkword" type="text"
                                            class="form-control" placeholder="手機驗證碼" data-error=" " required="required">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 agree_member">
                                    <input type="checkbox" name="agree_member" id="agree_member">
                                    <label for="agree_member">我已同意戀戀未來<a href="clause.html" target="_blank">會員條款</a>及<a
                                            href="privacy.html" target="_blank">隱私權政策</a></label>
                                </div>
                                <div class="col-lg-6 goto_login only_pc">
                                    <a href="#" data-bs-target="#login_form-Modal" data-bs-toggle="modal">立即登入</a>
                                </div>
                            </div>
                            <div class="button"> <button id="register_check" class="btn btn-danger btn-block"
                                    onclick="">註冊</button></div>
                            <div class="goto_login only_mobile">
                                <a href="#" data-bs-target="#login_form-Modal" data-bs-toggle="modal">立即登入</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!--#forgetpwd-Modal 忘記密碼   -->
    <div class="modal fade" id="forgetpwd-Modal" tabindex="-1" aria-labelledby="forgetpwd-ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="login_form-ModalLabel">忘記密碼</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form_body">
                        <p>請輸入手機與電子信箱，我們將發送帳號及密碼。<br>若沒收到通知信，請檢查是否被歸類為垃圾信件。<br>（有時需等候才會收到信件，敬請耐心等候）</p>
                        <form id="register_form" role="form" data-toggle="validator">
                            <div class="form-group">
                                <input name="Love_Account_phone" id="Love_Account_phone" type="text"
                                    class="form-control" placeholder="手機" data-error="格式錯誤或尚未填寫" required="required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input name="Love_Account_mail" id="Love_Account_mail" type="text" class="form-control"
                                    placeholder="電子信箱" data-error="格式錯誤或尚未填寫" required="required">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="button"><button id="register_check" class="btn btn-danger btn-block" onclick=""
                                    data-bs-target="#forgetpwd_end-Modal" data-bs-toggle="modal">送出</button></div>
                        </form>
                        <div class="forget-register"> <a href="#" data-bs-target="#login_form-Modal"
                                data-bs-toggle="modal">返回登入畫面</a></div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!--#forgetpwd-Modal 忘記密碼   -->
    <div class="modal fade" id="forgetpwd_end-Modal" tabindex="-1" aria-labelledby="forgetpwd-ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="login_form-ModalLabel">忘記密碼</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form_body">
                        <p>已透過官方信箱love@futurelove.com.tw寄出認證信件<br>
                            請至您留下的註冊E-MAIL：<span>yourname@yourdoname.com</span><br>
                            收認證信件，並點選信件開通此帳號，即註冊完成<br>
                            若您未收到認證信，請至垃圾郵件或促銷郵件確認</p>
                        <form id="register_form" role="form" data-toggle="validator">
                            <div class="button"><button id="register_check" class="btn btn-danger btn-block"
                                    onclick="">重寄認證信件</button></div>
                        </form>

                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

</body>

<!-- 我的 js -->
<script src=" js/myjs.js"></script>
<script src="js/marketing.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.2/dist/additional-methods.js"></script>  -->

<script type="text/javascript"  src="js/popup_nav.js"></script>


<script>
    //上方漢堡選單jquery版本衝突，因此獨立拉出
    // function myFunction() {
    //     var x = document.getElementById("s_nav");
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topnav";
    //     }
    // }


    $(window).on('load', function(){
        // $(".loadingPic").delay(500).fadeOut(300);
        $(".loadingMask").delay(500).fadeOut(1000);
    });

    $.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
    }
    // console.log($.urlParam('gender'));  

    var gender = $.urlParam('gender')


    $('.formBox').hide(); 
    $('.cardStartHide').fadeIn(500);
    $('.txt-r').hide();

    setTimeout(() => {
        $('.title2').fadeIn(1000); 
        $('.tarotBack').removeClass('tarotMain2').delay(1500); 
        $('.tarotBack').addClass('tarotMain1').delay(1500);
        $('.cardStartHide').fadeOut(1500);
        $('.formBox').fadeIn(1500); 
        if($('.formBox')){
            $('.txt-r').fadeIn(3500);
            $('.flip-card-front').fadeOut(2500);
            $('.flip-card h3').fadeIn(2500);
        }
        
    }, 1500);



//若需要再開吧 下方 倒數計時 & 表單驗證
//倒數計時--->
function fm_vfcode() {
    
    if( $("#phone").valid() ){
        var phone = $('#phone').val();
        $('#putvf').css('display','none');
        $('#putvf1').css('display','block');

        //使用ajax產生驗證碼  
        
        $.post( "ajax_phoneCaptcha_check.php", { phone: phone })
            .done(function( data ) {
                // alert( "sms code: " + data );
                if( data != 'ok') {
                    alert(data);

                    //因不符合計時，直接開放
                    $('#putvf1').css('display','none');//修改狀態
                    $('#putvf').css('display','block');
                    clearInterval(down);//銷燬計時器
                    return;

                } else {
                    editvfput(120);
                }
        });
        /*
        $.post( "ajax_phoneCaptcha_check.php", { phone: phone }, function( data ) {
            console.log( data ); // John
        }, "json");
        */
    }     //if( $("#phone").valid() ){
    
} //function fm_vfcode() {

//讀秒
function editvfput(count) {
    var down = setInterval(CountDown, 1000);//每秒執行一次，賦值
    function CountDown() {
        $('#putvf1').text('剩餘 ' + count + ' 秒');//寫入
        if (count == 0) {
        $('#putvf1').css('display','none');//修改狀態
        $('#putvf').css('display','block');
        clearInterval(down);//銷燬計時器
        return;
    }
        count--;
    }
}
// <---倒數計時


//表單認證
$(function(){
// function JqValidate() {

    $('#form2').validate({
        // debug:true,
        onkeyup: function(element, event) {
            var value = this.elementValue(element).replace(/^\s+/g, "");
            $(element).val(value);
        },
        rules: {  
            mem_name: { 
                required: true 
            },
            address: { 
                required: true 
            },
            age: { 
                required: true 
            },
            
            // address: { notEqualsto: "0" },
            // age: { notEqualsto: "0" },
            // address: 'required',
            phone:{
                required: true,
                minlength: 10,
                number: true
            },
            verification: {
                required: true
                // error: true
            }
        },
        messages: {
            mem_name: {
                required:'*請輸入姓名'
            },
            address: {
                required:'*請選擇居住地'
                // notEqualsto: "請選擇居住地"
            },
            age: {
                required:'*請選擇年次'
                // notEqualsto: "請選擇年次"
            },
            phone: {
                required:'*必填',
                minlength:'*不得少於10位',
                number:'*電話需為數字'
            },
            verification: {
                required:'*必填'
                // error:'*驗證碼錯誤'
            }

        },

        success:function(error){
            //單項有輸入資料時的回應
            error.addClass('valid').text('');
            // return true;
        },
        invalidHandler:function(form){       
            // $("#summary").fadeOut().fadeIn();
            // console.log('驗證失敗');
            return false;
        }
        // submitHandler: function(form) {
            //執行寫入表單
            // console.log('全部OK');
            // const mem_name = $('#mem_name').val(); //姓名
            // const address = $('#address').val(); //居住地
            // const age = $('#age').val(); //年次
            // console.log('123');
            // console.log(form);
            // alert('valid form submitted');
            // return false; 
        // }
    });
// }
});

// function submitBtn()
// {
// 	 if( JqValidate() ){  
//          console.log('進度submit');
// 		//  $( '#form2' ).submit();
// 	 }
// }

</script>

</html>