#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let srcPath    = `${config.src.path}`;
let sassPath   = `${srcPath}/${config.src.styles}/**/*.s+(a|c)ss`;
let configFile = `${process.cwd()}/.sass-lint.yml`;

console.log('');
console.log('Linting Sass...');

console.log(configFile);
shell.exec(`sass-lint -c ${configFile} '${sassPath}' -v -q; exit 0`);

console.log('');
console.log('Linting Against EditorConfig...');

shell.exec(`editorconfig-tools check ${srcPath}/**/*; exit 0`);
