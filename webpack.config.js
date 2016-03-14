var webpack = require('webpack'),
    path = require('path'),
    node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'app/entry.js')
        ],
        vendors: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css!autoprefixer", exclude: [node_modules_dir]},
            {test: /\.less$/, loader: "style!css!less", exclude: [node_modules_dir]},
            {test: /\.coffee$/, loader: "coffee-loader", exclude: [node_modules_dir]},
            {test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate", exclude: [node_modules_dir]},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]", exclude: [node_modules_dir]}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
