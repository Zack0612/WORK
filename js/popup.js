/*!-------   20231024更新     --------*/

$(".popup-btn,.menu-icon").click(function (e) {
  e.preventDefault();
  $("html").toggleClass("overhidden");
  var href = $(this).attr("href");
  $(href).fadeIn(250);
  // $(href)
  //   .children$("popup-box")
  //   .removeClass("transform-out")
  //   .addClass("transform-in");
  // e.preventDefault();
  
});

$(".popup-btn").click(function (e) {
  e.preventDefault();
  $("html").addClass("overhidden");
});

$(".popup-close").click(function (e) {
  e.preventDefault();
  closeWindow();
  $("html").removeClass("overhidden");
});

function closeWindow() {
  $(".popup-wrap").fadeOut(200);
  $(".popup-box").removeClass("transform-in").addClass("transform-out");
}
