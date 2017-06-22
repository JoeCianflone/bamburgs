#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;

let imagePath   = `${config.src.path}/${config.src.images}/**/*.{jpg,jpeg,svg,png,gif}`;

shell.exec(`onchange ${imagePath} -v -i -- npm run build:images`);
