const config = require('./package.json').config;

module.exports = function(ctx) {
   return {
      map: {inline: false},
      plugins: {
         'postcss-import': {},
         'postcss-simple-extend': {},
         'postcss-cssnext': {},
         'postcss-flexbugs-fixes':{},
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
         'cssnano': {
            "autoprefixer": false,
            "preset": [
               "default",
               {
                  discardComments: {removeAll: true},
                  normalizeWhitespace: (config.env === 'production') ? {} : false
               }
            ]
         }
      }
   }
}
