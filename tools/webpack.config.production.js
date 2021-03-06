'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var nodeEnv = process.env.NODE_ENV || 'production';

var config = {
    entry: path.join(__dirname, '../src/client.js'),
    output: {
      path: path.join(__dirname, '../public'),
      filename: '[name].[hash].js',
    },
    module: {
      loaders: [
        { // Javascript loader
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, '../src'),
          exclude: path.join(__dirname, '../node_modules'),
        },
        { // CSS loader
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader?sourceMap'),
          include: path.join(__dirname, '../src'),
        },
        { // Image loader
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader?name=[name].[ext]'
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      }),
      new ExtractTextPlugin('main.css'),
      new ManifestPlugin(),
      new webpack.ExtendedAPIPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
    ],
    postcss: function(webpack) {
      return [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('precss'),
      ];
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};

module.exports = validate(config);
