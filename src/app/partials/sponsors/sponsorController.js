'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('sponsorController', ['$scope', 'yamlService', function ($scope, yamlService) {

  yamlService.fetch('sponsors').then(function (data) {
    this.sponsors = data;
  }.bind(this));

}]);
