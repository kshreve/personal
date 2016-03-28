import express from 'express';
import path from 'path';
import open from 'open';
import routeCache from 'route-cache';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import fs from 'fs';
import bodyParser from 'body-parser';

import configureStore from './js/redux/configureStore.jsx';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

if (process.env.NODE_ENV !== 'production') {
    let config = require('./webpack.config'),
        compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        noInfo:     true,
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
        <link href="/styles.min.css" type="text/css" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
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

app.post('/customTheme', (req, res) => {
    let sassToCreate = '',
        theme = '';

    for (let property in req.body) {
        if (property === 'theme') {
            theme = req.body[property];
        } else {
            sassToCreate += `\$${property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}: ${req.body[property]}; `;
        }
    }

    fs.writeFileSync('styles/theme/_customTheme.scss', sassToCreate, 'utf8', () => true);

    gulp.task('theme', () => {
        return gulp.src('styles/theme/theme.scss')
                   .pipe(sass().on('error', sass.logError))
                   .pipe(cleanCss())
                   .pipe(rename('theme.min.css'))
                   .pipe(gulp.dest(`dist/${theme}`));
    });

    gulp.start('theme', () => {
        //
    });

    res.json({ message: 'Theme generated.' });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    next(err);
});

let serverPort = process.env.PORT || 80;

app.listen(serverPort);

if (process.env.NODE_ENV !== 'production') {
    console.log(`Server is Up and Running at Port : ${serverPort}`);
    open(`http://localhost:${serverPort}`);
}
