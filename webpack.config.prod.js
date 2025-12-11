var path = require('node:path');

var _webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.merge(commonConfig, {
	mode: 'production',

	entry: {
		app: './assets/app/main.aot.ts',
	},

	output: {
		path: path.resolve(`${__dirname}/public/js/app`),
		filename: 'bundle.js',
		publicPath: '/js/app/',
		chunkFilename: '[id].[hash].chunk.js',
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader?aot=true'],
			},
		],
	},

	optimization: {
		minimize: true,
	},
});
