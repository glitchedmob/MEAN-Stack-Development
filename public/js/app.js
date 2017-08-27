angular.module('myApp', [])
	.controller('MyController', MyController)
	.controller('SecondController', SecondController);

function MyController() {
	const vm = this;
	vm.name = 'Levi';
}

function SecondController() {
	const vm = this;
	vm.name = 'Zitting';
}