(function(){
	const app = angular.module("rhapp.shared.application");

	app.directive('application', function(){
		return {
			restrict: 'AE',
			scope: {
				anApp:"="
			},
			templateUrl: 'src/shared/application/application.part.html',
			controller: function($scope){
				$scope.fullname = $scope.anApp.firstname + ' '+ $scope.anApp.lastname;
			}
		};
	});
})();