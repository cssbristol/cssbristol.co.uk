'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('footer', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: '/app/partials/footer/footerView.html'
  };
});
