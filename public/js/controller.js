angular.module('myApp')
	.controller('MainController', MainController)
	.controller('AboutController', AboutController);

function MainController($http) {
	const vm = this;
	$http.get('http://swapi-tpiros.rhcloud.com/films')
		.then((response) => {
			vm.films = response.data;
		});
	vm.name = 'Levi';
}

function AboutController() {
	const vm = this;
	vm.bio = 'Suh dude. I\'m a piece of garbage';
}