const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
  // development production
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [MiniCssPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)/,
        use: [{
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            limit: 5*1000,
            outputPath: 'images',
            name: '[name]-[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), 'static'),
          to: 'static'
        }
      ]
    }),
    new webpack.BannerPlugin('著作权'),
    new MiniCssPlugin({
      filename: '[name].css'
    })
  ],
  // watch: true
  devServer: {
    port: 8089,
    open: true,
    hot: true
  },
  devtool: 'eval-cheap-module-source-map'
}