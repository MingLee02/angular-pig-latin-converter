(function (window, angular) {
    'use strict';

    var module = angular.module('home-controller', ['ngRoute']);

    module.controller('homeCtrl', [
        '$scope',
        function ($scope) {
           console.log('testing')
        }
    ]);

}(window, window.angular));
