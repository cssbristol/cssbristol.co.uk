'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('isotope', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var isotope = new Isotope(element[0], {
        itemSelector: attrs.isotopeSelector,
        percentPosition: true,
        masonry: {
          gutter: 45
        }
      });
    }
  };
});
