/**
 * Created by hmchung on 5/9/2015.
 */
(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name module.home:HomeConfig
	 * @description
	 * # HomeConfig
	 * Config of the module.home
	 */
	angular
		.module('module.home', [
			'ui.router',
			'module.home.controller'
		])
		.config(HomeConfig);

	function HomeConfig($stateProvider) {
		$stateProvider.state( 'Dashboard', {
			url: '/',
			views: {
				'@': {
					controller: 'HomeCtrl',
					templateUrl: 'src/modules/home/home.html'
				}
			}
		});
	}
})();