(function(){

	const app = angular.module('rhapp');

	app.constant('rhappApplicationListConstant', [{
		firstname: "Pierre",
		lastname: "Martin",
		askedSalary: 55000
	},{
		firstname: "Jack",
		lastname: "Daniel",
		askedSalary: 9000
	}]);

	app.constant('prenomsFemininsConstantes', [{
		firstname: "Josianne",
		lastname: "Tabasco",
		askedSalary: 400000
	},{
		firstname: "Ginette",
		lastname: "Mac 3",
		askedSalary: 1200
	}]);

	app.constant('prenomsMasculinsConstantes', [{
		firstname: "Jean",
		lastname: "Jack",
		askedSalary: 1200368
	},{
		firstname: "Jackie",
		lastname: "Michel",
		askedSalary: 1
	}]);

	
	

})();