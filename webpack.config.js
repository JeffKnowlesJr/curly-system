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

  devtool: false,
  devServer: {
    static: './dist'
  }
}
