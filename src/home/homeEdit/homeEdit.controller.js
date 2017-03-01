(function() {
    const app = angular.module('rhapp.home.homeEdit');

    app.controller('HomeEditController', function($stateParams, homeService, $state) {
        let vm = this;
        let id = $stateParams.id;

        vm.application = {};
        vm.save = save;
        vm.errorWhileAdding = false;

        homeService.getApplication(id).then(function(response){
            vm.application = response.data.application;
            vm.errorWhileAdding = false;
        }).catch(function(error){
            vm.errorWhileAdding = true;
            window.alert("Erreur : HomeEditController get");
        });
        function save(){
            if (!_.isEmpty(id)){
                homeService.updateApplication(vm.application, id).then(function(response){
                    vm.errorWhileAdding = false;
                    $state.go("home");
                });
            }
        }

    });
})();


