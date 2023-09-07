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

  // ---------- 人脈經營 ---------- 開始 //
  const people = document.querySelectorAll(".people");
  people.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      // 當前元素
      const target = event.target;
      // 父元素
      const parent = target.parentNode;
      // 父元素下所有元素
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        //  不包含當前 hover 元素
        if (children[i] !== target) {
          children[i].classList.add("dark");
        }
      }
    });
    item.addEventListener("mouseleave", (event) => {
      const target = event.target;
      const parent = target.parentNode;
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("dark");
      }
    });
  });
  // ---------- 人脈經營 ---------- 結束 //

  // --------------- 人脈經營 彈窗 --------------- 開始 //
  // 人物資料
  const roleList = [
    {
      id: "role1",
      name: "程廷羽",
      slogan: "盛光之下，歡迎來到我的舞台。",
      detail: ["偶像", "星芒集團", "19歲", "183cm"],
      characteristic: "圈內當仁不讓的演藝天王。影視歌三棲的實力派。",
    },
    {
      id: "role2",
      name: "唐芯",
      slogan: "在星空之下閃耀。",
      detail: ["演員", "風娛傳媒", "20歲", "162cm"],
      characteristic:
        "温柔甜美，謙虛低調的女演員。因為拍戲經常一條過，人稱「唐一條」。",
    },
    {
      id: "role3",
      name: "霍廉",
      slogan: "時光無法倒流，但從未忘卻。",
      detail: ["考古學家", "", "28歲", "187cm"],
      characteristic:
        "主角的青梅竹馬。從小熱愛畫畫，因為家中的變故一度消失，毅然投身進考古中。",
    },
    {
      id: "role4",
      name: "顧梵",
      slogan: "我不喜歡半途而廢。",
      detail: ["星芒集團總裁", "星芒集團", "28歲", "186cm"],
      characteristic: "將星芒集團帶上高峰的新銳總裁。容貌端正，性格高冷。",
    },
    {
      id: "role5",
      name: "沐川",
      slogan: "我能創造一切，也能毀滅一切。",
      detail: ["金牌作家", "", "秘密", "178cm"],
      characteristic:
        "常年霸榜作家富豪榜榜首的神秘作家，因劇本改編而與主角有了交集。",
    },
    {
      id: "role6",
      name: "高伊同",
      slogan: "作為經紀人，除了外型和實力，我更看重你的潛力。",
      detail: ["經紀人", "個人工作室", "24歲", "178cm"],
      characteristic: "常年遊走於各大娛樂公司與劇組，帥氣又可靠的經紀人。",
    },
    {
      id: "role7",
      name: "顧念",
      slogan: "只要你自身有價值，就會受到無數人的吹捧。",
      detail: ["星芒集團藝人經紀部總監", "星芒集團", "30歲", "170cm"],
      characteristic: "星芒集團藝人經紀部總監，實力和手段兼具的女強人。",
    },
    {
      id: "role8",
      name: "宋清時",
      slogan: "你也有一段時間沒來了，近來還好嗎？",
      detail: ["調香師", "", "25歲 ", "188cm"],
      characteristic:
        "主角的香薰理療師，行蹤神祕，養了一隻皮毛油亮的貓叫「眠眠」。",
    },
  ];
  const roleButton = document.querySelectorAll(".role_people .people");
  const rolePopup = document.querySelector(".role_popup");
  const roleContent = document.querySelector(".role_popup .content");
  roleButton.forEach((item, index) => {
    let company = "";
    if (roleList[index].detail[1] !== "") {
      company = `<h1><span>所屬公司：</span><span>${roleList[index].detail[1]}</span></h1>`;
    }
    const innerHtml = `
  <div class="photo_wrapper"><div class="photo_border role${
    index + 1
  }"><img class="photo"src="images/role${index + 1}_peo.png" alt=""></div></div>
  <div class="name_bar">${roleList[index].name}</div>
  <div class="info">
    <h1 class="name">${roleList[index].name}</h1>
    <h1 class="slogan role${index + 1}">${roleList[index].slogan}</h1>
    <div class="detail">
      <h1><span>身份：</span><span>${
        roleList[index].detail[0]
      }</span></h1>${company}<h1><span>年齡：</span><span>${
      roleList[index].detail[2]
    }</span></h1>
      <h1><span>身高：</span><span>${roleList[index].detail[3]}</span></h1>
    </div>
    <h1 class="characteristic">${roleList[index].characteristic}</h1>
  </div>`;
    item.addEventListener("click", () => {
      roleContent.innerHTML = innerHtml;
      rolePopup.style.display = "flex";
      setTimeout(() => {
        rolePopup.style.opacity = "100";
      }, 50);
    });
  });
  // 彈窗關閉 button
  if (rolePopup) {
    const rolePopupClose = document.querySelector(".role_popup .popup_close");
    rolePopupClose.addEventListener("click", () => {
      rolePopup.style.opacity = "0";
      setTimeout(() => {
        rolePopup.style.display = "none";
      }, 300);
    });
    // 點擊遮罩overlay關閉彈窗
    const roleOverlay = document.querySelector(".role_popup_overlay");
    roleOverlay.addEventListener("click", () => {
      rolePopup.style.opacity = "0";
      setTimeout(() => {
        rolePopup.style.display = "none";
      }, 300);
    });
  }
  // --------------- 人脈經營 彈窗 --------------- 結束 //

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

// -------- 視聽劇院 點擊輪播開啟彈窗 -------- 開始 //
// 彈窗關閉 button
const videoPopup = document.querySelector(".video_popup");
// 點擊輪播開啟彈窗
const openVideoPopup = () => {
  videoPopup.style.display = "flex";
  setTimeout(() => {
    videoPopup.style.opacity = "100";
  }, 50);
};
const videoPopupClose = document.querySelector(".video_popup .popup_close");
if (videoPopupClose) {
  videoPopupClose.addEventListener("click", () => {
    closeVideo();
    videoPopup.style.opacity = "0";
    setTimeout(() => {
      videoPopup.style.display = "none";
    }, 300);
  });
  // 點擊遮罩overlay關閉彈窗
  const videoPopupOverlay = document.querySelector(
    ".video_popup .popup_overlay"
  );
  videoPopupOverlay.addEventListener("click", () => {
    closeVideo();
    videoPopup.style.opacity = "0";
    setTimeout(() => {
      videoPopup.style.display = "none";
    }, 300);
  });
}
// 關閉影片
const closeVideo = () => {
  let currentVideoId = "video1";
  let iframe = document.querySelector(`iframe#${currentVideoId}`).contentWindow;
  iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
};
// -------- 視聽劇院 點擊輪播開啟彈窗 -------- 結束 //


// const avatar_swiper = document.querySelector('.avatar_swiper .swiper-wrapper');
//   console.log('avatar_swiper', avatar_swiper);
//   let html = '';
//   for (let i = 2; i <= 104; i++) {
//     let imageName; if (i < 10) { imageName = '00' + i; } else if (i < 100) {
//       imageName = '0' +
//       i;
//     } else { imageName = i.toString(); } html += `<div class="swiper-slide">
// <img src="img/character/${imageName}.png" alt="">
// </div>`;
//   }
//   avatar_swiper.innerHTML = html;