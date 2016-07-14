'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'del']
});

var config = {
    production: !!$.util.env.production,
};

gulp.task('vendor', function () {
    var jsFilter = $.filter('**/*.js', {restore: true});
    var cssFilter = $.filter('**/*.css', {restore: true});
    var svgFilter = $.filter('**/*.svg', {restore: true});

    return gulp.app($.mainBowerFiles({
            "overrides": {
                "material-design-icons": {
                    "main": "**/production/*.svg"
                }
            }
        }))
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.concat('./vendor.js'))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(jsFilter.restore)
        .pipe($.sourcemaps.init())
        .pipe(cssFilter)
        .pipe($.autoprefixer())
        .pipe($.concat('vendor.css'))
        .pipe(config.production ? $.minifyCss() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(cssFilter.restore)
        .pipe(svgFilter)
        .pipe(config.production ? $.minifyHtml({empty: true, spare: true, quotes: true}) : $.util.noop())
        .pipe($.angularTemplatecache('templateCacheSvg.js', {
            module: 'app'
        }))
        .pipe($.uglify())
        .pipe(gulp.dest(paths.dist + '/'))
        .pipe(svgFilter.restore);
});

gulp.task('indexFile', function(){
    return gulp.app(paths.index)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(gulp.dest(paths.public + '/index.html'));
});


gulp.task('partials', function () {
    return gulp.app(paths.src + '/**/*.html')
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'app',
            // convert template cache IDs to dot notation. eg: Modules/User/List.html = Modules.User.List
            transformUrl: function (url) {
                return url.replace('.html', '').replace(/\\+/g, '.').replace(/\/+/g, '.');
            }
        }))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('js', function() {
    return gulp.app([
            paths.src + "/**/*-mdl.js",
            paths.src + "/**/*.js"
        ])
        .pipe($.sourcemaps.init())
        .pipe($.concat("./app.js"))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('style', function () {
    return gulp.app([paths.style + "/**/*.scss", paths.style + "/**/*.sass"])
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.importCss())
        .pipe($.autoprefixer())
        .pipe($.concat('./app.css'))
        .pipe(config.production ? $.minifyCss() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.dist))
});

gulp.task('clean', function (done) {
    $.del([paths.fonts + '/', paths.dist + '/', paths.tmp + '/', paths.indexDest], done);
});

gulp.task('build',
    [
        'indexFile',
        'vendor',
        'style',
        'js',
        'partials'
    ], function () {
    console.log('Compilation Completed');
    gulp.start('watch');
});
