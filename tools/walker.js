const fs = require('fs-extra');

let walker = function(dir, done) {
   let results = [];
   fs.readdir(dir, (err, list) => {
      if (err) {
         return done(err)
      }

      let i = 0;

      (function next() {
         let file = list[i++];
         if (! file) {
            return done(null, results)
         }

         file = dir + '/' + file;
         fs.stat(file, (err, stat) => {
            if (stat && stat.isDirectory()) {
               walker(file, (err, res) => {
                  results = results.concat(res);
                  next();
               });
            } else {
               results.push(file);
               next();
            }
         });
      })();
   });
};

module.exports = walker;
