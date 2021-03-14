// Imports
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

// Constants
const htmlPlugin = new HtmlWebPackPlugin({template: "./public/index.html"});
const tsCheckerPlugin = new ForkTsCheckerWebpackPlugin();

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, options: {transpileOnly: true}},
      {test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}]},
      {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: "asset/inline"},
      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource"},
      {test: /\.js$/, enforce: "pre", use: ["source-map-loader"]},
      {test: /\.svg$/, loader: "svg-sprite-loader"}
    ]
  },
  plugins: [htmlPlugin, tsCheckerPlugin]
};

// Export
export default config;
