#! /usr/bin/env node
const shell    = require("shelljs");
const walk     = require('../tools/walker.js');
const config   = require(process.cwd() + '/package.json').config;
const imagemin = require('imagemin');
const svgo     = require('imagemin-svgo');
const jpg      = require('imagemin-jpegtran');
const png      = require('imagemin-optipng');
const gif      = require('imagemin-gifsicle');
const fs       = require('fs-extra');

let output    = `${config.dist.path}/${config.dist.images}`;
let rawImages = `${config.src.path}/${config.src.images}`;

if (config.env !== 'production') {
   console.log('**NOTICE: IMAGE COMPRESSION ONLY OCCURS IN PRODUCTION**');
   console.log('**CHANGE ENV IN PACKAGE.JSON TO SET PRODUCTION ENVIRONMENT**');
   fs.copy(rawImages, output);
} else {
   walk(rawImages, (err, results) => {
      let imgs = results.filter((img) => {
         return img.endsWith('.svg') || img.endsWith('.png') || img.endsWith('.gif') || img.endsWith('.jpg') || img.endsWith('.jpeg')
      });

      let i = 0;
      imgs.forEach((img, index) => {
         let start = img.lastIndexOf('/');
         let outputDir = img.replace(img.substring(start), '').replace('src/images', output);
         imagemin([img], outputDir, {
            plugins: [
               svgo({removeViewBox: true}),
               jpg({ progressive: true }),
               png({ optimizationLevel: 5 }),
               gif({interlaced: true})]
         }).then(result => {
            console.log(`Minified ${++i} of ${imgs.length}: ${result[0].path}`);
         });
      });
   });
}
