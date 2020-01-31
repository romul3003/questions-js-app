const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.[chunkhash].js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
		port: 3000,
		clientLogLevel: 'silent'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}