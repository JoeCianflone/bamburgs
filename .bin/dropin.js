#! /usr/bin/env node
const shell = require("shelljs");
const fs = require('fs-extra');

if (process.argv[2] == undefined) {
   console.log("You need to specifiy a folder: `npm run dropin path/to/place/files`");
   console.log("NOTE: the folder path is relative to the current directory you're running this command from");
   return false;
}

let folderPath = process.argv[2];

fs.copy('./node_modules/bamburgs/src/sass', folderPath, (err) => {
   if (err) {
      return console.log(err);
   }
});

fs.copy('./node_modules/bamburgs/package.json', `${folderPath}/bamburgs.package.json`, (err) => {
   if (err) {
      return console.log(err);
   }
});

fs.copy('./node_modules/bamburgs/postcss.config.js', `${folderPath}/bamburgs.postcss.config.js`, (err) => {
   if (err) {
      return console.log(err);
   }
});
