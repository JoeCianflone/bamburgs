#! /usr/bin/env node
const shell  = require('shelljs');
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

config.copy.forEach((obj) => {
   let distList = Object.keys(obj);

   distList.forEach((distFolder) => {
      obj[distFolder].forEach((folder) => {
         let src =  folder.startsWith('/') ? `${process.cwd()}${folder}` : `${config.src.path}/${folder}`;

         fs.pathExists(src).then((result) => {
               let dist = `${config.dist.path}/${distFolder}`;
               console.log(`Copying ${src} => ${dist}`);
               fs.copySync(src, dist);
         }).catch(err => console.error(`${src} does not exist`));
      });
   });
});
