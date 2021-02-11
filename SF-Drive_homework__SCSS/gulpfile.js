'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
sass.compiler = require('node-sass');

// Building project
gulp.task('build', async function () {
  sassCompile();
  linkIncludes();
  return "Complete build";
});


// Compiling sass files
function sassCompile(){
  gulp.src('./dev.app/sass/**/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build.app/css'));
}

// Link header and footer in HTML files
function linkIncludes(){
  gulp.src(['./dev.app/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./build.app/'));
}