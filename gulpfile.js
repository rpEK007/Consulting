// Инициализируем плагины
var lr = require('tiny-lr'), // Минивебсервер для livereload
    gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    sass = require('gulp-sass'), // Плагин для sass
    livereload = require('gulp-livereload'), // Livereload для Gulp
    myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    connect = require('connect'), // Webserver
    ghPages = require('gulp-gh-pages'), //GitHub Pages deployer
    server = lr(),
    deploy = false;


// Собираем sass
gulp.task('sass', function() {
    gulp.src('./assets/font/**/*')
        .pipe(deploy ? gulp.dest('./build/font') : gulp.dest('./public/font'));

    gulp.src('./assets/scss/*.scss')
        .pipe(sass()) // собираем sass
            .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(myth()) // добавляем префиксы - http://www.myth.io/
        .pipe(csso()) // Minify CSS
        .pipe(deploy ? gulp.dest('./build/css/') : gulp.dest('./public/css/')) // записываем css
        .pipe(livereload(server)); // даем команду на перезагрузку css
});


// Собираем html из Jade
gulp.task('jade', function() {
    //Generate function template() to render different locales on FE
    gulp.src(['./assets/template/modules.jade'])
        .pipe(jade({
            client: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest('./assets/js/'))
        .pipe(livereload(server));

    //Compile index.html
    gulp.src(['./assets/template/index.jade'])
        .pipe(jade({
            data: require('./assets/locales/locales.json').ua
        }))
        .on('error', console.log)
        .pipe(deploy ? gulp.dest('./build/') : gulp.dest('./public/'))
        .pipe(livereload(server));
}); 


// Собираем JS
gulp.task('js', function() {
    gulp.src(['./assets/js/**/*.js', '!./assets/js/vendors/**/*.js'])
        .pipe(concat('scripts.js')) // Собираем все JS
        // .pipe(uglify())
        .pipe(deploy ? gulp.dest('./build/js') : gulp.dest('./public/js'))
        .pipe(livereload(server)); // даем команду на перезагрузку страницы

    gulp.src([
            './assets/js/vendors/jquery-2.0.3.min.js', 
            './assets/js/vendors/bootstrap.min.js', 
            './assets/js/vendors/runtime.js', 
            './assets/js/vendors/underscore.min.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(deploy ? gulp.dest('./build/js') : gulp.dest('./public/js'))
        .pipe(livereload(server)); // даем команду на перезагрузку страницы
});


// Копируем и минимизируем изображения
gulp.task('images', function() {
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(deploy ? gulp.dest('./build/img') : gulp.dest('./public/img'));
});


// Запуск сервера разработки gulp watch
gulp.task('default', function() {
    // Предварительная сборка проекта
    gulp.run('sass');
    gulp.run('jade');
    gulp.run('js');
    gulp.run('images');

    // Подключаем Livereload
    server.listen(35729, function(err) {
        if (err) return console.log(err);

        gulp.watch('assets/scss/**/*.scss', function() {
            gulp.run('sass');
        });
        gulp.watch('assets/template/**/*.jade', function() {
            gulp.run('jade');
        });
        gulp.watch('assets/img/**/*', function() {
            gulp.run('images');
        });
        gulp.watch('assets/js/**/*', function() {
            gulp.run('js');
        });
    });

    connect()
        .use(livereload(server))
        .use(connect.static('./public'))
        .listen('9000');

    console.log('Server listening on http://localhost:9000');
});


gulp.task('deploy', function() {
    deploy = true;

    gulp.run('sass');
    gulp.run('jade');
    gulp.run('js');
    gulp.run('images');

    return gulp.src('./build/**/*')
        .pipe(ghPages());
});

gulp.task('i18n', function () {
    gulp.src(['./assets/locales/locales.js', './assets/locales/locales.json'])
        .pipe(concat('locales.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('getRenderer', function() {
    gulp.src(['./node_modules/gulp-jade/node_modules/jade/runtime.js'])
        .pipe(gulp.dest('./assets/js/vendors/')); //Copy runtime.js - required for Client-Side jade.
});