(function(){
	const app = angular.module('rhapp.about');

	app.controller('AboutController', function(){
		let vm = this;

		vm.greetings = 'Welcome to about page !';
	});
})();