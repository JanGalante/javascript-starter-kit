import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', //highest quality sourcemaps
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //write to distribution folder
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		// Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true // tells webpack to inject any necessary script tags
    }),

		// Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

		// Minify JS
    new webpack.optimize.UglifyJsPlugin()
	],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}