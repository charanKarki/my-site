$(document).ready(function () {
  // animation to jumbotron in header
  TweenLite.from("#headjumbo", 1, {
    top: 0,
    opacity: 0
  })
  TweenLite.from("#user", 1, {
    right: -100,
    opacity: 0,

  });

  // scrolling event for navbar scroll
  TweenLite.to(window, 2, {
    scrollTo: 400
  });
  window.addEventListener("scroll", function () {
    if (
      (scrollY >= 668 && window.innerWidth > 750) ||
      (scrollY >= 213 && window.innerWidth <= 750) ||
      (scrollY >= 295 && window.innerWidth <= 400)
    ) {
      $("nav")
        .addClass("bg-light")
        .removeClass("transparent");
      if (window.innerWidth <= 575) {
        $("nav").removeClass("hvr-overline-from-center");
      }
    } else {
      $("nav")
        .removeClass("bg-light")
        .addClass("transparent");
    }

    $("#scroller").click(function () {
      $(document).scrollTop(0);
    });
  });
  // carousel slider for order section

  $("#owl1").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
  });
  $("#owl2").owlCarousel({
    loop: true,
    margin: 10,
    autoplayHoverPause: true,
    autoplay: true,

    responsive: {
      0: {
        items: 1
      },

      1000: {
        items: 3
      }
    }
  });

});