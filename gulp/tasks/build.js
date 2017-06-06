var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


gulp.task('previewDist', function(){
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
});


gulp.task('optimizeImages', function() {
    return gulp.src('./app/assets/images/**/*')
        .pipe(gulp.dest("./docs/assets/images"));
});


gulp.task('usemin', ['styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
    .pipe(usemin({
       css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))                
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['optimizeImages', 'usemin']);






