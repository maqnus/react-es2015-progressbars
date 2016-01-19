var gulp       = require('gulp'),

	browserify = require('browserify'),
	babelify   = require('babelify'),
	source     = require('vinyl-source-stream'),
	buffer     = require('vinyl-buffer'),

	sass = require('gulp-sass');

gulp.task('style', function() {
	var SOURCE = './src/progressbar.scss',
		DEST = './dest/style';

	return gulp.src(SOURCE)
	    .pipe(sass())
	    .pipe(gulp.dest(DEST))
});

gulp.task('bars', function() {
	var SOURCE = './src/Bars.js',
		DEST = './dest/scripts';

	return browserify(SOURCE, {debug: false})
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bars.js'))
		.pipe(buffer())
		.pipe(gulp.dest(DEST));
});

gulp.task('copy', function() {
	var SOURCE = './src/idnex.html',
		DEST = './dest/';

	return gulp.src(SOURCE)
		.pipe(gulp.dest(DEST));
});

gulp.task('default', ['style', 'bars']);
