'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', function () {
    gulp.watch([paths.indexSrc + '/' + paths.indexName], ['inject']);
	gulp.watch([paths.app + '/**/*.html'], ['partials']);
	gulp.watch([paths.app + '/**/*.js'], ['js']);
	gulp.watch([paths.style + '/**/*.scss', paths.style + '/**/*.sass'], ['style']);
	gulp.watch('bower.json', ['vendor']);
});
