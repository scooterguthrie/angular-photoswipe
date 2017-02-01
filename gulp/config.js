//==================================================================================================
// Directory Variables
//==================================================================================================

var
    rootDir = './',

    //Development Assets Directories
    devAssetsRoot = rootDir + 'app/',
    devAssets = {
        downloads: devAssetsRoot + 'downloads/',
        fonts: devAssetsRoot + 'fonts/',
        images: devAssetsRoot + 'images/',
        javascript: devAssetsRoot + 'javascript/',
        data: devAssetsRoot + 'data/',
        stylesheets: devAssetsRoot + 'stylesheets/',
        ui: devAssetsRoot + 'ui/'
    },

    //Build Directories
    buildRoot = rootDir + 'builds/',
    //Dev Build
    devBuildRoot = buildRoot + 'development/',
    devBuildAssets = {
        downloads: devBuildRoot + 'downloads/',
        fonts: devBuildRoot + 'fonts/',
        images: devBuildRoot + 'images/',
        javascript: devBuildRoot + 'javascript/',
        data: devBuildRoot + 'data/',
        stylesheets: devBuildRoot + 'stylesheets/',
        ui: devBuildRoot + 'ui/'
    },
    //Package Build
    packageBuildRoot = buildRoot + 'package/';



//==================================================================================================
//==================================================================================================
module.exports = {
    autoprefixer: {
        browsers: ["> 1%", "last 2 versions"],
        cascade: true
    },
    browsersync: {
        development: {
            server: {
                baseDir: devBuildRoot
            }
        }
    },
    copy: {
        development: {
            src: [
                devAssetsRoot + '*.html',
                devAssets.downloads + '**/*.*',
                devAssets.fonts + '**/*.*',
                devAssets.images + '**/*.*',
                devAssets.javascript + '**/*.*',
                devAssets.stylesheets + '**/*.css',
                devAssets.data + '**/*.*',
                devAssets.ui + '**/*.*'
            ],
            baseRoot: devAssetsRoot,
            dest: devBuildRoot
        },
        npm: {
            base: rootDir,
            dest: devBuildRoot
        }
    },
    delete: {
        src: {
            buildRoot: buildRoot,
            devCss: devAssets.stylesheets + '**/*.css',
            devCssMap: devAssets.stylesheets + '**/*.map'
        }
    },
    sass: {
        development: {
            src: devAssets.stylesheets + '*.scss',
            srcRoot: devAssets.stylesheets,
            options: {
                sourcemap: true,
                style: 'expanded',
                css: devAssets.stylesheets,
                sass: devAssets.stylesheets,
                image: devAssets.images
            },
            dest: devBuildAssets.stylesheets
        }
    },
    watch: {
        src: {
            html: devAssetsRoot + '**/*.html',
            data: devAssets.data + '**/*.json',
            downloads: devAssets.downloads + '**/*.*',
            fonts: devAssets.fonts + '**/*.*',
            images: devAssets.images + '**/*.*',
            scripts: devAssetsRoot + '**/*.js',
            styles: devAssetsRoot + '**/*.scss'
        },
        base: devAssetsRoot,
        dest: devBuildRoot
    },
    zip: {
        src: devBuildRoot,
        dest: packageBuildRoot
    }
};