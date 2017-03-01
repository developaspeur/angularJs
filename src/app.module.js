(function() {
    const app = angular.module('rhapp', [
        'ngRoute',
        'rhapp.about',
        'rhapp.home',
        'rhapp.news'
        ]);

    app.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        $routeProvider
        .when('/home', {
            templateUrl:'src/home/home.part.html',
            controller:'HomeController as hCtrl'
        })
        .when('/about', {
            templateUrl:'src/about/about.part.html'
        })

        .otherwise('/home');

    });
})();


