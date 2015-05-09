'use strict';

/**
 * @ngdoc function
 * @name module.about:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the module.about
 */
angular.module( 'module.about', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'src/modules/about/about.html'
      }
    }
  });
})

  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
