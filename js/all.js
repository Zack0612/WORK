!function (e)
{
    var t = {};
    function o(r)
    {
        if (t[r]) {
            return t[r].exports;
        }
        var n = t[r] = {
            i : r, l :!1, exports : {}
        };
        return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = e, o.c = t, o.d = function (e, t, r)
    {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable :!0, get : r
        })
    },
    o.r = function (e)
    {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, 
        {
            value : "Module"
        }), Object.defineProperty(e, "__esModule", {
            value :!0
        })
    },
    o.t = function (e, t)
    {
        if (1 & t && (e = o(e)), 8 & t) {
            return e;
        }
        if (4 & t && "object" == typeof e && e && e.__esModule) {
            return e;
        }
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable :!0, value : e
        }), 2 & t && "string" != typeof e) for (var n in e) o.d(r, n, function (t)
        {
            return e[t]
        }
        .bind(null, n));
        return r;
    },
    o.n = function (e)
    {
        var t = e && e.__esModule ? function ()
        {
            return e.default
        }
         : function ()
        {
            return e;
        };
        return o.d(t, "a", t), t;
    },
    o.o = function (e, t)
    {
        return Object.prototype.hasOwnProperty.call(e, t);
    },
    o.p = "", o(o.s = 0)
}
([function (e, t)
{
    document.querySelector(".menu_wrapper_mobile .close").addEventListener("click", (function ()
    {
        document.querySelector(".menu_wrapper_mobile").style.opacity = "0", document.querySelector(".menu_button").style.zIndex = "50";
        setTimeout((function ()
        {
            document.querySelector(".menu_wrapper_mobile").style.display = "none";
        }), 300)
    })), document.querySelectorAll(".go_page").forEach((function (e, t)
    {
        e.addEventListener("click", (function ()
        {
            document.querySelector(".menu_wrapper_mobile").style.opacity = "0", document.querySelector(".menu_button").style.zIndex = "50";
            setTimeout((function ()
            {
                document.querySelector(".menu_wrapper_mobile").style.display = "none";
            }), 300)
        }))
    })), document.querySelector(".menu_button").addEventListener("click", (function ()
    {
        document.querySelector(".menu_wrapper_mobile").style.display = "flex";
        setTimeout((function ()
        {
            document.querySelector(".menu_wrapper_mobile").style.opacity = "1", document.querySelector(".menu_button").style.zIndex = "40";
        }), 100)
    })), document.querySelector(".check_name").addEventListener("click", (function ()
    {
        var e = document.getElementById("name").value;
        "" === e ? alert("請先填寫名稱") : (localStorage.setItem("name", e), document.getElementById("answer").style.display = "flex", 
        setTimeout((function ()
        {
            document.getElementById("answer").classList.add("answer_show"), document.querySelector("h1.question").classList.add("question_show")
        }), 100))
    }));
    var o = [ {
        title : "Q1 比起菸酒，黛西更喜歡把錢拿去買什麼？", a1 : "波羅麵包", a2 : "咖哩飯", a3 : "馬鈴薯", a4 : "玉米", answer : "馬鈴薯"
    },
    {
        title : "Q2 哪種動物曾在貝洛妮卡的頭上休息過？", a1 : "貓咪", a2 : "蛇", a3 : "兔子", a4 : "老鷹", answer : "老鷹"
    },

    {
        title : "Q3 學生會長陪楊夏琳找尋的失蹤小狗狗名叫？", a1 : "亞歷山大", a2 : "克莉斯汀", a3 : "蓋布瑞爾", a4 : "伊莉莎白", answer : "亞歷山大"
    },

    {
        title : "Q4 找阿爾蒂做諮商，每幾分鐘就要給他一瓶巧克力香草牛奶？", a1 : "15分鐘", a2 : "10分鐘", a3 : "5分鐘", a4 : "3分鐘", answer : "10分鐘"
    }], r = 0, n = document.querySelectorAll(".answer_item");
    n.forEach((function (e)
    {
        e.addEventListener("click", (function ()
        {
            !function (e)
            {
                e === o[r].answer ? u("current") : u("wrong")
            }
            (this.children[1].innerText)
        }))
    }));
    var c = document.querySelector(".question"), l = document.querySelector(".answer_popup");
    function u(e)
    {
        "current" === e ? (document.querySelector(".result_current").classList.add("result_current_active"), 
        document.querySelector(".ribbon").classList.add("ribbon_show"), document.querySelector(".result_wrong").style.opacity = "0", 
        !0) : (document.querySelector(".result_current").classList.remove("result_current_active"), document.querySelector(".result_wrong").style.opacity = "1", 
        document.querySelector(".ribbon").classList.remove("ribbon_show"), !1), l.style.display = "block", 
        setTimeout((function ()
        {
            l.style.opacity = "1";
        }), 100)
    }
    var i = !0;
    document.querySelector(".close_result").addEventListener("click", (function (e)
    {
        var t;
        i && (i = !1, l.style.opacity = "0", setTimeout((function ()
        {
            l.style.display = "none";
        }), 300), 3 !== r ? r += 1 : setTimeout((function ()
        {
            var e;
            e = localStorage.name, document.querySelector(".user_name").style.opacity = "1", document.querySelector(".user_name .name").innerText = e, 
            document.querySelector(".result_wrapper .close").style.display = "none", document.querySelector(".result_wrapper .close_certificate").style.display = "block", 
            document.querySelector(".certificate").style.opacity = "1", document.querySelector(".imgDownload").style.display = "block", 
            document.querySelector(".result_current").classList.remove("result_current_active"), document.querySelector(".ribbon").classList.remove("ribbon_show"), 
            document.querySelector(".result_current").style.opacity = "0", document.querySelector(".result_wrong").style.opacity = "0", 
            l.style.display = "block", setTimeout((function ()
            {
                l.style.opacity = "1";
            }), 100)
        }), 300), t = r, c.innerText = o[t].title, n[0].children[1].innerText = o[t].a1, n[1].children[1].innerText = o[t].a2, 
        n[2].children[1].innerText = o[t].a3, n[3].children[1].innerText = o[t].a4), setTimeout((function ()
        {
            i = !0
        }), 400)
    })), document.querySelector(".close_certificate").addEventListener("click", (function (e)
    {
        i && (l.style.opacity = "0", document.querySelector(".result_wrapper .close").style.display = "block", 
        document.querySelector(".result_wrapper .close_certificate").style.display = "none", document.querySelector(".certificate").style.opacity = "0", 
        document.querySelector(".user_name").style.opacity = "0", document.querySelector(".imgDownload").style.display = "none", 
        setTimeout((function ()
        {
            l.style.display = "none";
        }), 300))
    }));
    new Swiper(".mySwiper", {
        loop :!0, navigation : {
            nextEl : ".swiper-button-next", prevEl : ".swiper-button-prev"
        }
    });
    var a = ["Err Orz", "Neko Huan", "Jon Johnson", "林振偉", "林振偉", "夏玥", "拉普蘭德的髮夾", "洪苡慈", "郭幽虎", "YoRu", 
    "YoRu", "YoRu", "陳心謙", "Ely Xiao", "白火鷹", "雪鈴是幻象的小金人", "Erica Wung", "繆詩詩", "何松軒", "Naielle lchigaya", 
    "Hao Tranquoc", "悠諾", "蔣家庭", "蕾魚叔叔", "Ling Wu", "Chiang Wen San", "Errol Edan", "張安賢", "Tina Kin", 
    "Ki Chen", "曹遊", "吳宇森", "郭鏟", "郭鏟", "陳安晨", "諸葛九", "譚俊文", "李育安", "宮咲世葉", "御川風鈴", "御川風鈴", "張篠", "紀野", 
    "徐薏翔", "Wayne Lai", "Wayne Lai", "白白", "紅拔蠟", "張尹碩"];
    document.querySelector(".author_name").innerHTML = a[0], document.querySelectorAll(".changeAuthor").forEach((function (e)
    {
        e.addEventListener("click", (function ()
        {
            console.log("click");
            var e = document.querySelector(".swiper-slide-active"), t = Number(e.getAttribute("data-swiper-slide-index"));
            document.querySelector(".author_name").innerHTML = a[t];
        }))
    }));
    document.querySelector(".collection_wrapper .cover").addEventListener("click", (function (e)
    {
        var t = document.querySelector(".swiper-slide-active"), o = Number(t.getAttribute("data-swiper-slide-index")) + 1;
        if (45 !== o && 46 !== o && 47 !== o && 48 !== o && 49 !== o)
        {
            var r = "./images/collection/".concat(o, ".jpg");
            document.querySelector(".collection_popup .photo").src = r, document.querySelector(".collection_popup").style.display = "block", 
            document.querySelector(".multiple_photo").style.display = "none", document.getElementById("video_wrapper").innerHTML = "", 
            setTimeout((function ()
            {
                document.querySelector(".collection_popup").style.opacity = "1";
            }), 100)
        }
        else if (45 === o)
        {
            var n = '<img src="./images/collection/'.concat(o, '_1.jpg" alt=""><img src="./images/collection/').concat(o, 
            '_2.jpg" alt=""><img src="./images/collection/').concat(o, '_3.jpg" alt="">');
            document.querySelector(".multiple_photo").innerHTML = n, document.querySelector(".multiple_photo").style.display = "flex", 
            document.querySelector(".collection_popup").style.display = "block", document.getElementById("video_wrapper").innerHTML = "", 
            setTimeout((function ()
            {
                document.querySelector(".collection_popup").style.opacity = "1";
            }), 100)
        }
        else
        {
            document.getElementById("video_wrapper").innerHTML = 
            {
                46 : '<iframe id="popup_video_44" width="100%" height="100%" src="https://www.youtube.com/embed/soA2_5WLV6s?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
                47 : '<iframe id="popup_video_45" width="100%" height="100%" src="https://www.youtube.com/embed/PQr0ihBuSnE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
                48 : '<iframe id="popup_video_46" width="100%" height="100%" src="https://www.youtube.com/embed/D7FIH80TafE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
                49 : '<iframe id="popup_video_47" width="100%" height="100%" src="https://www.youtube.com/embed/0b52Ok21Adk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
            [o], document.querySelector(".collection_popup").style.display = "block", document.querySelector(".multiple_photo").style.display = "none", 
            setTimeout((function ()
            {
                document.querySelector(".collection_popup").style.opacity = "1";
            }), 300)
        }
    })), document.querySelector(".collection_popup").addEventListener("click", (function ()
    {
        document.querySelector(".collection_popup .photo").src = "", document.querySelector(".collection_popup").style.opacity = "0", 
        document.getElementById("video_wrapper").innerHTML = "", setTimeout((function ()
        {
            document.querySelector(".collection_popup").style.display = "none";
        }), 300)
    })), document.querySelector(".imgDownload").addEventListener("click", (function ()
    {
        html2canvas(document.getElementById("certificate"), {
            backgroundColor : "null"
        }).then((function (e)
        {
            document.body.appendChild(e);
            var t = document.createElement("a");
            t.href = e.toDataURL("image/png").replace("image/png", "image/octet-stream"), t.download = "certificate.png", 
            t.click();
        }))
    }));
    new fullpage("#fullpage", 
    {
        anchors : ["headPage", "firstPage", "secondPage", "3rdPage", "4thPage", "5thPage"], afterLoad : function (e, 
        t, o)
        {
            "firstPage" === t.anchor && (console.log("play"), document.querySelector(".video_wrapper").innerHTML = '<iframe id="firstPageVideo" width="100%" height="100%"\nsrc="https://www.youtube.com/embed/rHinOk2dqhw?mute=1&autoplay=1&loop=1&autopause=0" title="YouTube video player"\nframeborder="0"\nallow="autoplay"\nallowfullscreen></iframe>', 
            document.getElementById("firstPageVideo").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', 
            "*"));
        },
        onLeave : function (e, t, o)
        {
            "firstPage" === e.anchor && (console.log("pause"), document.querySelector(".video_wrapper").innerHTML = "");
        }
    })
}]);