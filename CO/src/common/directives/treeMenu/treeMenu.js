/**
 * Created by hmchung on 7/22/14.
 */
(function () {
  'use strict';
  /**
   * @ngdoc directive
   * @name directive.treeMenu:treeMenu
   * @scope
   * @restrict E
   *
   * @description
   * ClearOne Tree component
   *
   * @param {object} model A field object
   *
   */

  angular
    .module('directive.treeMenu', [])
    .directive('treeMenu', treeMenu);

  treeMenu.$inject = ['$window'];

  /* @ngInject */
  function treeMenu($window) {
    // Usage: <tree-menu model="{object}"> </tree-menu>
    // 
    // Creates:
    // 
    var directive = {
      template: 'dfdsfasdfasdf',
      controller: ctrl,
      link: link,
      scope: {
        model: '=model'
      },
      restrict: 'A'
    };
    return directive;

    function ctrl($scope){
//      treeMenuService.checkboxTreeFunc();
    }

    function link(scope, element, attrs) {
    }
  }
})();

//template: '<li  class="folder" folder ng-repeat="_folder in model.folders"></li>' +
//'<li  class="file" file ng-repeat="_file in model.files"></li>',