#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let sassPath   = `${config.src.path}/${config.src.styles}`;
let outputPath = `${config.dist.path}/${config.dist.styles}`;

console.log('');
console.log('Compile Sass...');
shell.exec(`node-sass ${sassPath} -o ${outputPath}`);

let postCSSOptions = 'postcss-import autoprefixer';
if (config.env === 'production') {
   postCSSOptions = postCSSOptions + ' cssnano';
}

console.log('');
console.log('Running PostCSS...');

shell.exec(`postcss -u ${postCSSOptions} -r ${outputPath}//\*`);
