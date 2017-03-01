(function() {
    const app = angular.module('rhapp.home.new');

    app.controller('HomeNewController', function(homeService, $state) {
        let vm = this;

        vm.application = {};
        vm.save = save;
        vm.errorWhileAdding = false;

        function save(){
	        homeService.addApplication(vm.application)
		        .then(function(response){
		        	vm.errorWhileAdding = false;
		        	$state.go("home");
		        })
		        .catch(function(error){
		        	vm.errorWhileAdding = true;
		        	window.alert("KO!");
		        });
        }

    });
})();


