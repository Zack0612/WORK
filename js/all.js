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
};
