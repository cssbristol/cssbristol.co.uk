'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('headerController', ['$scope', '$window', function ($scope, $window) {

  this.showCollapsed = false;
  
  // Width change listener
  var w = angular.element($window);

  w.bind('resize', function () {
    if ($window.innerWidth > 1050) {
      this.showCollapsed = false;
      $scope.$apply();
    }
  }.bind(this));

}]);
