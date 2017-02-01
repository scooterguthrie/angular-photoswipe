var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    config = require('../../config').watch;

/**
 * Watched Tasks
 */
// Watched HTML
gulp.task('watched-html', function () {
    browsersync.notify('Coping HTML');
    return gulp.src(config.src.html, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
// Watched Data
gulp.task('watched-data', function () {
    browsersync.notify('Coping Data');
    return gulp.src(config.src.data, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
// Downloads
gulp.task('watched-downloads', function () {
    return gulp.src(config.src.downloads, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
// Watched Fonts
gulp.task('watched-fonts', function () {
    browsersync.notify('Coping Fonts');
    return gulp.src(config.src.fonts, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
// Watched Images
gulp.task('watched-images', function () {
    browsersync.notify('Coping Images');
    return gulp.src(config.src.images, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
// Watched Javascript
gulp.task('watched-scripts', function () {
    browsersync.notify('Coping Scripts');
    return gulp.src(config.src.scripts, { base: config.base })
        .pipe(gulp.dest(config.dest))
        .pipe(browsersync.stream());
});
