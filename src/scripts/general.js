// Menu icon event handler

var navOpen = $('#nav-open');
var navClose = $('#nav-close');
var collapsedNav = $('#collapsed-header');

navOpen.on('click', function () {
  navOpen.fadeOut();
  collapsedNav.fadeIn();
});

navClose.on('click', function () {
  collapsedNav.fadeOut();
  navOpen.fadeIn().css('display', '');
});

$(window).resize(function () {
  if ($(window).width() > 950) {
    navOpen.css('display', '');
    collapsedNav.fadeOut();
  }
});
