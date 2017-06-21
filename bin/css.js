#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let sassPath   = `${config.src.path}/${config.src.styles}`;
let outputPath = `${config.dist.path}/${config.dist.styles}`;

console.log('');
console.log('Compile Sass...');

shell.exec(`node-sass --output-style='nested' --error-bell ${sassPath} -o ${outputPath}`);

console.log('');
console.log('Running PostCSS...');

shell.exec(`postcss ${outputPath}//\* -c ./postcss.config.js -r`);
