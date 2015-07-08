/**
 * Created by hmchung on 5/9/2015.
 */
(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name module.devices:DevicesConfig
   * @description
   * Config of the module.devices
   * # DevicesConfig
   * state: /devices
   */
  angular
    .module('module.devices', [
      'ui.router',
      'module.devices.controller'
    ])
    .config(DevicesConfig);

  function DevicesConfig($stateProvider) {
    $stateProvider.state( 'devices', {
      url: '/devices',
      views: {
        '@': {
          controller: 'DevicesCtrl',
          templateUrl: 'src/modules/devices/devices.html'
        }
      }
    });
  }
})();