(function() {
    const app = angular.module('rhapp.about');

    app.controller('AboutController', function($locale){
        let vm = this;
        vm.joursSemaine = $locale.DATETIME_FORMATS.DAY;
        console.log($locale);
    });
})();


