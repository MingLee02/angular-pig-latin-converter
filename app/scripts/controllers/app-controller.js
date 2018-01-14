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
            const onPageLoadCheckLocalStorageAndSetHistory = function () {
                // null is returned if localStorage does not have the history
                $scope.historyItems = JSON.parse(localStorage.getItem('cookieHistory'));

                angular.forEach($scope.historyItems, function(value) {
                    historyStorage.setHistory(value);
                });
            };
            
            onPageLoadCheckLocalStorageAndSetHistory();
            
            $scope.clearHistory = function () {
                historyStorage.clearHistory();
                $scope.historyItems = undefined
            };

            $scope.$on('history updated', function() {
                $scope.historyItems = historyStorage.getHistory();
            });
        }
    ]);
}(window, window.angular));
