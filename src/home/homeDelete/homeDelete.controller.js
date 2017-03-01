(function() {
    const app = angular.module('rhapp.home.homeDelete');

    app.controller('HomeDeleteController', function($stateParams, homeService, $state) {
        let vm = this;
        let id = $stateParams.id;

        vm.application = {};

        if (!_.isEmpty(id)){
            homeService.deleteApplication(id).then(function(response){
                $state.go("home");
            }).catch(function(error){
                window.alert("Erreur : HomeDeleteController delete");
            });
        }

    });
})();


