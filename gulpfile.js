var gulp     = require('gulp'),
    sass     = require('gulp-sass'),
    rename   = require('gulp-rename')


// sass compile
gulp.task('sass', function(){
    return gulp.src('./template/css/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./template/css/'))
})
gulp.task('sass:watch', function () {
    gulp.watch('./template/css/style.sass', ['sass'])
})



// default task
gulp.task('watch', [ 'sass', 'sass:watch' ])
