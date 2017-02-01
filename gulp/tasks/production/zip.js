var gulp = require('gulp'),
    zip = require('gulp-zip'),
    config = require('../../config').zip;


gulp.task('pro-zip', ['pro-build'], () => {
    return gulp.src(config.src + '**/*.*')
        .pipe(zip('jsguthrie.zip'))
        .pipe(gulp.dest(config.dest));
});