#! /usr/bin/env node
const shell  = require("shelljs");
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

let p   = `${config.dist.path}`;

fs.remove(p)
   .then(() => {
      Object.getOwnPropertyNames(config.dist.folders).forEach((key, i) => {
         fs.mkdirs(`${p}/${config.dist.folders[key]}`).catch(e => console.log(`Oh snap... couldn't create ${key}`));
      });
   })
   .catch(() => console.log(`oh snap... removing of ${p} failed`));
