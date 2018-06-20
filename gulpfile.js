var gulp = require('gulp');

var purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('static/css/*.css')
    .pipe(purify(['static/js/*.js', 'layouts/**/*.html']))
    .pipe(gulp.dest('static/mincss/'))
    .on('end', function(){ console.log('CSS purified!'); });
});