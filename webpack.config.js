'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');
var ExtractText = require('extract-text-webpack-plugin');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv === 'development';

var config = {
    devtool: 'source-map',
    devServer: {
      quiet: true,
      inline: true,
      hot: true,
      host: '0.0.0.0',
      port: '8080',
      contentBase: 'public',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3030',
        'Access-Control-Allow-Credentials': 'true'
      }
    },
    entry: [
      'webpack/hot/dev-server',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/client/index.js') // root JavaScript file
    ],
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: 'http://localhost:8080/public/',
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src/client'),
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap',
          include: path.join(__dirname, 'src/client'),
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      }),
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
