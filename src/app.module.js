(function() {
    const app = angular.module('rhapp', [
        'ui.router',
        'rhapp.about',
        'rhapp.home',
        'rhapp.news',
        'rhapp.home.edit',
        'rhapp.shared',

        'tmh.dynamicLocale',
        'pascalprecht.translate',

    ]);

    app.config(function($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider,
        tmhDynamicLocaleProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home/home.part.html',
                controller: 'HomeController as hCtrl'
            })
            .state('homeDetail', {
                url: '/home/:id',
                templateUrl: 'src/home/detail/detail.part.html',
                controller: 'HomeDetailController as hdCtrl'
            })
            .state('homeNew', {
                url: '/home/new-application/',
                templateUrl: 'src/home/new/new.part.html',
                controller: 'HomeNewController as hnCtrl'
            })
            .state('homeEdit', {
                url: '/home/:id/edit',
                templateUrl: 'src/home/edit/edit.part.html',
                controller: 'HomeEditController as heCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'src/about/about.part.html',
                controller:'AboutController as aCtrl'
            });

        $urlRouterProvider.otherwise('/home');

        $translateProvider.preferredLanguage('fr-fr');
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/languages/',
            suffix: '.json'
        });

        // i18n & i10n
        tmhDynamicLocaleProvider.localeLocationPattern('data/i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.defaultLocale('fr-fr');

    });

    app.controller('RootController', function($scope, $locale, tmhDynamicLocale, $translate){
        let locales = {
            current: 'en-gb',
            available: [{
                id: 'en-gb',
                name: 'English'
            }, {
                id: 'fr-fr',
                name: 'Français'
            }, {
                id: 'ja-jp',
                name: 'Japanese'
            }]
        };

        //$rootScope.$locale = $locale;
        $scope.customLocales = locales.available;

        $scope.changeLocales = (newLocale) => {
            tmhDynamicLocale.set(newLocale);
            $translate.use(newLocale);
        };
    });
})();
