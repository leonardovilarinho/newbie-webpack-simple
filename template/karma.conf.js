var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'test/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      'test/*.js': ['webpack'],
      'test/**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    autoWatch: true,
    singleRun: true
  })
}
