const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.mjs",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
