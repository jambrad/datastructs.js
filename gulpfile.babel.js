import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';


gulp.task('buildjs', () => {
    return gulp.src('source/**/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('distribution'));
});


gulp.task('build', ['buildjs']);


gulp.task('watch', () => {
    gulp.watch('source/**/*.js', ['buildjs']);
});


gulp.task('default', ['build', 'watch']);
