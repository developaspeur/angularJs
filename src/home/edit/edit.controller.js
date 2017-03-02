(function() {
    const app = angular.module('rhapp.home.edit');

    app.controller('HomeEditController', function($stateParams, homeService, $state){
        let vm = this;

        // Init du model
        vm.application = {};

        // Flag en cas d'erreur
        vm.error = false;

        // Récupération de l'ID
        vm.id = $stateParams.id;

        vm.hello = 'Hello !';

        if (!_.isEmpty(vm.id)) {
            homeService.getApplication(vm.id).then(function(response){
                vm.application = response.data.application;
                console.log(vm.application);
            });
        }

        // Déclaration des méthodes à exposer
        vm.save = save;

        // Implémentation des méthodes exposées
        function save(){
            homeService.updateApplication(vm.application, vm.id).then(function(response){
                $state.go('home');
            })
            .catch(function(error){
                vm.error = true;
            });
        }
    });
})();
