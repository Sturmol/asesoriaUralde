var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync');

gulp.task('styles', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./scss/**/*.scss', ['styles']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['styles', 'serve']);