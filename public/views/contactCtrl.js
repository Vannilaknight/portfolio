angular.module('app').controller('contactCtrl', function ($scope) {

    $scope.sendEmail = function () {
        var json = '';
        json = '{"fromEmail":"' + $scope.email + '", "from":"' + $scope.name + '", "message":"' + $scope.message + '"}';
        console.log(json);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/sendMail", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(json);
        document.getElementById('emailForm').reset();
    }

});