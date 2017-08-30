#! /usr/bin/env node
const shell  = require("shelljs");
const wl     = require('../tools/wl.js');
const config = require(process.cwd() + '/package.json').config;

let input   = `${config.src.path}/${config.src.styles}/${config.src.inputFiles.styles}`;
let output  = `${config.dist.path}/${config.dist.styles}/${config.dist.outputFiles.styles}`;

wl('Sass...');
shell.exec(`node-sass --output-style='nested' --error-bell ${input} -o ${output}`);
wl('...Done Sass');

wl('PostCSS...');
shell.exec(`postcss ${output}  -o ${output} -c ./postcss.config.js -r`);
wl('...Done PostCSS');
