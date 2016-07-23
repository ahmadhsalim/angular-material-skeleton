'use strict';

require('es6-promise').polyfill();

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

    return gulp.src($.mainBowerFiles({
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
        .pipe(gulp.dest(paths.public + '/'))
        .pipe(jsFilter.restore)
        .pipe($.sourcemaps.init())
        .pipe(cssFilter)
        .pipe($.autoprefixer())
        .pipe($.concat('vendor.css'))
        .pipe(config.production ? $.minifyCss() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.public + '/'))
        .pipe(cssFilter.restore)
        .pipe(svgFilter)
        .pipe(config.production ? $.minifyHtml2({empty: true, spare: true, quotes: true}) : $.util.noop())
        .pipe($.angularTemplatecache('svgTemplateCache.js', {
            module: 'app'
        }))
        .pipe($.uglify())
        .pipe(gulp.dest(paths.public))
        .pipe(svgFilter.restore);
});

gulp.task('index', [
        'vendor',
        'style',
        'js',
        'partials'
    ], function(){
    return gulp.start('indexFile');
});
gulp.task('indexFile', function(){
    return gulp.src(paths.index)
        .pipe($.inject(gulp.src([paths.public + '/vendor.js', paths.public + '/vendor.css'], {read:false}), {name:'vendor'}))
        .pipe($.inject(gulp.src([paths.public + '/app.js'], {read:false}), {name:'app'}))
        .pipe($.inject(gulp.src([paths.public + '/**/*.js', paths.public + '/**/*.css', '!' + paths.public + '/app.js', '!' + paths.public + '/vendor.js', '!' + paths.public + '/vendor.css'], {read:false})))
        .pipe(config.production ? $.minifyHtml2({empty: true, spare: true, quotes: true}) : $.util.noop())
        .pipe(gulp.dest(paths.public));
});


gulp.task('partials', function () {
    return gulp.src(paths.app + '/**/*.html')
        .pipe($.minifyHtml2({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('htmlTemplateCache.js', {
            module: 'app',
            // convert template cache IDs to dot notation. eg: Modules/User/List.html = Modules.User.List
            transformUrl: function (url) {
                return url.replace('.html', '').replace(/\\+/g, '.').replace(/\/+/g, '.');
            }
        }))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe(gulp.dest(paths.public));
});

gulp.task('js', function() {
    return gulp.src([
            paths.app + "/**/*Module.js",
            paths.app + "/**/*.js"
        ])
        .pipe($.sourcemaps.init())
        .pipe($.concat("./app.js"))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.public));
});

gulp.task('style', function () {
    return gulp.src([paths.style + "/**/*.scss", paths.style + "/**/*.sass"])
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.importCss())
        .pipe($.autoprefixer())
        .pipe($.concat('./app.css'))
        .pipe(config.production ? $.minifyCss() : $.util.noop())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(paths.public))
});

gulp.task('clean', function (done) {
    $.del(paths.public).then(function (paths) {
        done();
    });
});

gulp.task('build',
    [
        'index'
    ], function () {
    console.log('Compilation Completed');
    gulp.start('watch');
});