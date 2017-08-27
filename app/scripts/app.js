(function (angular) {
    'use strict';
    var module = angular.module('app', [
        'ngRoute',
        'app-controller',
        'convert'
    ]);

    module.config([
        '$routeProvider',
        function ($routeProvider)
        {
            $routeProvider.when('/', {
                templateUrl: '../templates/home.html',
                controller: 'appCtrl',
                name: 'home'
            });
        }
    ]);


}(window.angular));