(function() {
    const app = angular.module('rhapp.home.detail');

    app.controller('HomeDetailController', function($stateParams, homeService, $state) {
        let vm = this;

        vm.anApplication = {};

        // Flag en cas d'erreur
        vm.error = false;

        vm.showModal = false;

        // Méthode à exposer
        vm.deleteApplication = deleteApplication;
        vm.toggleModal = toggleModal;

        let id = $stateParams.id;
        if (!_.isEmpty(id)) {
            homeService.getApplication(id).then(function(response) {
                vm.anApplication = response.data.application;
            });
        }

        // Implémentation des méthodes exposées
        function deleteApplication() {
            vm.toggleModal();
            homeService.deleteApplication(vm.anApplication.id).then(function(response) {
                    $state.go('home');
                })
                .catch(function(error) {
                    vm.error = true;
                });

        }

        function toggleModal() {
            vm.showModal = !vm.showModal;
        }
    });
})();
