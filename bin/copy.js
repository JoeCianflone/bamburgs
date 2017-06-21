#! /usr/bin/env node
const shell  = require('shelljs');
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

config.copy.forEach((folder) => {
   let src = `${config.src.path}/${folder}`;
   let dist = `${config.dist.path}/${folder}`;
   console.log(`Copying ${src} => ${dist}`);
   fs.copySync(src, dist);
});
