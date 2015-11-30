'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('eventOnFinish', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit(attrs.eventOnFinish);
        });
      }
    }
  }
}]);
