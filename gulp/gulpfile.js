let gulp     = require('gulp'),
browserSync  = require('browser-sync').create(),
sass         = require('gulp-sass'),
prefixer = require('gulp-autoprefixer'),
cssmin     = require('gulp-clean-css'),
uglify       = require('gulp-uglify'),
fileinclude = require('gulp-file-include'),
imagemin     = require('gulp-imagemin'),
pngquant     = require('imagemin-pngquant'),
gcmq = require('gulp-group-css-media-queries');

const ghPages = require('gh-pages'),
    path = require('path');

gulp.task('html_build', function (done) {
    return gulp.src('../*.html')
        .pipe(fileinclude())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('css_build', function (done) {
    return gulp.src('../css/style.css')
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gcmq())
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('js_build', function (done) {
    return gulp.src('../js/script.js')
        .pipe(fileinclude())
     //   .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('fonts_build', function (done) {
    gulp.src('../fonts/*.*')
        .pipe(gulp.dest('build/fonts/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('img', function() {
    return gulp.src('../assets/banner_img/*')
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.stream());
    done();
  });

gulp.task('webServer', function(done) {
    browserSync.init({
        server: "build/"
    });
    gulp.watch('../**/*.html', gulp.series('html_build'));
    gulp.watch('../**/*.scss', gulp.series('css_build'));
    gulp.watch('../**/*.js', gulp.series('js_build'));
    gulp.watch('../assets/fonts/*.*', gulp.series('fonts_build'));
    done();
});

gulp.task('default', gulp.series('html_build', 'img', 'css_build', 'js_build', 'fonts_build', 'webServer'));

function deploy(cb) {
    ghPages.publish(path.join(process.cwd(), './build'), cb);
  }
exports.deploy = deploy;