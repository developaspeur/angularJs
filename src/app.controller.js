(function(){
	
	const app = angular.module('rhapp');

	app.controller('RhappController', function(rhappService){
		let vm = this;
		
		rhappService.getApplications()
			.then(function(response){
				let tmp = JSON.parse(response);
				vm.applications = tmp.aplicationsList;
			});
	});

})();