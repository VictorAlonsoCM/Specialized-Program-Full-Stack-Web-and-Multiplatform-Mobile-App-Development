'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.scss',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    //This is the default task, so if you only type grunt in the terminal, this task will be executed.
    grunt.registerTask('default', ['browserSync', 'watch']);
};