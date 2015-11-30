'use strict';

var cssApp = angular.module('cssApp');

cssApp.directive('isotopeWrapper', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
     
      scope.currSort = 'order';
      scope.currFilter = '';

      var searchRegex;

      var isotope;

      scope.$on('isotopeReady', function (isotopeReady) {
        isotope = new Isotope(document.querySelector(attrs.isotopeContainer), {
          itemSelector: attrs.isotopeSelector,
          percentPosition: true,
          masonry: {
            gutter: 45
          },
          getSortData: {
            order: '[data-job-created]',
            deadline: function (item) {
              var deadline = item.getAttribute('data-job-deadline');
              return deadline === 'ASAP' ? 0 : Date.parse(deadline);
            }
          },
          sortBy: scope.currSort,
          sortAscending: false,
          filter: function (item) {

            // Basic year filtering
            if (scope.currFilter !== '' && item.className.split(' ').indexOf(scope.currFilter) === -1) {
              return false;
            }

            // Filter based on search query
            return searchRegex ? item.innerText.match(searchRegex) : true;
          }
        });
      });

      scope.sortBy = function (type) {

        // Validate type
        if (type !== 'deadline') {
          type = 'order';
        }

        var sortAsc = type === 'deadline';

        isotope.arrange({ sortBy: type, sortAscending: sortAsc });
        scope.currSort = type;
      };

      scope.filterBy = function (year) {

        // Validate type
        if (year !== 'yr1' && year !== 'yr2' && year !== 'yr3' && year !== 'yr4' && year !== 'pg') {
          year = '';
        }

        scope.currFilter = year;
        isotope.arrange();
        
      };

      scope.textFilter = function () {
        searchRegex = new RegExp(scope.searchInput, 'gi');
        isotope.arrange();
      };
      
    }
  };
}]);
