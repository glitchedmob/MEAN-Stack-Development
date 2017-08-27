angular.module('myApp').controller('FilmController', FilmController);

function FilmController($http, $routeParams) {
	const vm = this;
	const id = $routeParams.id;
	$http.get(`http://swapi-tpiros.rhcloud.com/films/${id}`)
		.then(response => {
			vm.film = response.data;
		});
}