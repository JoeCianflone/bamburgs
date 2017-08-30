#! /usr/bin/env node
const shell  = require("shelljs");
const wl     = require('../tools/wl.js');
const config = require(process.cwd() + '/package.json').config;

let input   = `${config.src.path}/${config.src.styles}/${config.src.stylesFilename}`;
let output  = `${config.dist.path}/${config.dist.styles}`;

console.log(output);
wl('Sass...');
shell.exec(`node-sass --output-style='nested' --error-bell ${input} -o ${output}`);
wl('...Done Sass');

wl('PostCSS...');
shell.exec(`postcss ${output}/${config.dist.stylesFilename}  -o ${output}/${config.dist.stylesFilename} -c ./postcss.config.js -r`);
wl('...Done PostCSS');
