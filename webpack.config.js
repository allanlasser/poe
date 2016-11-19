'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv === 'development';

var config = {
    devtool: '#source-map',
    entry: [
      path.join(__dirname, 'public/index.js'),
    ],
    output: {
      path: path.join(__dirname, 'public/bundle'),
      publicPath: '/bundle/',
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'public'),
        query: {
          presets: ['es2015', 'react'],
        }
      }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};

if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = validate(config);
