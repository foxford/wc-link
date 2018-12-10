const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'link': './src/link.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'WCLink'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        ecma: 5,
        comments: false
      }
    })]
  }
}
