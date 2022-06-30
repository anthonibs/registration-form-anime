const { series, parallel } = require('gulp');
const gulp = require('gulp');


const { minifyHTML, compilerCSS, IMG, minifyCSS } = require('./src/gulpTask/index');
const { monitoramentoDeArquivos } = require('./src/gulpTask/servidor');


module.exports.default = series(
    parallel(
        series(minifyHTML, compilerCSS, IMG)
    ),
    minifyCSS,
    monitoramentoDeArquivos
)
