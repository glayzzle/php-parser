const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const { name, description, license } = require("./package.json");

const entry = "./src/index.js";

const entries = {
  [`${name}`]: entry,
  [`${name}.min`]: entry,
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
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        terserOptions: {
          mangle: true,
        },
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      entryOnly: true,
      banner: `
  Package: ${name}
  ${description}
  Build: [fullhash] - ${today}
  Copyright (C) 2021 Glayzzle (${license})
  @authors https://github.com/glayzzle/php-parser/graphs/contributors
  @url http://glayzzle.com        
      `,
    }),
  ],
};
