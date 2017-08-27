'use strict';

module.exports = function (grunt) {

    grunt.config.merge({
        karma: {
            options: {
                basePath: '',
                files: [
                    // Jasmine helpers.
                    'node_modules/jasmine-expect/dist/jasmine-matchers.js',

                    // Angular libraries.
                    '<%= config.libDir %>/angular/angular.js',
                    '<%= config.libDir %>/angular-mocks/angular-mocks.js',
                    '<%= config.libDir %>/angular-route/angular-route.js',

                    '<%= config.files.src %>',
                    '<%= config.files.karmaTests %>',
                ],
                exclude: [],
                frameworks: ['jasmine'],
                plugins: [
                    'karma-jasmine',
                    'karma-coverage',
                    'karma-spec-reporter',
                    'karma-chrome-launcher',
                ],
                preprocessors: {
                    '<%= config.files.src %>': 'coverage',
                },
                reporters: ['dots', 'coverage'],
                coverageReporter: {
                    dir: 'coverage',
                    type: 'lcov',
                },
                port: 9876,
                colors: true,
                browsers: ['Chrome'],
                singleRun: true,
                logLevel: 'INFO',
            },
            watch: {
                // One browser to be quicker.
                browsers: ['Chrome'],
                reporters: ['progress', 'coverage'],
                autoWatch: true,
                singleRun: false,
                // INFO level logs when a file is changed: better feedback.
                logLevel: 'INFO',
            },
        },
    });
};