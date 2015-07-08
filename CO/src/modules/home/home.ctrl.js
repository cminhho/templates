/**
 * Created by hmchung on 5/9/2015.
 */
(function () {
	'use strict';
  /**
   * @ngdoc controller
   * @name module.home:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller for home.html template.
   * @requires $scope, HistoryResource
   */

	angular
		.module('module.home.controller', [])
		.controller('HomeCtrl', HomeCtrl)
    .controller('ChooseDevice', ChooseDevice)
    .controller('AddDevice', AddDevice);

	HomeCtrl.$inject = ['$scope', 'HistoryResource', 'ModalService'];

  /* @ngInject */
	function HomeCtrl($scope, HistoryResource, ModalService) {
    $scope.data = HistoryResource.get();

    $scope.addDevice = function(data){
      $scope.type = data;
      ModalService.showModal({
        templateUrl: 'src/modules/layout/modal/addDevice.html',
        controller: 'AddDevice'
      }).then(function () {});
    };


    $scope.open = function(){
      ModalService.showModal({
        templateUrl: 'src/modules/layout/modal/chooseDevice.html',
        controller: 'ChooseDevice'
      }).then(function (data) {
        $scope.addDevice(data);
      });
    };



	}


  function ChooseDevice($scope, $modalInstance){

    $scope.ok = function () {
      $modalInstance.close('device1');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

  function AddDevice($scope, $modalInstance){

    $scope.ok = function () {
      $modalInstance.close('device1');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
})();
