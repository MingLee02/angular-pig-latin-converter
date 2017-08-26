(function (angular) {
    'use strict';
    var module = angular.module('app', [
        'ngRoute',
        'home-controller'
    ]);

    module.config([
        '$routeProvider',
        function ($routeProvider)
        {
            $routeProvider.when('/', {
                templateUrl: '../templates/home.html',
                controller: 'homeCtrl',
                name: 'home'
            });
        }
    ]);


}(window.angular));