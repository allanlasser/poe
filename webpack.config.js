'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');
var ExtractText = require('extract-text-webpack-plugin');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv === 'development';

var config = {
    devtool: '#source-map',
    entry: [
      path.join(__dirname, 'public/index.js'),
      path.join(__dirname, 'public/css/app.css'),
    ],
    output: {
      path: path.join(__dirname, 'public/bundle'),
      publicPath: '/',
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          include: path.join(__dirname, 'public'),
          exclude: path.join(__dirname, 'node_modules'),
          query: {
            presets: ['es2015', 'react'],
          }
        },
        {
          test: /\.css$/,
          loader: ExtractText.extract('style-loader', 'css-loader?sourceMap!postcss-loader?sourceMap'),
          include: path.join(__dirname, 'public'),
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      }),
      new ExtractText(isDev ? '[name].css' : '[name].[chunkhash].css'),
    ],
    postcss: function(webpack) {
      return [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('precss'),
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};

if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = validate(config);
