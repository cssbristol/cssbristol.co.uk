'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('particleNetwork', function () {
  return {
    // Restrict it to be an attribute in this case
    restrict: 'A',
    // responsible for registering DOM listeners as well as updating the DOM
    link: function (scope, element, attrs) {
      var options = {
        particleColor: '#999',
        background: 'assets/images/header-bg.jpg',
        interactive: false,
        speed: 'none',
        density: 'high'
      };
      var particleNetwork = new ParticleNetwork(element[0], options);
    }
  };
});
