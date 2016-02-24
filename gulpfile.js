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
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var zip = require('gulp-zip');

var paths = {
    appJs: ['app/js/**/*.js', '!app/js/**/*.min.js'],
    appImg: 'app/img/**/*',
    appCss: ['app/css/**/*.css', '!app/css/**/*.min.css']
};

gulp.task('clean', function () {
    return del(['target']);
});

/* ----------- */
/* --- DEV --- */
/* ----------- */

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', gutil.log))
        .pipe(gulp.dest('target/build/app/css'));
});

gulp.task('coffee', function() {
    gulp.src('app/coffee/**/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('target/build/app/js'));
});

gulp.task('build', ['sass', 'coffee'], function () {
    gulp.src(['./*.html']).pipe(gulp.dest('target/build'));
    gulp.src(['app/css/**/*.css']).pipe(gulp.dest('target/build/app/css'));
    gulp.src(['app/img/*']).pipe(gulp.dest('target/build/app/img'));
    gulp.src(['app/js/**/*.js']).pipe(gulp.dest('target/build/app/js'));
    gulp.src(['bower_components/**/*']).pipe(gulp.dest('target/build/bower_components'));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/coffee/**/*.coffee', ['coffee']);
});

/* ------------ */
/* --- DIST --- */
/* ------------ */

gulp.task('usemin', ['build'], function() {
    return gulp.src('target/build/*.html')
        .pipe(usemin({
            css: [ rev ],
            html: [ function () {return minifyHtml({ empty: true });} ],
            js: [ uglify, rev ],
            inlinejs: [ uglify ],
            inlinecss: [ minifyCss, 'concat' ]
        }))
        .pipe(gulp.dest('target/dist'));
});

gulp.task('dist', ['usemin'], function() {
    return gulp.src('target/dist/*')
        .pipe(zip('sandboxjs.zip'))
        .pipe(gulp.dest('target/dist'));
});


/* --------------- */
/* --- DEFAULT --- */
/* --------------- */

gulp.task('default', ['usemin']);