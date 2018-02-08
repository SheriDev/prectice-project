var gulp = require('gulp');
var sync = require('browser-sync');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');




//for browser reloading 

gulp.task('default',function(){
	sync({
		server:{
			baseDir: './'
		}
	})
	gulp.watch('./*.html',sync.reload);
	gulp.watch('./*.css',['compressed-css']);
	gulp.watch('./*.js',['compressed-js']);
})



//for compressed css

gulp.task('compressed-css',function(){
	return gulp.src('./*.css')
	 .pipe(csso())
	 .pipe(rename({suffix: 'min'}))
	 .pipe(gulp.dest('./minified'))
})




//for compressed js 


gulp.task('compressed-js',function(){
	return gulp.src('./*.js')
	.pipe(uglify())
	.pipe(rename({suffix: 'min'}))
	.pipe(gulp.dest('./minified'))
})






