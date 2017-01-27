var webpack = require('webpack');
var config = require('../webpack.config');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);

new WebpackDevServer(compiler, {
  noInfo: true,
  inline: true,
  hot: true,
  host: '0.0.0.0',
  port: '8080',
  contentBase: 'public',
  publicPath: config.output.publicPath,
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
