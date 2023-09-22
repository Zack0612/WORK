window.onload = function () {
    const cards = document.querySelectorAll(".card");

    const popup = document.querySelector(".popup");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            console.log(card);
            popup.style.display = "flex";
            setTimeout(() => {
                popup.style.opacity = "100";
            }, 50);
            if (popup) {
                const popupClose = document.querySelector(".popup .popup_close");
                popupClose.addEventListener("click", () => {
                    popup.style.opacity = "0";
                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 300);
                });
                // 點擊遮罩overlay關閉彈窗
                const roleOverlay = document.querySelector(".popup_overlay");
                roleOverlay.addEventListener("click", () => {
                    popup.style.opacity = "0";
                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 300);
                });
            }
        });
    });

  // ---------- 手機版選單 ---------- 開始 //
  const hamburger = document.querySelector(".hamburger");
  const iconLink = document.querySelector(".icon-link");
  hamburger.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      // close the menu
      hiddenNav();
    } else {
      hamburger.style.opacity = "0";
      iconLink.style.display = "flex";
      setTimeout(() => {
        hamburger.style.display = "none";
        iconLink.style.opacity = "100";
      }, 100);
    }
  });

  // ---------- 手機版選單 ---------- 結束 //
};

function hiddenNav(){
    const hamburger = document.querySelector(".hamburger");
    const iconLink = document.querySelector(".icon-link");
    hamburger.style.display = "flex";
    iconLink.style.opacity = "0";
    setTimeout(() => {
      hamburger.style.opacity = "100";
      iconLink.style.display = "none";
    }, 300);
}
