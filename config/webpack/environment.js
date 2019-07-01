const { environment } = require('@rails/webpacker')

const customConfig = require('./custom')
environment.config.merge(customConfig)

const typescript =  require('./loaders/typescript')
environment.loaders.prepend('typescript', typescript)

// const scss =  require('./loaders/scss')
// environment.loaders.prepend('scss', scss)

// const resolveUrlLoader = require('resolve-url-loader')
// environment.loaders.prepend('sass', resolveUrlLoader)

// resolve-url-loader must be used before sass-loader
environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader',
})
environment.loaders.get('moduleSass').use.splice(-1, 0, {
  loader: 'resolve-url-loader',
})
// environment.loaders.get('scss').use.splice(-1, 0, {
//   loader: 'resolve-url-loader',
// })

console.log("\n\n\n--------")
console.log(environment.loaders)
console.log("-------\n\n\n")



module.exports = environment
