'use strict';

/* Load a Webpack configuration based on the environment. */

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');

var nodeEnv = process.env.NODE_ENV || 'development';
var configFiles = {
  'development': './tools/webpack.config.development.js',
  'production': './tools/webpack.config.production.js',
};
var config = require(configFiles[nodeEnv]);

module.exports = validate(config);
