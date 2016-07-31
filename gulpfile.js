'use strict';

var gulp = require('gulp');

gulp.paths = {
  app: 'src/app',
  style: 'src/scss',
  public: 'public',
  indexSrc: 'src',
  indexDest: 'public',
  indexName: 'index.html'
};

require('require-dir')('gulp');

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});