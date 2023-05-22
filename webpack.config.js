const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new StyleLintPlugin(),
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      fix: true,
      failOnError: true,
      failOnWarning: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'postcss-import': {
                    addModulesDirectories: ['app'],
                    resolve: function(id, base) {
                      return glob.sync(path.join(base, id));
                    },
                  },
                  autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
                },
                minify: true,
              },

              sourceMap: true,
            },
          },
        ],
        exclude: /node-modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true, sources: false },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
    open: true,
    watchFiles: ["src/**/*"],
  },


};
