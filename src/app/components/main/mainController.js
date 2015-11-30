'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('mainController', ['$scope', 'yamlService', function ($scope, yamlService) {

  yamlService.fetch('featured').then(function (data) {
    this.featuredItems = data;
  }.bind(this));

}]);
