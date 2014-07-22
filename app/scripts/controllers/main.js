'use strict';

angular.module('oigramApp')
	.controller('MainCtrl', function ($scope, $http, $timeout, $instagramService) {

	$scope.tag = 'frontinbh';
	$scope.refreshTime = 5000;

	$scope.refreshImages = function() {
		$instagramService.listImagesByTag( $scope.tag, $scope.handlerRefreshImagesSuccess );
	};

	$scope.handlerRefreshImagesSuccess = function( data ){
		$scope.images = data.data;
		$timeout($scope.refreshImages, $scope.refreshTime);
	};

	$scope.refreshImages();

});
