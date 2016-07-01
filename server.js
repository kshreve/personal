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

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', routeCache.cacheSeconds(3600), (req, res) => {
    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Kevin Shreve</title>
        <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-75715107-1', 'auto');ga('send', 'pageview');</script>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/theme.min.css />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="route-mount"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(configureStore().getState())};
        </script>
        <script src="/bundle.js"></script>
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

    fs.writeFileSync('src/styles/theme/_customTheme.scss', sassToCreate, 'utf8', () => true);

    gulp.task('theme', () =>
        gulp.src('src/styles/theme/theme.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCss())
            .pipe(rename('theme.min.css'))
            .pipe(gulp.dest(`dist/${theme}`))
    );

    gulp.start('theme', () =>
        res.json({message: 'Theme generated.'})
    );
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    next(err);
});

app.listen(process.env.PORT || 80);
