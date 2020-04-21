const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
// const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    main: './src/main.ts',
  },
  stats: 'errors-only', // 只在报错时显示输出日志
  output: {
    path: path.resolve(__dirname, '../dist') // 输出的路径
  },
  // optimization: {
  //   // usedExports: true, // treeShaking
  //   // splitChunks: {
  //   //   chunks: 'all', // 当存在多个入口时，可以防止同一模块被引入多次, 例如同一个库被多次引入，则库文件会被单独打包出一份vendor
  //   //   // 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法
  //   //   cacheGroups: {
  //   //     vendor: {
  //   //       test: /[\\/]node_modules[\\/]/,
  //   //       name: 'vendors',
  //   //       chunks: 'all'
  //   //     }
  //   //   }
  //   // },
  //   // runtimeChunk: 'single' // 将其设置为 single 来为所有 chunk 创建一个 runtime bundle (缓存方式)
  // },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.vue'],
    alias: {
      '@': path.join(__dirname, '../src'),
      'vue': '@vue/runtime-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        // options: {
        //   presets: ['@babel/preset-env'],
        //   plugins: [
        //     '@babel/plugin-transform-runtime'
        //   ]
        // }
      },
      {
        test: /.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader' :
              MiniCssExtractPlugin.loader,  //只在生产环境压缩
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',//设置打包后的文件名以及后缀，[name]是打包前的名字
              outputPath: 'img/',
              limit: 30000,//如果文件大小超过限制字节，则打包，否则打包为base64格式
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // es-lint
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../public','index.html')
    })
  ]
};
