#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let scriptPath   = `${config.src.path}/${config.src.scripts}/**/*.js`;
let vuePath      = `${config.src.path}/${config.src.scripts}/**/*.vue`;

shell.exec(`onchange ${scriptPath} ${vuePath} -v -i -- npm run build:scripts`);
