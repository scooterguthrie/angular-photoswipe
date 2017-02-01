var gulp = require('gulp'),
    config = require('../../config').watch.src;

/**
 * Watch files for changes
 */
gulp.task('watch', function () {
    gulp.watch(config.html, ['watched-html']);
    gulp.watch(config.data, ['watched-data']);
    gulp.watch(config.downloads, ['watched-downloads']);
    gulp.watch(config.fonts, ['watched-font']);
    gulp.watch(config.images, ['watched-images']);
    gulp.watch(config.scripts, ['watched-scripts']);
    gulp.watch(config.styles, ['sass']);
});