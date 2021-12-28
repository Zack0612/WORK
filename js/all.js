
document.querySelector('.menu_wrapper_mobile .close').addEventListener('click', () => {
    document.querySelector('.menu_wrapper_mobile').style.opacity = '0';
    document.querySelector('.menu_button').style.zIndex = '50';
    let fadeOut = setTimeout(() => {
        document.querySelector('.menu_wrapper_mobile').style.display = 'none';
    }, 300)
})
const goPageButton = document.querySelectorAll('.go_page');
goPageButton.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.menu_wrapper_mobile').style.opacity = '0';
        document.querySelector('.menu_button').style.zIndex = '50';
        let fadeOut = setTimeout(() => {
            document.querySelector('.menu_wrapper_mobile').style.display = 'none';
        }, 300)
    })
})
document.querySelector('.menu_button').addEventListener('click', () => {
    document.querySelector('.menu_wrapper_mobile').style.display = 'flex';
    let fadeIn = setTimeout(() => {
        document.querySelector('.menu_wrapper_mobile').style.opacity = '1';
        document.querySelector('.menu_button').style.zIndex = '40';
    }, 100)
})




function checkName() {
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('請先填寫名稱');
    } else {
        // 記錄名稱
        localStorage.setItem('name', name);
        document.getElementById('answer').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('answer').classList.add('answer_show');
            document.querySelector('h1.question').classList.add('question_show');
        }, 100)
    }
}

// 題目列表
const questionList = [
    {
        'title': 'Q1 比起菸酒，黛西更喜歡把錢拿去買什麼？',
        'a1': '波羅麵包',
        'a2': '咖哩飯',
        'a3': '馬鈴薯',
        'a4': '玉米',
        'answer': '馬鈴薯'

    },
    {
        'title': 'Q2 哪種動物曾在貝洛妮卡的頭上休息過？',
        'a1': '貓咪',
        'a2': '蛇',
        'a3': '兔子',
        'a4': '老鷹',
        'answer': '老鷹'

    },
    {
        'title': 'Q3 學生會長陪楊夏琳找尋的失蹤小狗狗名叫？',
        'a1': '亞歷山大',
        'a2': '克莉斯汀',
        'a3': '蓋布瑞爾',
        'a4': '伊莉莎白',
        'answer': '亞歷山大'

    },
    {
        'title': 'Q4 找阿爾蒂做諮商，每幾分鐘就要給他一瓶巧克力香草牛奶？',
        'a1': '15分鐘',
        'a2': '10分鐘',
        'a3': '5分鐘',
        'a4': '3分鐘',
        'answer': '10分鐘'
    },
]

// 預設當前顯示第一題
let questionIndex = 0;
const answerList = document.querySelectorAll('.answer_item');
answerList.forEach(item => {
    item.addEventListener('click', function () {
        const currentAnswer = this.children[1].innerText;
        checkAnswer(currentAnswer);
    })
})

// 是否切換下一題
let isChangeQuestion = false;
const title = document.querySelector('.question');
const answerPopup = document.querySelector('.answer_popup');

// 檢查答案
function checkAnswer(currentAnswer) {
    if (currentAnswer === questionList[questionIndex].answer) {
        answerPopupHandler('current');
    } else {
        answerPopupHandler('wrong');
    }
}

// 答題結果彈窗
function answerPopupHandler(result) {
    if (result === 'current') {
        document.querySelector('.result_current').classList.add('result_current_active');
        document.querySelector('.ribbon').classList.add('ribbon_show');
        document.querySelector('.result_wrong').style.opacity = '0';
        isChangeQuestion = true;
    } else {
        document.querySelector('.result_current').classList.remove('result_current_active');
        document.querySelector('.result_wrong').style.opacity = '1';
        document.querySelector('.ribbon').classList.remove('ribbon_show');
        isChangeQuestion = false;
    }
    answerPopup.style.display = 'block';
    setTimeout(() => {
        answerPopup.style.opacity = '1';
    }, 100)
}

