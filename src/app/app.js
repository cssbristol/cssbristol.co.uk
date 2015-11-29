'use strict';

/* Config & routing */

var cssApp = angular.module('cssApp', ['ngRoute', 'ngAnimate']);

cssApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/components/main/mainView.html',
      controller: 'mainController',
      controllerAs: 'main',
      title: ''
    })
    .when('/about', {
      templateUrl: '/app/components/about/aboutView.html',
      title: 'About Us'
    })
    .when('/support', {
      templateUrl: '/app/components/support/supportView.html',
      title: 'Support'
    })
    .when('/jobs', {
      templateUrl: '/app/components/jobs/jobView.html',
      title: 'Job Openings'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
}]);
