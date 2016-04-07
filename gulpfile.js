var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    livereload = require('gulp-livereload'),
    flatten = require('gulp-flatten');

gulp.task('move', ['styles', 'fonts'], function () {
    return gulp.src(['assets/**.*'], {base: './'})
        .pipe(flatten())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('fonts', [], function () {
    return gulp.src(['assets/fonts/**.*'], {base: './assets'})
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('styles', function () {
    return gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('eslint', function () {
    return gulp.src(['js/**/*.jsx', 'server.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['styles/*.scss', 'views/**/*.jsx'], ['move', 'eslint']);
});

gulp.task('default', ['move']);
