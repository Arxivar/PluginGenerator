const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//don't touch the code below for your sake
const outDir = '<%= props.arxPath %>';
const pluginName = '<%= props.pluginname %>';
const pluginDirective = pluginName + 'Directive';
const entry = {};
entry[pluginName] = './src\\' + pluginName + '.ts';
entry[pluginDirective] = './src\\' + pluginDirective + '.ts';

module.exports = {
	entry: entry,
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				use: [{
					loader: require.resolve('babel-loader'),
					options: {
						presets: [
							['@babel/preset-env', {
								'targets': {
									'browsers': [
										'last 2 versions',
										'ie 11'
									]
								},
								'modules': 'auto',
								'useBuiltIns': 'entry',
								'corejs': '3'
							}
							],
							['@babel/preset-react'],
							['@babel/preset-typescript', {
								'allExtensions': true,
								'isTSX': true
							}
							]

						],
						plugins: [
							'@babel/plugin-syntax-function-bind',
							'@babel/plugin-transform-modules-commonjs',
							'@babel/plugin-syntax-dynamic-import',
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-transform-runtime'
						],
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/
						// directory for faster rebuilds.
						cacheDirectory: true,
						// See #6846 for context on why cacheCompression is disabled
						cacheCompression: false
					},
				}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
						}
					}, {
						loader: 'postcss-loader'
					}, {
						loader: 'sass-loader'
					}
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		new CopyWebpackPlugin(
			[{
				from: './src\\' + pluginName + '.css',
				to: './'

			},
			{
				from: './src\\' + pluginName + '.html',
				to: './'

			}]
		)
	],
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(outDir),
		devtoolLineToLine: true,
		pathinfo: true,
		sourceMapFilename: '[name].js.map'
	},
}
