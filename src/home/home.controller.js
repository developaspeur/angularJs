(function() {
    const app = angular.module('rhapp.home');

    app.controller('HomeController', function(homeService) {
        let vm = this;
        homeService.getApplications().then(function(response){
            vm.applications = response.data.aplicationsList;
        });
    });
})();


