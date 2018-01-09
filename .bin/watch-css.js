#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let sassPath   = `${config.src.path}/${config.src.styles}`;

shell.exec(`onchange ${sassPath} -v -i -- npm run bam:build:css`);

