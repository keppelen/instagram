'use strict';

/**
 * @ngdoc function
 * @name oiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oiApp
 */
angular.module('oiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
