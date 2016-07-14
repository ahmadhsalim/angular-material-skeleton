'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', function () {
    gulp.watch([paths.index], ['indexFile']);
	gulp.watch([paths.src + '/**/*.html'], ['partials']);
	gulp.watch([paths.src + '/**/*.js'], ['js']);
	gulp.watch([paths.style + '/**/*.scss', paths.style + '/**/*.sass'], ['style']);
	gulp.watch('bower.json', ['vendor']);
});
