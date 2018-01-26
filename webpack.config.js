const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015','react']
					}
				}
			},
			{
				test: /\.less$/,
				exclude:/(node_modules|bower_components)/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'less-loader'}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'create by htmlwebpackplugins'
		})
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	}
}