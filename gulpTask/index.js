const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');



function minifyHTML() {
    return gulp.src('./src/assets/**/*.html')
    .pipe(htmlmin( {collapseWhitespace: true } )) // Remove os espaços em branco e formata o html em minificado
    .pipe(rename( {suffix: ".min"} ))
    .pipe(gulp.dest('build/assets'))
}

function compilerCSS() {
    return gulp.src('./src/assets/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('src/assets'))
}

function minifyCSS() {
    return gulp.src('./src/assets/*.css')
        .pipe(uglifycss({ "uglyComments": true } ))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('build/assets/css'))
}

function minifyJS() {
    return gulp.src('src/assets/js/**/*.js')
        // .pipe(uglifycss())
        // .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('build/assets/js'))
}

function IMG() {
    return gulp.src('./src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('minifyHTML', minifyHTML)
gulp.task('compilerCSS', compilerCSS)
gulp.task('IMG', IMG)
gulp.task('minifyCSS', minifyCSS)
gulp.task('minifyJS', minifyJS)


module.exports = {
    minifyHTML,
    compilerCSS,
    IMG,
    minifyCSS,
    minifyJS
}