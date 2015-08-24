// Инициализируем плагины
var lr = require('tiny-lr'), // livereload server
    gulp = require('gulp'), // Gulp JS
    jade = require('gulp-jade'), // Jade
    sass = require('gulp-sass'), // sass
    livereload = require('gulp-livereload'), // Gulp Livereload plugin
    myth = require('gulp-myth'), // CSS prefixes
    csso = require('gulp-csso'), // CSS minification
    imagemin = require('gulp-imagemin'), // Images minification
    uglify = require('gulp-uglify'), // JS Minification
    concat = require('gulp-concat'), // Files concatenations
    connect = require('connect'), // Webserver
    ghPages = require('gulp-gh-pages'), //GitHub Pages deployer
    server = lr(),
    deploy = false;


gulp.task('getRenderer', function() {
    gulp.src(['./node_modules/gulp-jade/node_modules/jade/runtime.js'])
        .pipe(gulp.dest('./assets/js/vendors/'));
});

gulp.task('sass', function() {
    gulp.src('./assets/font/**/*')
        .pipe(deploy ? gulp.dest('./dist/font') : gulp.dest('./public/font'));

    gulp.src('./assets/scss/*.scss')
        .pipe(sass())
            .on('error', console.log)
        .pipe(myth())
        .pipe(csso())
        .pipe(deploy ? gulp.dest('./dist/css/') : gulp.dest('./public/css/')) // записываем css
        .pipe(livereload(server));
});

gulp.task('locales', function () {
    gulp.src(['./assets/locales/locales.js', './assets/locales/locales.json'])
        .pipe(concat('locales.js'))
        .pipe(gulp.dest('./assets/js/'))
        .pipe(gulp.dest('./dist/js/'));

    gulp.src(['./assets/locales/news.js', './assets/locales/news.json'])
        .pipe(concat('news.js'))
        .pipe(gulp.dest('./assets/js/'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(livereload(server));
});

// Generate HTML from Jade
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
        .pipe(deploy ? gulp.dest('./dist/') : gulp.dest('./public/'))
        .pipe(livereload(server));
}); 


gulp.task('js', function() {
    var scripts = gulp.src(['./assets/js/**/*.js', '!./assets/js/vendors/**/*.js'])
        .pipe(concat('scripts.js'));

    if (deploy) {
        scripts = scripts.pipe(uglify());
    }

    scripts
        .pipe(deploy ? gulp.dest('./dist/js') : gulp.dest('./public/js'))
        .pipe(livereload(server));

    gulp.src([
            './assets/js/vendors/jquery-2.0.3.min.js', 
            './assets/js/vendors/**/*'
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(deploy ? gulp.dest('./dist/js') : gulp.dest('./public/js'))
        .pipe(livereload(server));
});

gulp.task('images', function() {
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(deploy ? gulp.dest('./dist/img') : gulp.dest('./public/img'));
});


// Development server run
gulp.task('default', function() {
    // Build project
    gulp.run('getRenderer');
    gulp.run('sass');
    gulp.run('locales');
    gulp.run('jade');
    gulp.run('js');
    gulp.run('images');

    // Invoke Livereload
    server.listen(35729, function(err) {
        if (err) return console.log(err);

        gulp.watch('assets/scss/**/*', function() {
            gulp.run('sass');
        });
        gulp.watch('assets/locales/**/*', function() {
            gulp.run('locales');
        });
        gulp.watch('assets/template/**/*', function() {
            gulp.run('jade');
        });
        gulp.watch('assets/js/**/*', function() {
            gulp.run('js');
        });
        gulp.watch('assets/img/**/*', function() {
            gulp.run('images');
        });
    });

    connect()
        .use(connect.static('./public'))
        .listen(process.env.PORT || 5000);

    console.log('Server listening on http://localhost:5000');
});


gulp.task('deploy', function() {
    deploy = true;

    gulp.run('getRenderer');
    gulp.run('sass');
    gulp.run('locales');
    gulp.run('jade');
    gulp.run('js');
    gulp.run('images');

    return gulp.src('./dist/**/*')
        .pipe(ghPages({
            remoteUrl: "https://github.com/rpEK007/Consulting.git"
        }));
});