/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
/**
 * @constant
 */
const PLUGINS = [
  require('karma-jasmine'),
  require('karma-chrome-launcher'),
  require('karma-jasmine-html-reporter'),
  require('karma-coverage-istanbul-reporter'),
  require('@angular-devkit/build-angular/plugins/karma')
]

/**
 * @constant
 */
const BROWSERS = ['Chrome']

/**
 * @constant
 */
const COVERAGE_REPORTER = {
  dir: require('path').join(__dirname, '../coverage'),
  reports: ['html', 'lcovonly', 'text-summary'],
  fixWebpackSourcePaths: true
}

/**
 * @constant
 */
const REPORTERS = ['progress', 'kjhtml']

/**
 * @constant
 */
const CLIENT_CONFIG = {
  clearContext: false // leave Jasmine Spec Runner output visible in browser
}

/**
 * @constant
 */
const FRAMEWORKS_LIST = ['jasmine', '@angular-devkit/build-angular']

/**
 * @constant
 */
const BASEPATH = ''

/**
 * @constant
 */
const PORT = 9876

/**
 * @constant
 */
const RUN_MODE = false

/**
 * @constant
 */
const WATCH_MODE = true

/**
 * @constant
 */
const COLORS_MODE = true 

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  const CONFIG = {
    basePath: BASEPATH,
    frameworks: FRAMEWORKS_LIST,
    plugins: PLUGINS,
    client: CLIENT_CONFIG,
    coverageIstanbulReporter: COVERAGE_REPORTER,
    reporters: REPORTERS,
    port: PORT,
    colors: COLORS_MODE,
    logLevel: config.LOG_INFO,
    autoWatch: WATCH_MODE,
    browsers: BROWSERS,
    singleRun: RUN_MODE
  }

  config.set(CONFIG)
}

/// EOF
