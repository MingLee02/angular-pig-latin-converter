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

            var onPageLoadGetHistory = function () {
                $scope.historyItems = JSON.parse(localStorage.getItem('cookieHistory'));
                angular.forEach($scope.historyItems, function(value) {
                    historyStorage.setHistory(value)
                });
            }

            if (localStorage.getItem('cookieHistory') !== null) {
                onPageLoadGetHistory();
            };

            $scope.$on('conversion added to history', function() {
                $scope.historyItems = historyStorage.getHistory();
            });
        }
    ]);

}(window, window.angular));