// 是否可點擊關閉按鈕
let isClose = true;
// 關閉結果彈窗
function closePopup(val) {
    if (isClose) {
        isClose = false;
        if (val === 1) {
            answerPopup.style.opacity = '0';
            setTimeout(() => {
                answerPopup.style.display = 'none';
            }, 300);
            // 是否切換下一題
            if (isChangeQuestion) {
                if (questionIndex !== 3) {
                    questionIndex += 1;
                } else {
                    setTimeout(() => {
                        showCertificate();
                    }, 300);
                }
                changeQuestion(questionIndex);
            }
        } else {
            answerPopup.style.opacity = '0';
            document.querySelector('.result_wrapper .close').style.display = 'block';
            document.querySelector('.result_wrapper .close_certificate').style.display = 'none';
            document.querySelector('.certificate').style.opacity = '0';
            document.querySelector('.user_name').style.opacity = '0';
            setTimeout(() => {
                answerPopup.style.display = 'none';
            }, 300);
        }
    }
    setTimeout(() => {
        isClose = true
    }, 400);
}

// 最後一題答對秀獎狀
function showCertificate() {
    // 秀出名稱
    const userName = localStorage.name;
    document.querySelector('.user_name').style.opacity = '1';
    document.querySelector('.user_name').innerText = userName;
    // 秀出證書及隱藏對與錯圖示
    document.querySelector('.result_wrapper .close').style.display = 'none';
    document.querySelector('.result_wrapper .close_certificate').style.display = 'block';
    document.querySelector('.certificate').style.opacity = '1';
    document.querySelector('.result_current').classList.remove('result_current_active');
    document.querySelector('.ribbon').classList.remove('ribbon_show');
    document.querySelector('.result_wrong,.result_current').style.opacity = '0';
    answerPopup.style.display = 'block';
    setTimeout(() => {
        answerPopup.style.opacity = '1';
    }, 100)
}

// 切換題目
function changeQuestion(index) {
    title.innerText = questionList[index].title;
    answerList[0].children[1].innerText = questionList[index].a1;
    answerList[1].children[1].innerText = questionList[index].a2;
    answerList[2].children[1].innerText = questionList[index].a3;
    answerList[3].children[1].innerText = questionList[index].a4;
}


// 作品集輪播
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 作品集彈窗
const swiperItem = document.querySelectorAll('.swiper-slide')
swiperItem.forEach(item => {
    item.addEventListener('click', function () {
        const index = Number(this.getAttribute('data-swiper-slide-index')) + 1;
        if (index !== 8 && index !== 10 && index !== 20) {
            const img = `./images/collection/${index}.jpg`;
            document.querySelector('.collection_popup .photo').src = img;
            document.querySelector('.collection_popup').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.collection_popup').style.opacity = '1';
            }, 100)
        }
    })
})

document.querySelector('.collection_popup').addEventListener('click', function () {
    document.querySelector('.collection_popup .photo').src = '';
    document.querySelector('.collection_popup').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.collection_popup').style.display = 'none';
    }, 300)
})

let video;
let isPlay = true;
document.querySelector('.collection_wrapper .cover').addEventListener('click', function (event) {
    const currentSwiper = document.querySelector('.swiper-slide-active');
    const index = Number(currentSwiper.getAttribute('data-swiper-slide-index')) + 1;
    if (index !== 8 && index !== 10 && index !== 20) {
        const img = `./images/collection/${index}.jpg`;
        document.querySelector('.collection_popup .photo').src = img;
        document.querySelector('.collection_popup').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.collection_popup').style.opacity = '1';
        }, 100)
    } else {
        video = document.getElementById(`video_${index}`);
        if (isPlay) {
            video.play();
        } else {
            video.pause();
        }
        isPlay = !isPlay;
    }
})
// 點擊左右箭頭，停止播放影片
const arrowList = document.querySelectorAll('.pauseVideo');
arrowList.forEach(item => {
    item.addEventListener('click', function () {
        if (video) {
            video.pause();
        }
    })
})