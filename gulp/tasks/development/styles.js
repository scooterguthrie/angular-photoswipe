var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function () {
    var sassConfig = config.sass.development;

    sassConfig.onError = browsersync.notify;

    browsersync.notify('Compiling Sass');

    return gulp.src(sassConfig.src)
        .pipe(compass(sassConfig.options))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(sassConfig.dest))
        .pipe(browsersync.stream());
});