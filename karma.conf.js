module.exports = function(config) {
    config.set({

        frameworks: ['mocha'],

        files: [
            'test/*_test.js',
            'test/**/*_test.js'
        ]

    });
};