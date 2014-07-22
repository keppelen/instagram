'use strict';

/**
 * @ngdoc function
 * @name oiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oiApp
 */
angular.module('oiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
