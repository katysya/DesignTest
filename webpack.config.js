const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // }),
  ],
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      // {
      //   test: /\.png/,
      //   type: 'asset/resourse',
      // },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.png$/i,
        loader: 'url-loader',
      },
    ],
  },
  devServer: {
    host: '192.168.31.144',
    port: 5500,
  },
};
