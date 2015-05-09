/**
 * Created by hmchung on 5/9/2015.
 */
(function () {
	'use strict';
	/**
	 * @ngdoc function
	 * @name ClearOneApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the ClearOneApp
	 */

	angular
		.module('module.home.controller', [])
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = [];

	/* @ngInject */
	function HomeCtrl() {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;
		vm.title = 'homeCtrl';

		activate();

		////////////////

		function activate() {
		}
	}
})();