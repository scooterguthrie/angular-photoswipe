var gulp = require('gulp'),
    config = require('../../config').copy.development;

/**
 * Copy Development Assets
 */
gulp.task('copy-dev', function () {
    return gulp.src(config.src, { base: config.baseRoot })
        .pipe(gulp.dest(config.dest));
});