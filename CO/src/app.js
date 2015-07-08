/**
 * Created by hmchung on 5/9/2015.
 */
'use strict';

/**
 * @ngdoc overview
 * @name ClearOneApp
 * @description
 * # ClearOneApp
 */

// 3rd Party Modules 
angular.module('app.third-party', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'restangular',
  'ui.bootstrap'
]);

// Define all your re-usable components
angular.module('app.resources', [
  'resource.history'
]);
angular.module('app.securities', []);
angular.module('app.services', [
  'service.modalService'
]);
angular.module('app.directives', [
  'directive.dynamicTemplate'
]);

// Define your modules to contain all your module 
angular.module('app.modules', [
  'module.home',
  'module.devices'
]);

// Main module of the application.
angular.module('ClearOneApp', [
  'app.third-party',
  'app.resources',
  'app.services',
  'app.securities',
  'app.directives',
  'app.run',
  'app.config',
  'app.ctrl',
  'app.modules'
]);


/**
 * @ngdoc overview
 * @name ClearOneApp:app.config
 * @description
 * # app.config
 *
 * Main config of the application.
 */
angular
  .module('app.config', [])
  .config(myAppConfig);

function myAppConfig($urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

/**
 * @ngdoc overview
 * @name ClearOneApp:app.config
 * @description
 * # app.config
 *
 * Main run of the application.
 */
angular
  .module('app.run', [])
  .run(myAppRun);

function myAppRun(){
}

angular
  .module('app.ctrl', [])
  .controller('AppCtrl', AppCtrl);

function AppCtrl($scope){
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState['name'] ) ) {
      document.title = toState['name'];
    }
  });
}