#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

let p       = `${config.dist.path}`;
let styles  = `${p}/${config.dist.styles}`;
let scripts = `${p}/${config.dist.scripts}`;
let fonts   = `${p}/${config.dist.fonts}`;
let images  = `${p}/${config.dist.images}`;

console.log('');
console.log('Cleaning Out Files...');

fs.removeSync(p);

fs.mkdirSync(p);
fs.mkdirSync(styles);
fs.mkdirSync(scripts);
fs.mkdirSync(fonts);
fs.mkdirSync(images);
