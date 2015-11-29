'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('appController', function ($scope, $route, $location) {

  // On route change, update current page
  $scope.$on('$routeChangeSuccess', function ($currentRoute, $previousRoute) {
    $scope.currentPage = $route.current.title;
  });
  
  // Set nav items
  $scope.navItems = {
    'About': '/about',
    'Events': '#',
    'Jobs': '/jobs',
    'Support': '/support',
    'Tutorials': '#',
    'Blog': '#'
  };
});
