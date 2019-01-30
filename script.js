$(document).ready(function () {
  window.addEventListener("scroll", function () {
    if ((scrollY >= 668 && window.innerWidth > 750) || (scrollY >= 213 && window.innerWidth <= 750) || (scrollY >= 295 && window.innerWidth <= 400)) {
      $("nav")
        .addClass("bg-light")
        .removeClass("transparent");
      if (window.innerWidth <= 575) {
        $("nav").removeClass("hvr-overline-from-center")
      }

    } else {
      $("nav")
        .removeClass("bg-light")
        .addClass("transparent");


    }
  });
});