var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();


gulp.task('watch', function() {
  // browser-sync
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  // Watching the index.html file
  watch('./app/index.html', function(){
    browserSync.reload();
  });
  // Watching the css file
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
  //watch for webpack
  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

//browser-sync css live reload

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/prod/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});