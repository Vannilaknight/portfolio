angular.module('app').controller('mainCtrl', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    }
});