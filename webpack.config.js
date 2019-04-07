const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const MODE = process.env.MODE || "development";

const cleanWebpackPlugin = new CleanWebpackPlugin(); //["dist/**/*.*"]

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "css/[name].[chunkhash].css",
  chunkFilename: "[id].css"
});
const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({});

const htmlPluginIndex = new HtmlWebpackPlugin({
  template: "./src/template.html",
  filename: "index.html",
});

module.exports = {
  mode: MODE,
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "js/[name].[chunkhash].js"
  },
  devtool: MODE != "production" ? "source-map" : "",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MODE != "production"
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../"
                }
              },

          {
            loader: "css-loader",
            options: {
              sourceMap: MODE != "production"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              autoprefixer: {
                browser: ["last 2 versions"]
              },
              sourceMap: MODE != "production",
              plugins: () => [autoprefixer]
            }
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: MODE != "production"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          "file-loader?name=assets/img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug"
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: "file-loader?name=assets/fonts/[hash].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    open: true,
    historyApiFallback: true,
    inline: true,
    noInfo: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins:
    MODE != "production"
      ? [htmlPluginIndex]
      : [
          cleanWebpackPlugin,
          miniCssExtractPlugin,
          optimizeCSSAssetsPlugin,
          htmlPluginIndex
        ]
};
