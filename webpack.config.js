'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');
var ExtractText = require('extract-text-webpack-plugin');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv === 'development';

var config = {
    devtool: 'eval-source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      'react-hot-loader/patch',
      path.join(__dirname, '/src/client.js')
    ],
    output: {
      path: path.join(__dirname, '/public'),
      filename: isDev ? '[name].js' : '[name].[chunkhash].js',
      publicPath: 'http://localhost:8080/assets/',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src'),
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap',
          include: path.join(__dirname, 'src'),
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader?emitFile=false'
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
      ];
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
