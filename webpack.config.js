'use strict';

var path = require('path');
var webpack = require('webpack');
var validate = require('webpack-validator');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = nodeEnv === 'development';
var isProd = nodeEnv === 'production';

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
        { // Javascript loader
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src'),
          exclude: path.join(__dirname, 'node_modules'),
        },
        { // CSS loader
          test: /\.css$/,
          loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap',
          include: path.join(__dirname, 'src'),
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
} else if (isProd) {
  config.entry = path.join(__dirname, '/src/client.js');
  config.module.loaders = [
    { // Javascript loader
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
    },
    { // CSS loader
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!postcss-loader?sourceMap',
      }),
      include: path.join(__dirname, 'src'),
    },
    { // Image loader
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?name=[name].[ext]'
    },
  ];
  config.plugins.push(
    new ExtractTextPlugin('main.css'),
    new webpack.ExtendedAPIPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

module.exports = validate(config);
