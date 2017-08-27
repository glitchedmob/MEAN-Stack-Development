angular.module('myApp').controller('FilmController', FilmController);

function FilmController($routeParams, FilmFactory) {
	const vm = this;
	const id = $routeParams.id;
	FilmFactory.getOneFilm(id).then(response => {
		vm.film = response;
	});
}