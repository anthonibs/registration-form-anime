const { series, parallel } = require('gulp');
const gulp = require('gulp');


const { minifyHTML, compilerCSS, IMG, minifyCSS } = require('./gulpTask/index');
const { monitoramentoDeArquivos } = require('./gulpTask/servidor');


module.exports.default = series(
    parallel(
        series(minifyHTML, compilerCSS, IMG)
    ),
    minifyCSS,
    monitoramentoDeArquivos
)
