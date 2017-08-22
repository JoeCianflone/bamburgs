#! /usr/bin/env node
const shell  = require('shelljs');
const wl     = require('../tools/wl.js');
const config = require(process.cwd() + '/package.json').config;

wl('Writing Docs...');
shell.exec(`sassdoc ${config.src.path}/${config.src.styles} -d ${config.dist.path}/docs`);
wl('...Docs Complete');
