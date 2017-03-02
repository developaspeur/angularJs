(function(){
    const app = angular.module('rhapp.home.new');

    app.controller('HomeNewController', function(homeService, $state){
        let vm = this;
        vm.hello = 'hello!';

        // Flag en cas d'erreur
        vm.error = false;

        // Init du model
        vm.application = {};

        // Déclaration des méthodes à exposer
        vm.save = save;

        // Implémentation des méthodes exposées
        function save(){
            homeService.addApplication(vm.application).then(function(response){
                $state.go('home');
            })
            .catch(function(error){
                vm.error = true;
            });
        }
    });
})();