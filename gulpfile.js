/**
 * Created by M6600 on 6/6/2016.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create(); //https://www.browsersync.io/docs/gulp
var imagemin = require('gulp-imagemin');
var gutil = require('gulp-util');


// ===> run default task
gulp.task('production', ['image','js','sass','copyFiles','servePro']);

gulp.task('default', ['sass','serveDev']);


// enable liveReload Pro
gulp.task('servePro',['sass'],function(){
	browserSync.init( {server:{baseDir:'www/', index:'index.html'},port:3010});   // learn more about different modes here-> https://www.browsersync.io/docs/options/
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('*.html',['copyFiles']).on('change',browserSync.reload);
});

// enable liveReload on Dev
gulp.task('serveDev',['sass'],function(){
	browserSync.init( {server:{baseDir:'./', index:'index.html'},port:3010});   // learn more about different modes here-> https://www.browsersync.io/docs/options/
	//the .on('change',browserSync.reload) is inside the dependency [sass] in this case
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js').on('change',browserSync.reload);
	// when the watch has no dependencies, it needs to add .on('change',browserSync.reload)
	gulp.watch('**/*.html').on('change',browserSync.reload);
});

//resize images
gulp.task('image', function () {
	console.log('compressing images...');
	gulp.src('img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('www/img'));
});

// uglify js
gulp.task('js', function () {
	console.log('scripting...');
	gulp.src('js/*.js')
		.pipe(uglify())
		.on('error', messageLog)
		.pipe(gulp.dest('www/js'))
		.pipe(browserSync.stream({match:'./js/**/*.js'}));
});

// run compass
gulp.task('sass', function () {
	console.log('styling...');
	return gulp.src('sass/**/*.scss')
		.pipe(compass({config_file:'./config.rb',css:'css',sass:'sass'}))
		.on('error', messageLog)
		.pipe(gulp.dest('www/css'))
		.pipe(browserSync.stream({match:'**/*.css'}));
});

//copy *.html , *.css, fonts, js, images to www
gulp.task('copyFiles',['sass','image','js'],function(){
	gutil.log(gutil.colors.green(' ===>> copying files to www'));
	gulp.src('*.{html,ico,png}').pipe(gulp.dest('www/')).pipe(browserSync.stream({match:'**/*.html'}));
	gulp.src('views/**/*').pipe(gulp.dest('www/views/')).pipe(browserSync.stream({match:'**/*.html'}));
	gulp.src('./fonts/**/*.{otf,,eot,ttf,woff,eof,svg}').pipe(gulp.dest('www/fonts'));
	gulp.src('css/*.css').pipe(gulp.dest('www/css'));
	gulp.src('js/**/*').pipe(gulp.dest('www/js'));
});

// custom message
function messageLog (msg){
   gutil.log(gutil.colors.red( ' ====>> ' + msg.plugin + ' : message :'+msg.message));
 	this.emit('end');
}