(function(){
	const app = angular.module('rhapp.shared.amount', []);

	app.directive('amount', function(){
		return {
			restrict: 'A',
			require: 'ngModel',
			scope:{
				ngModel: '=ngModel'
			},
			link: function(scope, element, attrs){
				scope.$watch('ngModel', (value)=>{

					// On supprime tout caractère non numérique
					let filteredString = _.replace(value, /[^\d.-]/g, '');

					// On convertit en nombre
					let tmp = Number(filteredString);

					// Le groupe s'effectue automatiquement
					filteredString = tmp.toLocaleString();

					// On effectue notre set
					scope.ngModel = filteredString;
				});
			}
		};
	});
})();