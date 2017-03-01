(function() {
    const app = angular.module('rhapp.home.homeDetail');

    app.controller('HomeDetailController', function($stateParams, homeService) {
        let vm = this;
        let id = $stateParams.id;

        if (!_.isEmpty(id)){
	        homeService.getApplication(id).then(function(response){
	            vm.anApplication = response.data.application;
	        }).catch(function(error){
                alert("Erreur : HomeDetailController")
            });
        }
    });
})();


