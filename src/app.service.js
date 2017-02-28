(function(){
	
	const app = angular.module('rhapp');
	
	app.factory('rhappService', function(rhappApplicationListConstant, prenomsFemininsConstantes, prenomsMasculinsConstantes){
		let applications = rhappApplicationListConstant;
		let hommes = prenomsMasculinsConstantes;
		let femmes = prenomsFemininsConstantes;

		function getApplications(){
			return applications;
		}

		function getHommes(){
			return hommes;
		}

		function getFemmes(){
			return femmes;
		}

		function addCivility(){
			for (application of applications){
				if (_.find(application, hommes))
					application.civilite = "Homme";
				else if(_.find(application, femmes))
					application.civilite = "Femme";
			}
		}

		return {
			getApplications,
			getHommes,
			getFemmes
		};
	});
})();