// Imports
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

// Constants
const htmlPlugin = new HtmlWebPackPlugin({template: "./public/index.html", filename: "./index.html"});
const tsCheckerPlugin = new ForkTsCheckerWebpackPlugin();

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {path: path.resolve(__dirname, "build"), filename: "bundle.js"},
  resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, options: {transpileOnly: true}},
      {test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}]},
      {test: /\.svg$/, use: [{loader: "@svgr/webpack"}]}
    ]
  },
  plugins: [htmlPlugin, tsCheckerPlugin]
};

// Export
export default config;
