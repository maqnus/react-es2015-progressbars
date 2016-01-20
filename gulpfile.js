var gulp       = require('gulp'),

	browserify = require('browserify'),
	babelify   = require('babelify'),
	source     = require('vinyl-source-stream'),
	buffer     = require('vinyl-buffer'),

	sass = require('gulp-sass');

gulp.task('style', function() {
	var SOURCE = './src/progressbar.scss',
		DIST = './dist/style';

	return gulp.src(SOURCE)
	    .pipe(sass())
	    .pipe(gulp.dest(DIST))
});

gulp.task('create-bars', function() {
	var SOURCE = './src/Bars.js',
		DIST = './dist/scripts';

	return browserify(SOURCE, {debug: false})
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bars.js'))
		.pipe(buffer())
		.pipe(gulp.dest(DIST));
});

gulp.task('copy', function() {
	var SOURCE = './src/index.html',
		DIST = './dist/';

	return gulp.src(SOURCE)
		.pipe(gulp.dest(DIST));
});

gulp.task('default', ['copy', 'style', 'create-bars']);
