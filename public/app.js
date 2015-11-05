angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource']);

angular.module('app').controller('mainCtrl', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    }
});

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/about', {
            templateUrl: 'partials/views/about',
            controller: 'aboutCtrl'
        })
        .when('/skills', {
            templateUrl: 'partials/views/skills',
            controller: 'skillsCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/views/contact',
            controller: 'contactCtrl'
        })
        .when('/', {
            templateUrl: 'partials/views/home',
            controller: 'homeCtrl'
        });
});