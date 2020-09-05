let gulp     = require('gulp'),
browserSync  = require('browser-sync').create(),
sass         = require('gulp-sass'),
prefixer = require('gulp-autoprefixer'),
cssmin     = require('gulp-clean-css'),
uglify       = require('gulp-uglify'),
fileinclude = require('gulp-file-include'),
imagemin = require('gulp-imagemin'),
replace = require('gulp-replace'),
rep = require('gulp-replace-image-src'),
gcmq = require('gulp-group-css-media-queries');

const ghPages = require('gh-pages'),
    path = require('path');

gulp.task('html_build', function (done) {
    return gulp.src('../*.html')
        .pipe(rep({
            prependSrc : '../MST_TestTask',
            keepOrigin : true
        }))
        .pipe(replace(' <link href="/css/style.css" rel="stylesheet">', ' <link href="/MST_TestTask/css/style.css" rel="stylesheet">'))
        .pipe(replace('<script src="/js/script.js"></script>', '<script src="../MST_TestTask/js/script.js"></script>'))
        .pipe(fileinclude())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('css_build', function (done) {
    return gulp.src('../css/style.css')
        .pipe(replace('src: url("../fonts/Gilroy/Gilroy-Regular.woff") format("woff");', 'src: url("../MST_TeskTask/fonts/Gilroy/Gilroy-Regular.woff") format("woff");'))
        .pipe(replace('src: url("../fonts/Gilroy/Gilroy-Bold.woff") format("woff");', 'src: url("../MST_TeskTask/fonts/Gilroy/Gilroy-Bold.woff") format("woff");'))
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
    .pipe(gulp.dest('build/assets/banner_img/'))
    .pipe(browserSync.stream());
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

gulp.task('default', gulp.series('html_build', 'img',  'css_build', 'js_build', 'fonts_build', 'webServer'));

function deploy(cb) {
    console.log(path.join(process.cwd()), "Путь");
    ghPages.publish(path.join(process.cwd(), './build'), cb);
  }
exports.deploy = deploy;