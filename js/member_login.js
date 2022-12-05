$(function () {
    $(".goTop").click(function () {
      $("html,body").animate({
          scrollTop: 0,
        },
        "slow"
      ); /* 返回到最頂上 */
      return false;
    });
  
    //顯示密碼
    $(".show_pass").click(function () {
      let pass_type = $(this).prev().attr("type");
  
      if (pass_type === "password") {
        $(this).prev().attr("type", "text");
        $(this).removeClass("glyphicon-eye-open").addClass("glyphicon-eye-close");
      } else {
        $(this).prev().attr("type", "password");
        $(this).removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");
      }
    });
  
    //select style
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    $(".select-selected").click(function () {
      $(this).prev().show();
    });
    $(".select-items").click(function () {
      $(this).prev().prev().hide();
      $(this).prev().removeClass("after");
    });
    $(".form-outer > div").click(function () {
      //$('.notice-text').css('display','none');
      $(this).next(".notice-text").css("display", "block");
    });
  
    //btn-next
    $(".btn-next").click(function () {
      $(this).parent().parent("div").fadeOut(0);
      $(this).parent().parent("div").next("div").fadeIn(100);
    });
  
    //btn-pre
    $(".btn-pre").click(function () {
      $(this).parent().parent("div").fadeOut(0);
      $(this).parent().parent("div").prev("div").fadeIn(100);
    });
  
    //btn-go-email
    $(".go-email").click(function () {
      $(".singup-outer").fadeOut(0);
      $(".singup-email").fadeIn(100);
    });
  
    //btn-go-email
    $(".go-phone").click(function () {
      $(".singup-outer").fadeOut(0);
      $(".singup-phone").fadeIn(100);
    });
  
    //btn-final
    $(".btn-final").click(function () {
      $(this).parent().parent("div").fadeOut(0);
      $(".final-step").fadeIn(100);
    });
  
    //btn-pick-type
    $(".btn-pick-type").click(function () {
      $(this).parent().parent("div").fadeOut(0);
      $(".singup-type").fadeIn(100);
    });
  
    //popup
    $(".btn-pop").click(function () {
      $(".popup").show();
      $(".pop-msg").fadeIn(500);
    });
    $(".btn-pop-close").click(function () {
      $(".popup,.pop-msg").hide();
    });
    $(".mask").click(function () {
      $(".popup,.pop-msg").hide();
    });
  });
  
  // Show the first tab and hide the rest
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();
  
  // Click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
  
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  
  
  // Show the first tab and hide the rest
  $("#tabs-news li:first-child").addClass("active");
  $(".tab-news-content").hide();
  $(".tab-news-content:first").show();
  
  // Click function
  $("#tabs-news li").click(function () {
    $("#tabs-news li").removeClass("active");
    $(this).addClass("active");
    $(".tab-news-content").hide();
  
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  
  
  // Show the first tab and hide the rest
  $("#tabs-notice li:first-child").addClass("active");
  $(".tab-notice-content").hide();
  $(".tab-notice-content:first").show();
  
  // Click function
  $("#box li").click(function () {
    $("#box li").removeClass("active");
    $(this).addClass("active");
    $(".type-contnent").hide();
  
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  
  // Show the first tab and hide the rest
  $("#box li:first-child").addClass("active");
  $(".type-contnent").hide();
  $(".type-contnent:first").show();
  
  // Click function
  $("#box li").click(function () {
    $("#box li").removeClass("active");
    $(this).addClass("active");
    $(".type-contnent").hide();
  
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
  
  // 儲值下拉
  var nav = $('#box > ul > li');
  nav.find('li').hide();
  nav.click(function () {
    nav.not(this).find('li').hide();
    $(this).find('li').slideToggle();
  });
  $(function () {
    $('#box input').click(function () {
      $('#box ul').slideToggle()
    });
  });
  
  
  /* this javascript is only to change the "actpage" attribut on the .cdp div*/
  
  window.onload = function () {
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function () {
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      } else {
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });
  };