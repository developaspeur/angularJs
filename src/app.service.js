(function(){
	
	const app = angular.module('rhapp');
	
	app.factory('rhappService', function($q){

		function getApplications(){
			
			let deferred = $q.defer();

			let url = "//localhost:8080/rh-api/v1/applications";
			let request = new window.XMLHttpRequest();

			request.open('GET', url, true);
			request.onload = onload;
			request.onerror = onerror;
			request.send();

			function onload(){
				if (request.status === 200){
					deferred.resolve(request.responseText);
				}else{
					deferred.reject(new Error('Status code is : ' + request.status));
				}
			}

			function onerror(){
				deferred.reject(new Error('Status code is : ' + request.status));
			}

			let promise = deferred.promise;
			return promise;

		}

		return {
			getApplications
		};
	});
})();