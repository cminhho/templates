/**
 * Created by hmchung on 5/9/2015.
 */
(function () {
  'use strict';

  var ModalService = function($modal){
    var modalOptions = {
      headerText: '',
      bodyText: '',
      bodyUrl: '',
      actionButtonText: 'OK',
      closeButtonText: 'Cancel'
    };

    var modalDefaults = {
      backdrop: true,
      size: 'lg',
      keyboard: true,
      modalFade: true,
      templateUrl: 'src/modules/layout/modal/default.html'
    };

    this.showModal = function (customModalDefaults, customModalOptions) {
      if (!customModalDefaults) customModalDefaults = {};
      customModalDefaults.backdrop = 'static';
      return this.show(customModalDefaults, customModalOptions);
    };

    this.show = function (customModalDefaults, customModalOptions) {
      //Create temp objects to work with since we're in a singleton service
      var tempModalDefaults = {};
      var tempModalOptions = {};

      //Map angular-ui modal custom defaults to modal defaults defined in service
      angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

      //Map modal.html $scope custom properties to defaults defined in service
      angular.extend(tempModalOptions, modalOptions, customModalOptions);

      if (!tempModalDefaults.controller) {
        tempModalDefaults.controller = function ($scope, $modalInstance) {
          $scope.modalOptions = tempModalOptions;
          $scope.modalOptions.ok = function (result) {
            $modalInstance.close(result);
          };
          $scope.modalOptions.close = function (result) {
            $modalInstance.dismiss('cancel');
          };
        }
      }

      if(tempModalOptions.submit) return $modal.open(tempModalDefaults);
      return $modal.open(tempModalDefaults).result;
    };

  };

  angular.module('service.modalService', [])
    .service('ModalService', ModalService);
})();
