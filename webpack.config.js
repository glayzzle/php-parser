const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { name, description, license, author } = require("./package.json");

const entry = "./src/index.js";

const entries = {
  [`${name}`]: entry,
  [`${name}.min`]: entry
};

const today = `${new Date(Date.now()).toLocaleDateString()}`;

module.exports = {
  target: "web",
  mode: "production",
  entry: entries,
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, "dist"),
    library: "PhpParser",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true"
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            keep_fnames: false
          },
          sourceMap: true,
          mangle: false,
          maxLineLen: 1024
        }
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      entryOnly: true,
      banner: `
        Package: ${name}
        ${description}
        Build: [hash] - ${today}
        License: ${license}
        Author: ${author}
      `
    })
  ]
};
