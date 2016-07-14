import express from 'express';
import path from 'path';
import routeCache from 'route-cache';
import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import fs from 'fs';
import bodyParser from 'body-parser';

import configureStore from './src/store/configureStore';

let app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    next(err);
});

app.get('/guessingGame', (req, res) => {
    res.json({
        gameId:    0,
        situation: [1, 1, 0, 0, 0, 0]
    });
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

    fs.writeFileSync('src/styles/theme/_customTheme.scss', sassToCreate, 'utf8', () => true);

    gulp.task('theme', () =>
        gulp.src('src/styles/theme/theme.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCss())
            .pipe(rename('theme.min.css'))
            .pipe(gulp.dest(`dist/${theme}`))
    );

    gulp.start('theme', () =>
        res.json({ message: 'Theme generated.' })
    );
});

app.get('/*', routeCache.cacheSeconds(3600), (req, res) => {
    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#57AEFF" />
        <meta name="msapplication-navbutton-color" content="#57AEFF">
        <meta name="apple-mobile-web-app-status-bar-style" content="#57AEFF">
        <title>Kevin Shreve</title>
        <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-75715107-1', 'auto');ga('send', 'pageview');</script>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/theme.min.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="app"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(configureStore().getState())};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `);
});

app.listen(process.env.PORT || 80);
