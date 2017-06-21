#! /usr/bin/env node
const shell  = require('shelljs');
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

let folderList ="";
config.copy.forEach((folder) => {
   folderList = folderList + `${config.src.path}/${folder} `;
});

shell.exec(`onchange ${folderList} -v -i -- npm run build:copy`);
