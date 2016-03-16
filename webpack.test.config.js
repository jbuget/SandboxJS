var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: 'mocha!./test/index.js',
    output: {
        filename: 'testBundle.js',
        path: path.resolve(__dirname, 'test')
    },
    module: {
        loaders: [
            {test: /(\.css|\.less)$/, loader: 'null', exclude: [/build/]},
            {test: /(\.jpg|\.jpeg|\.png|\.gif)$/, loader: 'null'}
        ]
    }
};