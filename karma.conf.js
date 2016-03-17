// Karma configuration
// Generated on Wed Mar 16 2016 01:36:22 GMT+0100 (CET)
var webpack = require("webpack"),
    path = require('path');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon', 'chai'],

        // Start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher :
        browsers: ['PhantomJS'],

        // test results reporter to use
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: 1,

        // list of files / patterns to load in the browser
        files: [
            'test/index.js'
        ],

        preprocessors: {
            //'app/**/*.js': 'coverage',
            // add webpack as preprocessor
            'test/index.js': ['webpack', 'sourcemap']
        },

        webpack: {
            // webpack configuration
            devtool: 'inline-source-map',
            module: {
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /(test|node_modules|bower_components)\//,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        plugins: [
            require("karma-chai"),
            require("karma-coverage"),
            require("karma-mocha"),
            require("karma-phantomjs-launcher"),
            require("karma-sinon"),
            require("karma-sourcemap-loader"),
            require("karma-webpack"),
            require('istanbul-instrumenter-loader')
        ]

    })
};
