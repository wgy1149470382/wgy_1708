//引入gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
   //查找sass文件 
   //.:表示当前目录
   //*表示多个文件
   gulp.src('./src/sass/*.scss') //得到文件流（文件在内存中的状态）

   //通过管道传输
   //编译
   //outputStyle:修改输出文件的格式
   .pipe(sass({outputStyle:'expanded'})) 

   //输出到硬盘
   .pipe(gulp.dest('./src/css/'))

});

// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
    //监听的文件
    //当文件有修改。则执行compileSass任务
    gulp.watch('./src/sass/*.scss',['compileSass'])
})
// //合并压缩JS文件
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// gulp.task('mergeJs',function(){
//   gulp.src(['./src/js/*.js','!./src/js/all.js'])

//   //合并
//   .pipe(concat('all.js'))
//   //输出
//   .pipe(gulp.dest('./src/js/'))
// })