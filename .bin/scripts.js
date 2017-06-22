#! /usr/bin/env node
const shell      = require("shelljs");
const config     = require(process.cwd() + '/package.json').config;

let jsInput          = `${config.src.path}/${config.src.scripts}/${config.src.entry}.js`;
let jsOutput         = `${config.dist.path}/${config.dist.scripts}/${config.src.entry}.js`;
let jsOutputMinified = `${config.dist.path}/${config.dist.scripts}/${config.src.entry}.min.js`;

console.log('');
console.log('Compiling Scripts...');

shell.exec(`browserify -t vueify -e ${jsInput} -o ${jsOutput} -v`);

if (config.env === 'production') {
   console.log('');
   console.log('Uglifying Scripts...');

   shell.exec(`uglifyjs ${jsOutput} -o ${jsOutputMinified} -c -m`);
}
