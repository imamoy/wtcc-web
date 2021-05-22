var gulp = require("gulp");
var $ = require('gulp-load-plugins')();
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();

// gulp.task('copyHTML', function(){
//     return gulp.src('./source/**/*.html')
//     .pipe(gulp.dest('./project/'))
// })

gulp.task('pug', function buildHTML() {
    return gulp.src('./source/html/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest("./project"))
    .pipe(browserSync.stream());
  });

gulp.task('css-plugins', function () {
    return gulp
      .src("./source/styles/plugins/**/*")
      .pipe($.plumber())
      .pipe(gulp.dest("./project/styles/plugins/"))
      .pipe(browserSync.stream());
});

gulp.task('icon', function () {
    return gulp
      .src("./source/styles/fonts/**/*")
      .pipe($.plumber())
      .pipe(gulp.dest("./project/styles/fonts/"))
      .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp
      .src("./source/styles/images/**/*")
      .pipe($.plumber())
      .pipe(gulp.dest("./project/styles/images/"))
      .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    var plugins = [                         
        autoprefixer({ browsers: ['last 2 version'] }) //postcss 使用的套件
    ];;

    return gulp.src('./source/styles/**/*.sass')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    // 編譯完成
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./project/styles/'))
    .pipe(browserSync.stream());
});


gulp.task('js', function(){
    return gulp.src('./source/scripts/**/*.js')
    .pipe($.plumber())
    .pipe(gulp.dest('./project/scripts/'))
    .pipe(browserSync.stream());
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./project",
            index: "./index.html"
        },
        reloadDebounce: 1000 //調整參數減少重新整理次數
    });
});

gulp.task('watch', function () {
    gulp.watch('./source/html/**/*.pug', ['pug']);
    gulp.watch('./source/styles/plugins/**/*', ['css-plugins']);
    gulp.watch('./source/styles/font/**/*', ['icon']);
    gulp.watch('./source/styles/images/**/*', ['images']);
    gulp.watch('./source/styles/**/*.sass', ['sass']);
    gulp.watch('./source/scripts/**/*.js', ['js']);
});

gulp.task('default', ['pug', 'images', 'icon', 'css-plugins', 'sass', 'js', 'browser-sync', 'watch']);