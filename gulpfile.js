var gulp    = require('gulp'),
    flatten = require('gulp-flatten');

gulp.task('move', function() {
    return gulp.src(['assets/images/*.*'], {base: './'})
        .pipe(flatten())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['move']);
