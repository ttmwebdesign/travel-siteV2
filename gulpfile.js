var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

gulp.task('default', function() {

});

//Function to log when HTML changes
gulp.task('html', function() {
  console.log("This worked. Gold star for you!");
});

// function to run when CSS changes
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/prod/styles'));
});

gulp.task('watch', function() {
  // Watching the index.html file
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  // Watching the css file
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});