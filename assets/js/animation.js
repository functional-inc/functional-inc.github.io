// <!-- ヘッダーアニメーション -->
(function () {
  const header = document.getElementsByClassName("l-header__inner")[0];
  const headerNavigations = document.getElementsByClassName("l-header__list");
  const [home, mission, company, recruit] = headerNavigations;
  const targetNavigations = [home, mission, company, recruit];
  const styling = () => {
    scrollPosition = window.pageYOffset;
    if (scrollPosition > 1) {
      const alpha = (0.1 * scrollPosition) / 10;
      const headerBgColor = `rgba(255,255,255,${alpha > 1 ? 1 : alpha})`;
      header.style.backgroundColor = headerBgColor;
      header.style.boxShadow = "0 0.5vw 0.5vw rgba(0, 0, 0, 0.1)";
      for (const item of targetNavigations) {
        item.children[0].style.color = "#5dc1cf";
        item.children[0].classList.remove("top-a");
        item.children[0].classList.add("scroll-a");
      }
    } else {
      header.style.backgroundColor = "";
      header.style.boxShadow = "";
      for (const item of targetNavigations) {
        item.children[0].style.color = "";
        item.children[0].classList.add("top-a");
        item.children[0].classList.remove("scroll-a");
      }
    }
  };
  styling();
  window.onscroll = styling;
})(document);

// <!-- ボタンアニメーション -->
(function () {
  // SP Welfareアコーディオン
  $(".btn-maney").click(() => {
    $(".detail-maney").toggleClass("active");
  });
  $(".btn-guarantee").click(() => {
    $(".detail-guarantee").toggleClass("active");
  });
  $(".btn-vacation").click(() => {
    $(".detail-vacation").toggleClass("active");
  });
  $(".btn-support").click(() => {
    $(".detail-support").toggleClass("active");
  });
  $(".btn-study").click(() => {
    $(".detail-study").toggleClass("active");
  });
})(document);
