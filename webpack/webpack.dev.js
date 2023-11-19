const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const PORT = 2006;
const PUBLIC_PATH = "console";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: PORT,
    open: `http://localhost:${PORT}/${PUBLIC_PATH}/`,
  },
});
