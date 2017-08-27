(function (window, angular) {
    'use strict';

    var module = angular.module('app-controller', [
        'ngRoute',
        'history'
    ]);

    module.controller('appCtrl', [
        '$scope',
        'historyStorage',
        function ($scope, historyStorage) {
            $scope.historyItems = null;

            if (localStorage.getItem('cookieHistory') !== null) {
                $scope.historyItems = JSON.parse(localStorage.getItem('cookieHistory'));
                angular.forEach($scope.historyItems, function(value) {
                    historyStorage.setHistory(value)
                });
            };

            $scope.$on('history set', function() { 
                $scope.historyItems = historyStorage.getHistory();
            });
        }
    ]);

}(window, window.angular));
