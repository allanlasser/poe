var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

var compiler = webpack(config);

new WebpackDevServer(compiler, {
  noInfo: true,
  inline: true,
  hot: true,
  host: '0.0.0.0',
  port: '8080',
  contentBase: 'public',
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3030',
    'Access-Control-Allow-Credentials': 'true'
  },
  stats: { colors: true },
}).listen(8080, '0.0.0.0', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Webpack Dev Server is listening at http://localhost:8080/');
});
