// Particle Canvas setup

var options = {
  particleColor: '#999',
  background: 'images/header-bg.jpg',
  interactive: false,
  speed: 'slow',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(document.getElementById('header'), options);

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
