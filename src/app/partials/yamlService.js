'use strict';

var cssApp = angular.module('cssApp');

cssApp.factory('yamlService', ['$http', '$filter', function ($http, $filter) {

  // Get filename from type
  var getFileName = function (type) {
    if (type === 'featured') {
      return 'featuredItems.json';
    }
    else if (type === 'sponsors') {
      return 'sponsors.json';
    }
    else if (type === 'jobs') {
      return 'allJobs.json';
    }

    return '';
  };

  // Parse data based on type
  var tagMap = {
    'Year 1': { abbr: 'yr1', tag: 'Yr 1' },
    'Year 2': { abbr: 'yr2', tag: 'Yr 2' },
    'Year 3': { abbr: 'yr3', tag: 'Yr 3' },
    'Year 4': { abbr: 'yr4', tag: 'Yr 4' },
    'Postgrad': { abbr: 'pg', tag: 'Postgrad' }
  };

  var parseData = function (type, data) {

    var i;

    if (type === 'featured') {

      for (i = 0; i < data.length; i++) {
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
    }
    else if (type === 'jobs') {

      for (i in data) {

        // Get job creation from file name
        data[i].created = i.substring(0, i.lastIndexOf('-'));

        // Update allowed tags
        for (var j = 0; j < data[i].allowed.length; j++) {
          var tagVal = tagMap[data[i].allowed[j]];
          data[i].allowed[j] = tagVal.abbr;
          data[i].tags.push(tagVal.tag);
        }

      }
    }

    return data;
  };

  // Public fetch method
  var fetch = function (type) {
    
    var fileName = '/data/dist/' + getFileName(type);

    return $http.get(fileName).then(function (response) {
      return parseData(type, response.data);
    });
  };

  return {
    fetch: fetch
  };
}]);
