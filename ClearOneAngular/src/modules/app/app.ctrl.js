/**
 * Created by hmchung on 5/9/2015.
 */
(function(){
	'use strict';

	/**
	 * @ngdoc overview
	 * @name ClearOneApp:app.ctrl
	 * @description
	 * # app.ctrl
	 *
	 * Main controller of the application.
	 */
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
})();