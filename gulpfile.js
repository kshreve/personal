var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten');

gulp.task('move', ['styles'], function () {
    return gulp.src(['assets/**/*.*', 'assets/**.*'], {base: './'})
               .pipe(flatten())
               .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
    return gulp.src('styles/*.scss')
               .pipe(sass().on('error', sass.logError))
               //.pipe(cleanCss())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(['styles/*.scss'], ['move']);
});

gulp.task('default', ['move']);
