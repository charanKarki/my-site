$(document).ready(function() {
  window.addEventListener("scroll", function() {
    if (scrollY >= 568) {
      $("nav").removeClass("transparent");
      $("nav").addClass("bg-light");
    } else {
      $("nav")
        .removeClass("bg-light")
        .addClass("transparent");
    }
  });
});
