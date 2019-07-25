const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// Compile scss into scss.liquid file
function compileLiquid() {
    // Get SCSS files
    return gulp.src('./src/scss/theme.scss')
    // Pass it through sass compiler
    .pipe(sass({ 
        outputStyle: 'compressed '
    })
    .on('error', sass.logError))
    // Add vendor prefixes
    .pipe(autoprefixer())
    .pipe(rename('theme.scss.liquid'))
 
    // Save the compiled scss.liquid
    .pipe(gulp.dest('./assets/'));

}

function watch() {
    gulp.watch('./src/scss/**/*.scss', compileLiquid);
}

exports.style = compileLiquid;
exports.watch = watch;