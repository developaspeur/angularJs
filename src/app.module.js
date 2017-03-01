(function() {
    const app = angular.module('rhapp', [
        'ui.router',
        'rhapp.about',
        'rhapp.home',
        'rhapp.news',
        
        'tmh.dynamicLocale',
        'pascalprecht.translate'
        ]);

    app.config(function($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider){
        $locationProvider.html5Mode(true);

        // Localization
        $translateProvider.preferredLanguage('ja-jp');
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/languages/',
            suffix: '.json'
        });

        tmhDynamicLocaleProvider.localeLocationPattern('data/i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.defaultLocale('fr-fr');

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

    app.controller('RootController', function($scope, $locale, tmhDynamicLocale, $translate){
        let locales = {
            current: 'en-gb',
            available: [{
                id: 'en-gb',
                name: 'English'
            },{
                id: 'fr-fr',
                name: 'French'
            },{
                id: 'ja-jp',
                name: 'Japanese'
            }]
        };

        $scope.customLocales = locales.available;
        $scope.changeLocales = (newLocale)=>{
            tmhDynamicLocale.set(newLocale);
            $translate.use(newLocale);
        };
    });
})();


