(function(){
	const app = angular.module("rhapp.shared.dialog");

	app.directive('dialogBox', function(){
		return {
			restrict: 'AE',
			scope: {
				onClose:"&",
				onSave:"&",
				text:"@"
			},
			templateUrl: 'src/shared/dialog/dialog.part.html',
			controller: function($scope){

			}
		};
	});
})();