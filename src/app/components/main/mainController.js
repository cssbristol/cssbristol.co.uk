'use strict';

var cssApp = angular.module('cssApp');

cssApp.controller('mainController', function ($scope, yamlConverterService) {

  yamlConverterService.converter('featured').then(function (data) {
    this.featuredItems = data;
  }.bind(this));
  

  // this.featuredItems = [
  //   {
  //     title: 'BAML Tech Presentation BAML Tech Presentation BAML Tech Presentation',
  //     meta: 'November 12th, 7pm',
  //     type: 'event',
  //     link: 'hello'
  //   },
  //   {
  //     title: 'SmileMachine is recruiting!',
  //     meta: 'Deadline: December 5th, 11pm',
  //     type: 'job',
  //     link: 'poo'
  //   },
  //   {
  //     title: 'Ammeon is recruiting!',
  //     type: 'job'
  //   },
  //   {
  //     title: 'Using Sublime in the Linux Labs',
  //     meta: 'by Rob Briggs',
  //     type: 'tutorial'
  //   },
  //   {
  //     title: 'Wriggle Talk',
  //     meta: 'October 21st, 6.30pm',
  //     type: 'event'
  //   },
  //   {
  //     title: 'Super Smash Barcrawl',
  //     meta: 'December 2nd, 6.30pm',
  //     type: 'event'
  //   },
  //   {
  //     title: 'Outreach - trip to my school',
  //     meta: 'by Sam Healer',
  //     type: 'blog'
  //   }
  // ];

});
