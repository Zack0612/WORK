// 分享頁新增好友demo
$('.friend_add_box1 p').on('click', function(){

  var friend_form =
  '<div class="share_form_element new_friend_form">' +
    '<div class="remove_sharebox">' +
      '<img src="assets/images/share/remove_icon.png" alt="刪除欄位">' +
    '</div>' +
    '<div class="share_form_item share_form_item_1">' +
      '<span class="share_form_item_name share_form_item_name_1">好友名稱</span>' +
      '<input class="form_elememt_contain input" type="text" name="name_friends[]" placeholder="請輸入好友名稱">' +
    '</div>' +
    '<div class="share_form_item">' +
      '<span class="share_form_item_name share_form_item_name_1">好友手機</span>' +
      '<input class="form_elememt_contain input" type="tel" name="phone_friends[]" placeholder="請輸入好友手機">' +
    '</div>' +
  '</div>';

  var $friendNew = $('.new_friend_form');
  // console.log($friendNew);

  // 最多新增10個好友
  if ($friendNew.length > 9){
    alert('一次最多只能分享給10位好友！');
    return;
  }

  $('#addfriend').append(friend_form);

  // 分享頁刪除好友
  $('.remove_sharebox').on('click', function(){
    var $thisForm = $(this).parent($('.new_friend_form'));
    $thisForm.remove();
    // console.log($(this).parent($('.new_friend_form')));
  });
});


// popup關閉
var $pop = $('.popup');
var $popClose = $pop.find($('.popup_close'));

$popClose.click(function(e) {
  e.preventDefault();

  $pop.fadeOut();

  $pop.data('isClose', 1);

  if ($pop.data('isClose') === 1){
    // 關閉歡迎popup之後，首頁內容和banner出現
    // var $containerIndex = $('.container_index');
    // if (!$containerIndex.hasClass('show')){
    //   $containerIndex.addClass('show');
    //   $('.index_banner').addClass('show');
    // }
  }
});

