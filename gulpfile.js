var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series( function() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) // converter o Sass em CSS
    .pipe(gulp.dest('src/css'));
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel( ['sass'] ));
}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));

// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');

// // Mover JS para src/js
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
// })

// // Servidor para olhar HTML/SCSS
// gulp.task('serve', ['sass'], function() {
//     browserSync.init({
//         server: "./src"
//     });
//     gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel( ['sass'] ));
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// gulp.task('default', ['js', 'serve']);