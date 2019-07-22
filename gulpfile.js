const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile scss into scss.liquid file
function compileLiquid() {
    // Get SCSS files
    return gulp.src('./src/scss/**/*.scss')
    // Pass it through sass compiler
    .pipe(sass())
    // Save the compiled scss.liquid
    .pipe(gulp.dest('./assets/theme.scss.liquid'));

}

exports.style = compileLiquid;