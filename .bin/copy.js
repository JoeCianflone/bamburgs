#! /usr/bin/env node
const shell  = require('shelljs');
const config = require(process.cwd() + '/package.json').config;
const fs     = require('fs-extra');

config.copy.forEach((obj) => {
   let distList = Object.keys(obj);

   distList.forEach((distFolder) => {
      obj[distFolder].forEach((folder) => {
         let src = `${config.src.path}/${folder}`;
         if (folder.startsWith('/')) {
            src = `${process.cwd()}${folder}`;
         }
         fs.pathExists(src)
            .then(exists => {
               console.log(exists);
               if (exists) {
                  let dist = `${config.dist.path}/${distFolder}`;
                  console.log(`Copying ${src} => ${dist}`);
                  fs.copySync(src, dist);
               }
            });

      });
   });
});
