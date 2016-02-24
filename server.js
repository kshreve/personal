import express from 'express';
import path from 'path';
import open from 'open';
import routeCache from 'route-cache';
import webpack from 'webpack';
import connectLiveReload from 'connect-livereload';

import configureStore from './js/redux/configureStore.jsx';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();

app.use(express.static(path.join(__dirname, 'dist')));

if(process.env.NODE_ENV !== 'production') {
    app.use(connectLiveReload());
    let config   = require('./webpack.config'),
        compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
}

app.get('/*', routeCache.cacheSeconds(3600), (req, res, next) => {
    let script = process.env.NODE_ENV !== 'production' ? '/dist/bundle.js' : '/bundle.min.js';

    // create new store and initialize
    const store = configureStore();

    const initialState = store.getState();

    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Kevin Shreve</title>
        <link href="/styles.min.css" type="text/css" rel="stylesheet">
        <link rel="shortcut icon" href="/favicon.ico"/>
      </head>
      <body>
        <div id="route-mount"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src=${script}></script>
      </body>
    </html>
    `);
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});

let serverPort = process.env.PORT || 80;

app.listen(serverPort);

if(process.env.NODE_ENV !== 'production') {
    console.log(`Server is Up and Running at Port : ${serverPort}`);
    open(`http://localhost:${serverPort}`);
}
