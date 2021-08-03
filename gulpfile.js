const gulp = require('gulp');
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const sass = require('gulp-sass');
const cssNano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const inputs = {
    sassPath: "src/sass/**/*.scss",
    jsPath: "src/js/**/*.js",
    tsPath: "src/ts/**/*.ts",
    imgPath: "src/images/*",
};

const outputs = {
    cssPath: "dist/css",
    jsPath: "dist/js",
    tsPath: "dist/ts",
    imgPath: "public/images",
};

function sassTask() {
    return src(inputs.sassPath)
        .pipe(sass())
        .pipe(cssNano())
        .pipe(dest(outputs.cssPath))
        .pipe(browserSync.stream());
}

function jsTask() {
    return src(inputs.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest(outputs.jsPath))
}

function tsTask() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(dest(outputs.tsPath))
}

function imgTask() {
    gulp.src(inputs.imgPath)
        .pipe(imagemin())
        .pipe(gulp.dest(outputs.imgPath))
}

function watchTask() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    watch([inputs.sassPath, inputs.jsPath, inputs.tsPath], parallel(sassTask, jsTask, tsTask));
    watch('./**/*.html').on('change', browserSync.reload);
    watch("src/sass/**/*.scss").on('change', browserSync.reload);
    watch("src/js/**/*.js").on('change', browserSync.reload);
    watch("src/ts/**/*.ts").on('change', browserSync.reload);

}

exports.sassTask = sassTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.default = series(
    parallel(sassTask, jsTask, tsTask),
    watchTask
)