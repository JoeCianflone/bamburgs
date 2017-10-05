const config = require('./package.json').config;

module.exports = function(ctx) {
   return {
      map: ctx.options.map,
      plugins: {
         'postcss-easy-import': {
            prefix:'_'
         },
         'postcss-flexbugs-fixes':{},
         'postcss-cssnext': {},
         'postcss-pxtorem': {
            propList: ["*"],
            rootValue: 10,
            mediaQuery: false
         },
         'postcss-sprites': {
            stylesheetPath: config.dist.styles,
            spritePath: config.dist.path + "/" + config.dist.sprites
         },
         'css-mqpacker': {},
         'cssnano': config.env === 'production' ? {'presets': ['default', {'autoprefixer' : false}] } : false
      }
   }
}
