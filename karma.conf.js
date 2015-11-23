var path = require('path');
var webpackConfig = require('./webpack.config');


module.exports = function(config) {
   config.set({
      basePath: '',
      frameworks: ['mocha', 'chai', 'sinon'],
      files: [
         'src/client/tests.bundle.js'
      ],
      webpack: require('./webpack.test'),
      webpackMiddleware: {
         noInfo: true
      },
      exclude: [],
      reporters: ['spec', 'junit'],
      junitReporter: {
         outputDir: process.env.CIRCLE_TEST_REPORTS + '/karma', // results will be saved as $outputDir/$browserName.xml
         outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
         suite: 'clientside' // suite will become the package name attribute in xml testsuite element
      },
      preprocessors: {
         'src/client/tests.bundle.js' : ['webpack', 'sourcemap']
      },
      port: 9876,
      colors: true,
      //logLevel: config.LOG_DISABLE,
      autowatch: true,
      browsers: ['Chrome'],
      singleRun: true,
      plugins: [
         require('karma-webpack'),
         'karma-sourcemap-loader',
         'karma-spec-reporter',
         'karma-junit-reporter',
         'karma-chai',
         'karma-mocha',
         'karma-sinon',
         'karma-chrome-launcher'
      ]
   })
}