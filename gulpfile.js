var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

var paths = {
    scripts: ['./js/*.js', '!./js/*.min.js']
};

gulp.task('js', function() {
    return gulp.src([
            './js/fuse.js',
            './js/hyperlink.cool.js',
            '!./js/hyperlink.cool.min.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('hyperlink.cool.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('js'));
});

gulp.task('js-hyperlink-cool', function() {
    return gulp.src([
            './js/hyperlink.cool.js',
            '!./js/hyperlink.cool.min.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('hyperlink.cool.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('js'));
});

gulp.task('js-fuse', function() {
    return gulp.src([
            './js/fuse.js',
            '!./js/fuse.min.js'
        ])
        .pipe(concat('fuse.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch(['./js/**/*.js'], ['js']);
});

gulp.task('default', ['js', 'watch']);
