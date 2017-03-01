(function(){
	const app = angular.module('rhapp.news');

	app.controller('NewsController', function(){
		let vm = this;

		vm.greetings = 'Welcome to news page !';
	});
})();