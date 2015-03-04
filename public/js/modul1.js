/*jslint node: true */
/*global angular */

var modul1 = angular.module('m', []);

modul1.controller('MainController', function($scope, $http) {

    $scope.loadData =function() {
        $http.get("api/clients").success(function(data) {
            $scope.clients = data;
        });
    };

    $scope.onClick = function() {
        $scope.var1 = "hola";
    };

    $scope.suma = function(a,b) {
        return parseInt(a,10) + parseInt(b,10);
    };

});
