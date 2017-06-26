#! /usr/bin/env node
const shell  = require('shelljs');
const config = require(process.cwd() + '/package.json').config;

shell.exec(`sassdoc ${config.src.path}/${config.src.styles} -d ${config.dist.path}/docs`);
