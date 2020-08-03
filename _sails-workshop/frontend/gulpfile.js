const gulp = require('gulp');
const webserver = require('gulp-webserver');
const mainBowerFiles = require('main-bower-files');
const inject = require('gulp-inject');

let paths = {
    temp: 'temp',
    tempVendor: 'temp/vendor',
    tempIndex: 'temp/index.html',

    index: 'app/index.html',
    appSrc: ['app/**/*', '!app/index.html'],
    bowerSrc: 'bower_components/**/*',
}

gulp.task('default', ['watch']);

gulp.task('watch', ['serve'], function(){
    gulp.watch(paths.appSrc, ['scripts']);
    gulp.watch(paths.bowerSrc, ['vendors']);
    gulp.watch(paths.index, ['copyAll']);
});

gulp.task('serve', ['copyAll'], function(){
    const BACKEND_HOSTNAME = process.env.BACKEND_HOSTNAME ? process.env.BACKEND_HOSTNAME : 'localhost';

    return gulp.src(paths.temp)
        .pipe(webserver({
            host: '0.0.0.0',
            livereload: true,
            proxies: [{
                source: '/api',
                target: `http://${BACKEND_HOSTNAME}:1337`,
            }]
        }));
});

gulp.task('copyAll', function(){
    let tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));
    let appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));

    return gulp.src(paths.index)
            .pipe(gulp.dest(paths.temp))
            .pipe(inject(tempVendors, { relative: true, name: 'vendorInject' }))
            .pipe(inject(appFiles, { relative: true }))
            .pipe(gulp.dest(paths.temp));
});


gulp.task('vendors', function() {
    let tempVendors = gulp.src(mainBowerFiles()).pipe(gulp.dest(paths.tempVendor));
    
    return gulp.src(path.tempIndex)
        .pipe(inject(tempVendors, { relative: true, name: 'vendorInject'}))
        .pipe(gulp.dest(paths.temp))
});

gulp.task('scripts', function(){
    let appFiles = gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));
    
    return gulp.src(paths.tempIndex)
        .pipe(inject(appFiles, { relative: true }))
        .pipe(gulp.dest(paths.temp));
});
