#! /usr/bin/env node
const shell      = require("shelljs");
const wl         = require('../tools/wl.js');
const config     = require(process.cwd() + '/package.json').config;

let jsInput          = `${config.src.path}/${config.src.scripts}/${config.src.jsFilename}.js`;
let jsOutput         = `${config.dist.path}/${config.dist.scripts}/${config.src.jsFilename}.js`;
let jsOutputMinified = `${config.dist.path}/${config.dist.scripts}/${config.src.jsFilename}.min.js`;

wl('Compiling Scripts...');

shell.exec(`browserify -t vueify -e ${jsInput} -o ${jsOutput} -v`);

if (config.env === 'production') {
   wl('Uglifying Scripts...');

   shell.exec(`uglifyjs ${jsOutput} -o ${jsOutputMinified} -c -m`);
}

wl('...Done compiling scripts');
