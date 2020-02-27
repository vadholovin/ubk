var gulp = require('gulp'),
	watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  php = require('gulp-connect-php'),
  browserSync = require('browser-sync').create();


gulp.task('sass', function () {
	gulp.src(['scss/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('html/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('php', function(){
  php.server({base:'html', port:3000, keepalive:true});
});

gulp.task('watch', ['browserSync', 'php', 'sass'], function () {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('html/**/*.php', browserSync.reload);
  gulp.watch('html/assets/js/*.js', browserSync.reload);
  gulp.watch('html/assets/images/*', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    proxy:"localhost:3000",
      baseDir: "html",
      open:true,
      notify:false
  });
});

gulp.task('default', ['watch']);