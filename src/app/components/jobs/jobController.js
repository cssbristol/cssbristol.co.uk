'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('jobController', ['$scope', 'yamlService', function ($scope, yamlService) {

  yamlService.fetch('jobs').then(function (data) {
    this.jobList = data;
  }.bind(this));

}]);
