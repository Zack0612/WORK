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
    <link href="css/normalize.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="css/layout.css" rel="stylesheet" />
    <link href="css/match.css" rel="stylesheet" />
    <link rel="stylesheet" href="./css/tarot-styles.css">
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

            <div id="content" class="clearfix" style="float:none;">
              <!-- content -->
						
              <div id="taro-content">
                    <div class="loadingMask">
                        <img class="loadingPic" src="./images/tarot/loading.svg">
                    </div>
                  <div class="tarotMain">
                    <div class="tarotBack tarotMain1"></div>
                    <div class="slogan">
                        <img src="./images/tarot/Tarologo.png">
                    </div>
                    <div class="title1" style="top: -15px;">
                        選擇您的性別
                    </div>
                    <div class="bubblePlz">
                        <a class="bubble1" href="javascript:void(0)">
                            <img src="./images/tarot/bubble-man.png">  
                        </a>

                        <a class="bubble2"  href="javascript:void(0)">
                            <img src="./images/tarot/bubble-girl.png">    
                        </a> 
                    </div>
                    <div class="bubblePl2">
                        <div class="bubble1-2">
                            <img src="./images/tarot/bubble-man.png">  
                        </div>

                        <div class="bubble2-2">
                            <img src="./images/tarot/bubble-girl.png">    
                        </div>  
                    </div>

                    <div class="p1Txt">       
                            <img src="./images/tarot/p1-txt.png">          
                    </div>
                    
                  </div>
              </div> 

            <!-- content end -->
						
        </div>

    </section>

        
    </main>

    <div class="btn-top"><img src="./images/date/top-triangle.png" alt=""></div>

    <!-- footer 頁底內容區 -->
    <footer id="footer" style="padding-top:80px">
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

<script>
  
    $(window).on('load', function(){
        // $(".loadingPic").delay(500).fadeOut(300);
        $(".loadingMask").delay(500).fadeOut(1000);
    });
 

    $('.bubble1-2').hide(); 
    $('.bubble2-2').hide();   


    $('.bubble1').click(function(){
        $('.bubble1').fadeOut();
        $('.tarotMain1').toggleClass('tarotMain2');     
        $('.bubble2').fadeOut(); 
        $('.bubble1-2').show(2000)
        $('.title1').fadeToggle(500); 
        // $('.tarotMain').removeClass('tarotMain1').delay(1500); 
        // $('.tarotMain').addClass('tarotMain2').delay(1500);
        setTimeout(() => {location.href = 'tarot2.php?gender=boy' }   , 500);
            
    });

    $('.bubble2').click(function(){
        $('.bubble2').fadeOut();
        $('.tarotMain1').toggleClass('tarotMain2');     
        $('.bubble1').fadeOut();    
        $('.bubble2-2').show(2000);
        $('.title1').fadeToggle(500);
        // $('.tarotMain').removeClass('tarotMain1').delay(1500); 
        // $('.tarotMain').addClass('tarotMain2').delay(1500);
        setTimeout(() => {location.href = 'tarot2.php?gender=girl' }   ,500);
        
    });



</script>



</html>