'use strict';

/* Config & routing */

var cssApp = angular.module('cssApp', ['ngRoute', 'ngAnimate']);

cssApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/components/main/mainView.html',
      controller: 'mainController',
      controllerAs: 'main',
      title: ''
    })
    .when('/about', {
      templateUrl: '/app/components/about/aboutView.html',
      controller: 'aboutController',
      controllerAs: 'about',
      title: 'About Us'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});
