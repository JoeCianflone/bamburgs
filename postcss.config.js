const config = require('./package.json').config;

module.exports = function(ctx) {
   return {
      map: ctx.options.map,
      plugins: {
         'postcss-import': {},
         'postcss-sprites': {
            stylesheetPath: config.dist.styles,
            spritePath: config.dist.path + "/" + config.dist.sprites
         },
         'postcss-urlrev': {
            relativePath: config.dist.styles
         },
         'autoprefixer': {},
         'cssnano': config.env === 'production' ? {} : false,
      }
   }
}
