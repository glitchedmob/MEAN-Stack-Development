angular.module('myApp').controller('MainController', MainController);

function MainController($http) {
	const vm = this;
	$http.get('http://swapi-tpiros.rhcloud.com/films')
		.then(response => {
			vm.films = response.data;
		});
	vm.name = 'Levi';
}