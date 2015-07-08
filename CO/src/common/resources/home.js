/**
* Created by hmchung on 5/9/2015.
*/
(function () {
  'use strict';
  var HistoryResource = function ($resource) {
    var HistoryResource = $resource('/api/operations/:name',
      { taskId: '@id' },
      {
        query: {isArray: false}
      }
    );
    return HistoryResource;
  };
  angular.module('resource.history', [])
    .factory('HistoryResource', HistoryResource)
}());
