var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        vendors: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css!autoprefixer", exclude: [node_modules_dir]},
            {test: /\.less$/, loader: "style!css!less", exclude: [node_modules_dir]},
            {test: /\.coffee$/, loader: "coffee-loader", exclude: [node_modules_dir]},
            {test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate", exclude: [node_modules_dir]},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]", exclude: [node_modules_dir]},
            // Intégration de Bootstrap
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],
    debug: true
};
