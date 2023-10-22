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
  devtool: 'sourse-map',
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
      {
        test: /\.png/,
        type: 'asset/resourse',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.png$/i,
        loader: 'url-loader',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },

      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: 'asset/inline',
      // },
      // {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     type: 'asset/inline',
      // },
    ],
  },
  devServer: {
    host: '192.168.31.144',
    port: 5500,
  },
};
