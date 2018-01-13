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

                    const checkStringStartsWithAVowel = function (letter) {
                        return vowels.includes(letter);
                    };

                    const vowelConversion = function (word) {
                        return word + 'way';
                    };

                    const consonantConversion = function (word) {
                        return word.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + 'ay';
                    };

                    const splitStringAndConvertWords = function (string) {
                        const conversion = [];

                        string.split(' ').forEach(function (word) {
                            if (checkStringStartsWithAVowel(word.charAt(0))) {
                                conversion.push(vowelConversion(word));
                            } else {
                                conversion.push(consonantConversion(word));
                            }
                        });

                        return conversion.join(' ');
                    };

                    scope.convert = function (string) {
                        scope.result = splitStringAndConvertWords(string);
                        if (scope.result) {
                            updateConversionHistory(string);
                        };
                        resetForm();
                    };

                    var updateConversionHistory = function(string) {
                        historyStorage.setHistory({
                            'original': string,
                            'conversion': scope.result
                        });
                        scope.$emit('history updated');
                    };

                    var resetForm = function() {
                        scope.normalText = ' ';
                        scope.convertForm.$setUntouched();
                    };
                }
            }
        }
    ])

}(window.angular));