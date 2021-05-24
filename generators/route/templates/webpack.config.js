const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


//don't touch the code below for your sake
const outDir =  '<%= props.arxPath %>';
const pluginName = '<%= props.pluginname %>';
const pluginCtrl = pluginName + 'Ctrl';
const entry = {};
entry[pluginName] = './src\\' + pluginName + '.ts';
entry[pluginName + 'Style'] = './src\\' + pluginName + '.scss';
entry[pluginCtrl] = './src\\' + pluginCtrl + '.ts';

module.exports = {
	entry: entry,
	mode: 'development',
	devtool: 'eval',
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
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}
				]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
					}
				}, {
					loader: 'postcss-loader'
				}, {
					loader: 'sass-loader'
				},
				],
			}
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(outDir) + '/' + pluginName + '.html',
			template: 'src/' + pluginName + '.html',
			chunks: [pluginName + 'Style'],
			chunksSortMode: 'manual',
			minify: false,
			publicPath: './Scripts/plugins/' + pluginName
		})
	],
	output: {
		filename: '[name].js',
		path: path.resolve(outDir),
		devtoolLineToLine: true,
		pathinfo: true,
		sourceMapFilename: '[name].js.map'
	},
}
