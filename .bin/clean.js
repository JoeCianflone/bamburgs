#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

let p       = `${config.dist.path}`;
let folders = [
   `${p}/${config.dist.styles}`,
   `${p}/${config.dist.scripts}`,
   `${p}/${config.dist.fonts}`,
   `${p}/${config.dist.images}`
];

console.log();
console.log('Cleaning Out Files...');

fs.remove(p)
   .then(() => {
      folders.forEach((val, i) => {
         fs.mkdirs(val).catch(e => console.log(`Oh snap... couldn't create ${val}`));
      });
   })
   .catch(() => console.error(`oh snap... removing of ${p} failed`));
