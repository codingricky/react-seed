var gulp = require('gulp');
var gutil = require('gulp-util');
var helpers = require('../helpers');

gulp.task('jshint', 'Run JSHint on code', function(done) {
  helpers.childProcess('node', [
    'tasks/jshint.js'
  ], function(error, stdout, stderr) {
    if(stderr) {
      gutil.log(gutil.colors.red(stderr));
    } else {
      console.log(stdout);
    }

    done();
  });
});
