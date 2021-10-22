let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/, // Look for files that end in .js
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader' // Look for babel config file
        }
      }
    ]
  },

  devtool: 'source-map',
  devServer: {
    static: './dist'
  }
}
