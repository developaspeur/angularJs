(function(){
	const app = angular.module("rhapp.shared.mon-footer");

	app.directive('monFooter', function(){
		return {
			restrict: 'AE',
			templateUrl: 'src/shared/mon-footer/mon-footer.part.html'
		};
	});
})();