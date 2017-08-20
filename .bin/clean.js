#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;
const wl     = require('../tools/wl.js');
const fs     = require('fs-extra');

let p       = `${config.dist.path}`;
let folders = [
   `${p}/${config.dist.styles}`,
   `${p}/${config.dist.scripts}`,
   `${p}/${config.dist.fonts}`,
   `${p}/${config.dist.images}`
];

wl('Cleaning files/folders...');

fs.remove(p)
   .then(() => {
      folders.forEach((val, i) => {
         fs.mkdirs(val).catch(e =>wl(`Oh snap... couldn't create ${val}`));
      });
   })
   .catch(() => wl(`oh snap... removing of ${p} failed`));

wl('...Cleaned');
