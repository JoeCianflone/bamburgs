#! /usr/bin/env node
let p = process.cwd() + '/node_modules/bamburgs';

const shell = require("shelljs");
const fs = require('fs-extra');
const package = require(p + '/package.json');
const util = require('util');

if (process.argv[2] == undefined) {
   console.log("You need to specifiy a folder: `npm run dropin path/to/place/files`");
   console.log("NOTE: the folder path is relative to the current directory you're running this command from");
   return false;
}

fs.copy(p + '/src/sass', process.argv[2], (err) => {
   if (err) {
      return console.log(err);
   }
});

fs.copy(p+'/postcss.config.js', `${process.argv[2]}/bamburgs.postcss.config.js`, (err) => {
   if (err) {
      return console.log(err);
   }
});

let options = {
   "config": package.config,
   "browserslist": package.browserslist,
   "dependencies": package.dependencies
};
console.log("**************************************************");
console.log("**************************************************");
console.log ('Files Dropped into your folder. BUT THIS WONT YET WORK!');
console.log('You will need to copy the following values to your package.json file');
console.log(JSON.stringify(options, null, 4));
console.log(`FINAL STEP: COPY ${process.argv[2]}/bamburgs.postcss.config.js to your ROOT FOLDER`);
console.log("**************************************************");
console.log("**************************************************");
