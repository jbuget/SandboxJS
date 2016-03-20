var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss');

module.exports = {
    entry: path.resolve(__dirname, 'app/entry.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css!postcss", exclude: /node_modules/},
            {test: /\.less$/, loader: "style!css!less", exclude: /node_modules/},
            {test: /\.coffee$/, loader: "coffee", exclude: /node_modules/},
            {test: /\.(coffee\.md|litcoffee)$/, loader: "coffee?literate", exclude: /node_modules/},
            {test: /\.(png|jpg|gif)$/, loader: "url?limit=5000&name=img/img-[hash:6].[ext]", exclude: /node_modules/},
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],
    postcss: function () {
        return [autoprefixer, precss];
    }
};
