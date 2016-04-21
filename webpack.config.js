var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    config = {
        entry:   [
            'webpack-hot-middleware/client?reload=true',
            './js/client.jsx'
        ],
        output:  {
            path:       path.join(__dirname, 'dist'),
            filename:   'bundle.js',
            publicPath: '/dist/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        watch:   true,
        devtool: 'eval-source-map',
        module:  {
            loaders: [
                {
                    test:    /\.jsx?$/,
                    include: path.join(__dirname, 'js'),
                    loader:  ['babel'],
                    query:   {
                        presets: ["react-hmre"]
                    }
                }
            ]
        },
        postcss: [
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ],
        resolve: {
            extensions:         ['', '.js', '.jsx', '.scss'],
            modulesDirectories: ['js', 'node_modules']
        }
    };

module.exports = config;
