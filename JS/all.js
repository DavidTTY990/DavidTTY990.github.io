$(function () {
  // write jquery here
  // parallax.js
  $(".parallax-window01").parallax({ imageSrc: "img/cover-img1.webp" });
  $(".parallax-window02").parallax({ imageSrc: "img/cover-img1.webp" });

  // animatedModal.js
  $("#demo01").animatedModal({modalTarget:'modal-01'});

  // Hamburger menu
  $('.showmenu').on('click',  function(e){
    e.preventDefault();
    $('.indexmenu').toggleClass('menu-show');
});
  
  // scroll to top effect
  $(".scroll-top").on("click", function () {
    console.log("click");
    // $('html, body').scrollTop(0);
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() == 0) {
      $(".scroll-top").hide(0);
    } else if ($(this).scrollTop() > 200) {
      $(".scroll-top").fadeIn("fast");
    } else {
      $(".scroll-top").stop().fadeOut("fast");
    }
  });
});
