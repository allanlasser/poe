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
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.join(__dirname, 'public/index.js'), // root JavaScript file
      path.join(__dirname, 'public/css/app.css'), // root CSS file
    ],
    output: {
      path: path.join(__dirname, 'public/bundle'),
      publicPath: 'http://localhost:3030/bundle/',
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'public'),
          exclude: path.join(__dirname, 'node_modules'),
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
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = validate(config);
