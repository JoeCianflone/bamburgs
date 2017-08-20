#! /usr/bin/env node
const shell  = require("shelljs");
const wl     = require('../tools/wl.js');
const config = require(process.cwd() + '/package.json').config;

let entryFile   = `${config.src.path}/${config.src.styles}/${config.src.styleEntry}`;
let outputFile  = `${config.dist.path}/${config.dist.styles}`;

wl('Sass...');
shell.exec(`node-sass --output-style='nested' --error-bell ${entryFile} -o ${outputFile}`);
wl('...Done Sass');

wl('PostCSS...');
shell.exec(`postcss ${outputFile}/${config.dist.styleOutput}  -o ${outputFile}/${config.dist.styleOutput} -c ./postcss.config.js -r`);
wl('...Done PostCSS');
