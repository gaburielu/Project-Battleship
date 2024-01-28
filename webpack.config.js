const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    gameboard: "./src/gameboard.js", 
    ship: "./src/ship.js",
    player: "./src/player.js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/main.html", 
      filename: "index.html", 
    }),
  ],
  devtool: "inline-source-map", 
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
