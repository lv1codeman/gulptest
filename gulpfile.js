// 載入 package
const gulp = require('gulp');
const print = require('gulp-print').default;



// 預設 gulp task
gulp.task('default', function() {
    return gulp.src('package.json')
        .pipe(print(function() { return 'Hello gulp !!'; }));
});