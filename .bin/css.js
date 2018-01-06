#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let input   = `${config.src.path}/${config.src.folders.styles}`;
let output  = `${config.dist.path}/${config.dist.folders.styles}`;

console.log(`\nCompile Sass to CSS`);

// SourceMaps and Output compression both handled
// by PostCSS don't worry about them here
let compiledSass = shell.exec(`node-sass --output-style='nested' --sourcemap=none --error-bell ${input} -o ${output}`);

if (compiledSass.code == 0 ) {
   console.log(`\nRunning PostCSS`);
   shell.exec(`postcss ${output}/bamburgs.css -o ${output}/bamburgs.css -c ./postcss.config.js -r`);
}

