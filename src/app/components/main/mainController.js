'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('mainController', function ($scope, yamlConverterService) {

  yamlConverterService.converter('featured').then(function (data) {
    this.featuredItems = data;
  }.bind(this));

});
