(function() {
    const app = angular.module('rhapp', [
        'ui.router',
        'rhapp.about',
        'rhapp.home',
        'rhapp.news'
        ]);

    app.config(function($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl:'src/home/home.part.html',
            controller:'HomeController as hCtrl'
        })
        .state('homeDetail', {
            url: '/home/:id',
            templateUrl:'src/home/homeDetail/homeDetail.part.html',
            controller: 'HomeDetailController as hdCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl:'src/about/about.part.html'
        })
        .state('news', {
            url: '/news',
            templateUrl:'src/news/news.part.html'
        });

        $urlRouterProvider.otherwise('/home');

    });
})();


