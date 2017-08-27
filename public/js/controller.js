angular.module('myApp')
	.controller('MyController', MyController)
	.controller('AboutController', AboutController);

function MyController() {
	const vm = this;
	vm.name = 'Levi';
}

function AboutController() {
	const vm = this;
	vm.bio = 'Suh dude. I\'m a piece of garbage';
}