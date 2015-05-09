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
	'ui.router'
]);

// Define all your re-usable components
angular.module('app.resources', []);
angular.module('app.securities', []);
angular.module('app.services', []);
angular.module('app.directives', []);

// Define your modules to contain all your module 
angular.module('app.modules', [
	'module.home',
	'module.about'
]);

// Main module of the application.
angular.module('ClearOneApp', [
	'app.third-party',
	'app.resources',
	'app.securities',
	'app.directives',
	'app.run',
	'app.config',
	'app.ctrl',
	'app.modules'
]);
