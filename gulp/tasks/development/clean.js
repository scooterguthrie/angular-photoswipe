var gulp = require('gulp'),
    del = require('del'),
    config = require('../../config').delete.src;

/**
 * Delete folders and files
 */
gulp.task('clean', function () {
    del(config.devCss);
    del(config.devCssMap);
    return del(config.buildRoot);
});