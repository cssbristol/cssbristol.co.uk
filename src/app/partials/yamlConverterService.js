'use strict';

var cssApp = angular.module('cssApp');

cssApp.factory('yamlConverterService', function ($http, $filter) {

  // Get filename from type
  var getFileName = function (type) {
    if (type === 'featured') {
      return '/data/featuredItems.yaml';
    }
    return '';
  };

  // Parse data based on type
  var parseData = function (type, data) {
    if (type === 'featured') {

      var featuredItems = [];

      for (var i = 0; i < data.length; i++) {
        // Amend author if exists
        if (data[i].author) {
          data[i].meta = 'By ' + data[i].author;
        }
        // Else if date
        else if (data[i].date) {
          data[i].date = $filter('date')(data[i].date, 'MMM d, h:mma');
          data[i].meta = (data[i].type === 'job') ? 'Deadline: ' + data[i].date : data[i].date;
        }
      }

      return data;
    }
  }

  // Public converter method
  var converter = function (type) {
    
    var fileName = getFileName(type);

    return $http.get(fileName).then(function (response) {
      return parseData(type, jsyaml.load(response.data));
    });
  };

  return {
    converter: converter
  };
});