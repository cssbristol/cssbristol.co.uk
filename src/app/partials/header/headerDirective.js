'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('header', function () {
  return {
    restrict: 'A',
    replace: false,
    templateUrl: '/app/partials/header/headerView.html',
    controller: 'headerController',
    controllerAs: 'header'
  };
});
