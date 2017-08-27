(function (angular) {
    'use strict';

    var module = angular.module('convert', ['history']);

    module.directive('convertPigLatin',[
      'historyStorage',
        function(historyStorage) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/convert-pig-latin.html',
                link: function (scope) {
                    var vowels = ['a', 'e', 'i', 'o', 'u'];

                    const checkStartsWithVowel = function (letter) {
                        if (vowels.indexOf(letter) > -1) {
                            return true;
                        }
                    }

                    const vowelConversion = function (word) {
                        return word + 'way';
                    }

                    const consonantConversion = function (word) {
                        return word.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + 'ay'
                    }

                    scope.convert = function (string) {
                        if (!string) {
                            return;
                        }

                        var conversion = [];

                        string.split(' ').forEach(function (word) {
                            // Disallow numerical characters
                            console.log(isNaN(parseInt(word)))
                            if (isNaN(parseInt(word)) === true) {
                                if(checkStartsWithVowel(word.charAt(0)) === true) {
                                    conversion.push(vowelConversion(word))
                                } else {
                                    conversion.push(consonantConversion(word))
                                }
                            }
                        })

                        scope.result = conversion.join(' ');
                        if (scope.result) {
                            var store = {
                                'original': string,
                                'conversion': scope.result
                            }
                            historyStorage.setHistory(store)
                            scope.$emit('history set');
                            scope.normalText = ' '
                        }
                    }
                }
            }
        }
    ])

}(window.angular));