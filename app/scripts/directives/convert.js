(function (angular) {
    'use strict';

    const module = angular.module('convert', ['history']);

    module.directive('convertPigLatin', [
        'historyStorage',
        function(historyStorage) {
            return {
                restrict: 'A',
                templateUrl: '../../templates/convert-pig-latin.html',
                link: function (scope) {
                    const vowels = ['a', 'e', 'i', 'o', 'u'];

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

                        const conversion = [];

                        string.split(' ').forEach(function (word) {
                            if(checkStartsWithVowel(word.charAt(0))) {
                                conversion.push(vowelConversion(word))
                            } else {
                                conversion.push(consonantConversion(word))
                            }
                        })

                        scope.result = conversion.join(' ');

                        if (scope.result) {
                            updateConversionHistory(string)
                        };
                        resetForm()
                    };

                    var updateConversionHistory = function(string) {
                        const store = {
                            'original': string,
                            'conversion': scope.result
                        };
                        historyStorage.setHistory(store);
                        scope.$emit('conversion added to history');
                    };

                    var resetForm = function() {
                        scope.normalText = ' ';
                        scope.convertForm.$setUntouched();
                    }
                }
            }
        }
    ])

}(window.angular));