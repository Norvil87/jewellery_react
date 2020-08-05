const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    watchContentBase: true,
    historyApiFallback: true, // ?
    contentBase: './', // ?
    hot: true // ?
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts",
        },
      },
      {
        test: /\.(png|jpg|webp)$/,
        loader: "file-loader",
        options: {
          outputPath: "img",
          name: "[name].[ext]",
          useRelativePath: true,
        },
      },
      /* {
        test: /\.(png|jpg|webp)$/,
        loader: "url-loader",
      }, */
      {
        test: /\.svg$/,
        use: ["svg-sprite-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new SpriteLoaderPlugin(),
    new MiniCssExtractPlugin({}),
  ],
};
