angular.module('myApp').controller('MainController', MainController);

function MainController(FilmFactory) {
	const vm = this;
	
	FilmFactory.getAllFilms().then(response => {
		vm.films = response;
	});

	vm.name = 'Levi';
}