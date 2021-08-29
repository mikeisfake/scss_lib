const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('./mimir/**/*.scss')
        .pipe(sass())
        .pipe(dest('./css'))
}

function watchStyles() {
    watch(["./mimir/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchStyles)