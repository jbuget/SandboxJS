var webpack = module.exports = {
    context: __dirname + "/app",
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        publicPath: 'http://sandboxjs.io/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css!autoprefixer"},
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.coffee$/, loader: "coffee-loader"},
            {test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"}
        ]
    }

};
