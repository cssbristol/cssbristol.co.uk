// Particle Canvas setup

var options = {
  particleColor: '#999',
  background: 'images/header-bg.jpg',
  interactive: false,
  speed: 'none',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(document.getElementById('header'), options);
