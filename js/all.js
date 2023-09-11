window.onload = function () {
  // ---------- 進場畫面 ---------- 結束 //

  // ------ 新聞頁面 背景人物右側出現 ------ 開始 //
  const newRole = document.querySelector(".news_page .news_wrapper .news_role");
  if (newRole) {
    setTimeout(() => {
      newRole.classList.add("active");
    }, 100);
  }
  // ------ 新聞頁面 背景人物右側出現 ------ 結束 //

  // ---------- 手機版選單 ---------- 開始 //
  const hamburger = document.querySelector(".hamburger");
  const iconLink = document.querySelector(".icon-link");
  hamburger.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      // close the menu
      hiddenNav();
    } else {
      this.classList.add("active");
      iconLink.style.display = "block";
      setTimeout(() => {
        iconLink.style.opacity = "100";
      }, 100);
    }
  });

  // 關閉選單
  const hiddenNav = () => {
    hamburger.classList.remove("active");
    iconLink.style.opacity = "0";
    setTimeout(() => {
      iconLink.style.display = "none";
    }, 300);
  };
  // ---------- 手機版選單 ---------- 結束 //

  // ---------- 滾動 ---------- 開始 //
  let isScrolling = false;
  window.addEventListener("scroll", () => {
    // 置頂按鈕 & 底部選單
    const up = document.querySelector(".up");
    const bottomNav = document.querySelector(".bottom_nav");
    const newsBonus = document.querySelector(".news_wrapper");
    if (window.pageYOffset >= 50) {
      // up.style.opacity = "100";
      bottomNav.classList.add("active");
    } else {
      // up.style.opacity = "0";
      bottomNav.classList.remove("active");
    }
    up.addEventListener("click", function () {
      if (isScrolling) return; // 如正在滾動則不執行動作
      isScrolling = true; // 將滾動裝太設置為 true
      scrollToTop();
      function scrollToTop() {
        var currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.scrollTo(
            {
              top: 0,
              behavior: "smooth",
            },
            currentPosition - 150
          );
          requestAnimationFrame(scrollToTop);
        } else {
          isScrolling = false; // 滾動完成後設置滾動狀態為 false
        }
      }
    });

    const top_sp = document.querySelector(".top_sp");
    if (window.pageYOffset >= 50) {
      top_sp.classList.add("visible");
      setTimeout(() => {
        top_sp.classList.add("active");
      }, 100);
    } else {
      top_sp.classList.remove("active");
      setTimeout(() => {
        top_sp.classList.remove("visible");
      }, 100);
    }

    top_sp.addEventListener("click", function () {
      if (isScrolling) return; // 如正在滾動則不執行動作
      isScrolling = true; // 將滾動裝太設置為 true
      scrollToTop();
      function scrollToTop() {
        var currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
          window.scrollTo(
            {
              top: 0,
              behavior: "smooth",
            },
            currentPosition - 150
          );
          requestAnimationFrame(scrollToTop);
        } else {
          isScrolling = false; // 滾動完成後設置滾動狀態為 false
        }
      }
    });

    // 出道福利
    const bonusDiv = document.querySelector(".bonus");
    if (bonusDiv) {
      const bonusDivTop = bonusDiv.getBoundingClientRect().top;
      // div 頂端進入畫面 1/3
      if (bonusDivTop <= window.innerHeight / 3) {
        bonusDiv.classList.add("active");
      }
    }
  });
  // ---------- 滾動 ---------- 結束 //
};

// -------- kv 影片彈窗 -------- 開始 //
// 彈窗關閉 button
const kvPlay = document.querySelector(".kv .play_btn");
const kvVideoPopup = document.querySelector(".kv_video_popup");
// 點擊輪播開啟彈窗
if (kvPlay) {
  kvPlay.addEventListener("click", () => {
    kvVideoPopup.style.display = "flex";
    setTimeout(() => {
      kvVideoPopup.style.opacity = "100";
    }, 50);
  });
  const kvVideoPopupClose = document.querySelector(
    ".kv_video_popup .popup_close"
  );
  kvVideoPopupClose.addEventListener("click", () => {
    closeKvVideo();
    kvVideoPopup.style.opacity = "0";
    setTimeout(() => {
      kvVideoPopup.style.display = "none";
    }, 300);
  });
  // 點擊遮罩overlay關閉彈窗
  const kvVideoPopupOverlay = document.querySelector(
    ".kv_video_popup .popup_overlay"
  );
  kvVideoPopupOverlay.addEventListener("click", () => {
    closeKvVideo();
    kvVideoPopup.style.opacity = "0";
    setTimeout(() => {
      kvVideoPopup.style.display = "none";
    }, 300);
  });
}
// 關閉影片
const closeKvVideo = () => {
  let currentVideoId = "kv_video1";
  let iframe = document.querySelector(`iframe#${currentVideoId}`).contentWindow;
  iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
};
// -------- kv 影片彈窗 -------- 結束 //
