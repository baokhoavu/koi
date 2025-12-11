var webpack = require('webpack');

module.exports = {
	entry: {
		app: './assets/app/main.ts'
	},

	resolve: {
		extensions: ['.js', '.ts']
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'raw-loader',
						options: {
							esModule: false
						}
					}
				],
				exclude: /index\.html$/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'raw-loader',
						options: {
							esModule: false
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'raw-loader',
						options: {
							esModule: false
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: '[name].[hash].[ext]'
						}
					}
				]
			}
		],
		exprContextCritical: false
	}
};
