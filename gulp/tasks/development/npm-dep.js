var gulp = require('gulp'),
    gnf = require('gulp-npm-files'),
    config = require('../../config').copy.npm;

/**
 * Copy npm Assets
 */
gulp.task('npm-dep', function () {
    return gulp.src(gnf(), { base: config.base }).pipe(gulp.dest(config.dest));
});