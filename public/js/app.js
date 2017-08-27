angular.module('myApp', [])
	.controller('MyController', MyController)
	.controller('SecondController', SecondController);

function MyController($scope) {
	$scope.name = 'Levi';
}

function SecondController($scope) {
	$scope.name = 'Zitting';
}