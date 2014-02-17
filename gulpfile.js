var gulp = require('gulp'),
    util = require('gulp-util'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('scripts', ['scripts-bundle']);

gulp.task('scripts-bundle', function () {
  return gulp.src('src/game.js')
    .pipe(browserify({
      debug: true
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('bin/js'));
});

gulp.task('markup', ['markup-concat']);

gulp.task('markup-concat', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('bin/'));
});

gulp.task('data', function () {
  return gulp.src('src/*.json')
    .pipe(gulp.dest('bin/'));
});

gulp.task('assets', function () {
  return gulp.src(['src/**/*.png', 'src/**/*.jpg'])
    .pipe(gulp.dest('bin/'));
});

gulp.task('compile', ['scripts', 'markup', 'data', 'assets']);

gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['compile']);
});

gulp.task('default', ['compile', 'watch']);
