const gulp = require('gulp')
const watch = require('gulp-watch')


function monitoramentoDeArquivos() {
    watch('./src/assets/**/*.html', () => gulp.series('minifyHTML')())
    watch('./src/assets/sass/**/*.sass', () => gulp.series('compilerCSS')())
    watch('./src/assets/imgs/**/*', () => gulp.series('IMG')())
    watch('./src/assets/*.css', () => gulp.series('minifyCSS')())
    watch('./src/assets/js/**/*.js', () => gulp.series('minifyJS')())
    
    return 
}


module.exports = { monitoramentoDeArquivos }

