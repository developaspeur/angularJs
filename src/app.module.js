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
        .state('homeEdit', {
            url: '/home/:id/homeEdit',
            templateUrl:'src/home/homeEdit/homeEdit.part.html',
            controller: 'HomeEditController as heCtrl'
        })
        .state('homeDelete', {
            url: '/home/:id/homeDelete',
            controller: 'HomeDeleteController as hdlCtrl'
        })
        .state('homeNew', {
            url: '/home/new-application/',
            templateUrl:'src/home/new/new.part.html',
            controller: 'HomeNewController as hnCtrl'
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


