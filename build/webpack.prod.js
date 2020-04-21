const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")
// const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const prodConfig = {
  mode: 'production',
  // mode: 'development',
  devtool: 'inline-source-map',
  // plugins: [
  //
  // ]
}

module.exports = merge(commonConfig, prodConfig)
