const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    stats: 'errors-only',
    publicPath: '/',// 服务器访问资源地址
    contentBase: path.resolve(__dirname, '../', 'public'), // 设置服务器启动目录
    host:'localhost',
    port:8080,
    hot: true,
    // hotOnly: true,
    // useLocalIp: true, // 允许使用本地ip打开
    // watchContentBase: true, // 在文件修改之后，会触发一次完整的页面重载。
    // open: true,
    inline: false,
    // historyApiFallback: true,
    proxy: {
      '/backend': {
        target: 'http://localhost:8000/',
        changeOrigin: true
        // pathRewrite: {
        //   '^/backend': ''
        // }
      },
      '/backend/storage/upload/prepare': {
        target: 'http://10.4.89.51:8080/example/',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig,devConfig)
