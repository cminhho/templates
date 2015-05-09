/**
 * Created by hmchung on 5/9/2015.
 */
(function(){
	'use strict';

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
})();