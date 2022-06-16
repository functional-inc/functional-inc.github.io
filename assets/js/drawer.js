(function () {
  $(".l-header__hum").click(() => {
    $(".l-header__hum").toggleClass("active");
    $("#g-nav").toggleClass("panelactive");
  });

  $("#g-nav a").click((event) => {
    event.stopPropagation();
    $(".l-header__hum").removeClass("active");
    $("#g-nav").removeClass("panelactive");
  });
})(document);
