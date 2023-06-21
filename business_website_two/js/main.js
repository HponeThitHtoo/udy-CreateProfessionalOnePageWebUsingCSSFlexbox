$(document).ready(function () {
  smoothScroll();
  onScroll();
  mobileMenu();
});

function smoothScroll() {
  $('a[href^="#"]').click(function () {
    mainMenuHeight = jQuery(".main-menu").innerHeight();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - mainMenuHeight,
      },
      1000
    );
  });
}

function onScroll() {
  var sections = $(".section");
  var mainMenu = $(".main-menu");
  var mainMenuHeight = $(".main-menu").innerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - mainMenuHeight;

      if (cur_pos >= top) {
        mainMenu.find("a").removeClass("active");
        mainMenu
          .find('a[href="#' + $(this).attr("id") + '"]')
          .addClass("active");
      }
    });
  });
}

function mobileMenu() {
  jQuery(".menu-icon").on("click", function () {
    jQuery(".menu-icon").toggleClass("change");
    jQuery(".mobile-nav").toggleClass("active");
  });

  jQuery("ul.mobile-nav li a").on("click", function () {
    jQuery(".menu-icon").removeClass("change");
    jQuery(".mobile-nav").removeClass("active");
  });
}
