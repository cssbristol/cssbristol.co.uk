'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('sponsors', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: '/app/partials/sponsors/sponsorView.html',
    controller: 'sponsorController',
    controllerAs: 'sponsors'
  };
});
