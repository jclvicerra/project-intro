var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  target : 'node',
  entry: './main.js',
  output: { path: __dirname, filename: 'build/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
        	cacheDirectory: true,
          	presets: ['es2015','stage-2']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
    }
		]
  	},
	resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  externals: nodeModules
};

module.exports = config;