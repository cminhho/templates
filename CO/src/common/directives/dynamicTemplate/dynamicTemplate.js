/**
 * Created by hmchung2 on 5/13/15.
 */
(function () {
  'use strict';
  /**
   * @ngdoc directive
   * @name directive.dynamicTemplate:dynamicTemplate
   * @scope
   * @restrict E
   *
   * @description
   * This is an awesome directive!
   *
   * @param {object} model A field object
   *
   */
  angular
    .module('directive.dynamicTemplate', [])
    .value('baseUrlTemplate', 'src/common/directives/dynamicTemplate/')
    .directive('dynamicTemplate', dynamicTemplate);

  dynamicTemplate.$inject = ['$window', 'baseUrlTemplate'];

  /* @ngInject */
  function dynamicTemplate($window, baseUrlTemplate) {
    // Usage: <dynamic-template model="{{object}}"/>
    // 
    // Creates: hmchung2
    // 
    var directive = {
      template: '<div data-ng-include="url"></div>',
      controller: ctrl,
      link: link,
      restrict: 'AE'
    };
    return directive;
    function ctrl($scope) {

    }

    function link(scope, element, attrs) {
      scope.url = baseUrlTemplate+'/device2.html';
    }
  }
})();