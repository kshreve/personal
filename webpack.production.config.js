var path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './js/client.jsx',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'js'),
                loaders: ['babel']
            },
            {
                    test: /\.css$/,
                    loaders: ['style', 'css', 'postcss']
                },
                {
                    test: /\.scss/,
                    loaders: ['style', 'css', 'postcss', 'sass']
                }
        ]
    }
};
