#! /usr/bin/env node
const shell  = require("shelljs");
const wl     = require('../tools/wl.js');
const config = require(process.cwd() + '/package.json').config;

let srcPath    = `${config.src.path}`;
let sassPath   = `${srcPath}/${config.src.styles}/**/*.s+(a|c)ss`;
let configFile = `${process.cwd()}/.sass-lint.yml`;

wl('Linting Sass...')

shell.exec(`sass-lint -c ${configFile} '${sassPath}' -v -q; exit 0`);
wl('...Done');

wl('Linting EditorConfig...')
shell.exec(`editorconfig-tools check ${srcPath}/**/*; exit 0`);
wl('...Done')
