'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('sponsorController', function ($scope, yamlConverterService) {

  yamlConverterService.converter('sponsors').then(function (data) {
    this.sponsors = data;
  }.bind(this));

});
