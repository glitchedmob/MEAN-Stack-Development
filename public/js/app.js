angular.module('myApp', []).controller('MyController', MyController);

function MyController($scope) {
	$scope.number = 0;

	$scope.increment = amount => {
		$scope.number +=  amount;
	}

	$scope.decrement = amount => {
		$scope.number -= amount;
	}
}