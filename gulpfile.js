var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync');

gulp.task('styles', function() {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./src/scss/*.scss', ['styles']);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});

gulp.task('html', function() {
  gulp.src('.src/html/**/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('images', function(){
  return gulp.src('./src/images/**/*.png')
    .pipe(gulp.dest('./dist/images'))
});

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js'))
});


gulp.task('default', ['styles', 'serve', 'html', 'images', 'js']);