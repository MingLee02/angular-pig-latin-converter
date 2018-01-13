(function (angular) {
    'use strict';
    var module = angular.module('history', []);

    module.factory('historyStorage', [
        function () {
            var history = []
            
            var getHistory = function () {
                return history;
            };

            var setHistory = function (element) {
                if (history.length < 10) {
                    history.push(element);
                    localStorage.setItem('cookieHistory', JSON.stringify(history));
                } else {
                    history[9] = element;
                    localStorage.setItem('cookieHistory', JSON.stringify(history));
                }
            };

            return {
                'getHistory': getHistory,
                'setHistory': setHistory
            };
        }
    ]);
}(window.angular));