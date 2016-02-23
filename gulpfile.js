var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var eslint = require('gulp-eslint');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

var paths = {
    appJs: ['app/js/**/*.js', '!app/js/**/*.min.js'],
    appImg: 'app/img/**/*',
    appCss: ['app/css/**/*.css', '!app/css/**/*.min.css']
};

gulp.task('clean', function () {
    return del(['build']);
});

gulp.task('usemin', function() {
    return gulp.src('./*.html')
        .pipe(usemin({
            css: [ rev ],
            html: [ function () {return minifyHtml({ empty: true });} ],
            js: [ eslint, eslint.format, uglify, rev ],
            inlinejs: [ uglify ],
            inlinecss: [ minifyCss, 'concat' ]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('webpack', function() {
    return gulp.src(paths.appJs)
        .pipe(webpack())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['usemin']);