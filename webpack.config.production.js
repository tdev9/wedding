const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const LicensePlugin = require("webpack-license-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Andi és Tamás",
      template: "./src/index.html",
      favicon: "./src/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new LicensePlugin(),
    new CopyPlugin({
      patterns: [{ from: "licenses.zip", to: "licenses.zip" }],
    }),
    new webpack.BannerPlugin({
      banner:
        "@license If you need more licenses, you can find it in the licenses.zip and in oss-licenses.json if you write the filenames after the webpage url.",
    }),
    new RemovePlugin({
      after: {
          include: [
              'licenses.zip'
          ]
      }
  })
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@license/i,
          },
        },
        extractComments: true,
      }),
      `...`,
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};
