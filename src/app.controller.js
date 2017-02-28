(function(){
	
	const app = angular.module('rhapp');

	app.controller('RhappController', function($scope, $filter, rhappService){
		let vm = this;
		// vm.firstname = "Toto";
		vm.applications = rhappService.getApplications();

		let filter = $filter("addCivility")(vm.civilite, 2000);
	});

})();