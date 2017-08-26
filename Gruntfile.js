module.exports = function (grunt) {
    'use strict';

    if (grunt.option('help')) {
        // Load all tasks so they can be viewed in the help: grunt -h or --help.
        require('load-grunt-tasks')(grunt);
    } else {
        // Use jit-grunt to only load necessary tasks for each invocation of grunt.
        require('jit-grunt')(grunt);
    }

    grunt.initConfig({

        config: {
            baseDir: 'app',
            scriptsDir: '<%= config.baseDir %>/scripts',
            srcScriptsDir: '<%= config.scriptsDir %>/src',
            compiledScriptsDir: '<%= config.scriptsDir %>/compiled-es5',
            buildScriptsDir: '<%= config.scriptsDir %>/js-build',
            feTests: 'fe-tests/**/*.js'
        }
    });

    grunt.config.merge({
        connect: {
            dev: {
                options: {
                    hostname: '0.0.0.0',
                    port: 9000,
                    base: 'app'
                }
            }
        },
        watch: {
            templates: {
                files: [
                    'templates/**/*.html'
                ]
            }
        },
        browserify: {
            all: {
                files: {
                    '<%= config.buildScriptsDir %>/app.js': '<%= config.compiledScriptsDir %>/**/*.js'
                }
            }
        }
    });

    // - - - T A S K S - - -
    grunt.registerTask('default', 'dev');

    grunt.registerTask('dev', function () {
        grunt.task.run([
            'browserify',
            'connect:dev',
            'watch'
        ]);
    });
};