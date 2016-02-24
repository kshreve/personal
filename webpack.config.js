var path              = require('path'),
    webpack           = require('webpack'),
    autoprefixer      = require('autoprefixer'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    sassLoaders       = [
        'css-loader',
        'postcss-loader',
        'sass-loader'
    ],
    config            = {
        entry: [
            'webpack-hot-middleware/client?reload=true',
            './js/client.jsx'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin("styles.min.css")
        ],
        watch: true,
        devtool: 'eval-source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    include: path.join(__dirname, 'js'),
                    loader: ['babel'],
                    query: {
                        presets: ["react-hmre"]
                    }
                },
                /*                {
                 test: /\.css$/,
                 loader: ExtractTextPlugin.extract('style', 'css!postcss')
                 },
                 {
                 test: /\.scss/,
                 loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
                 }*/
            ]
        },
        postcss: [
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.scss'],
            modulesDirectories: ['js', 'node_modules']
        }
    };

module.exports = config;
