(function() {
    const app = angular.module('rhapp.home');

    app.factory('homeService', function($http) {

        function getApplications() {
            let config = {
                method: 'GET',
                url: '/rh-api/v1/applications'
            };

            return $http(config);
        }

        function getApplication(id) {
            let config = {
                method: 'GET',
                url: '/rh-api/v1/applications/' + id
            };

            return $http(config);
        }

        function deleteApplication(id) {
            let config = {
                method: 'DELETE',
                url: '/rh-api/v1/applications/' + id
            };

            return $http(config);
        }


        function addApplication(anApplication) {
            let config = {
                method: 'POST',
                url: '/rh-api/v1/applications',
                data: anApplication,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(config);
        }

        function updateApplication(anApplication, id) {
            let config = {
                method: 'PUT',
                url: '/rh-api/v1/applications/' + id,
                data: anApplication,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(config);
        }

        return {
            getApplications,
            getApplication,
            deleteApplication,
            addApplication,
            updateApplication
        };
    });
})();