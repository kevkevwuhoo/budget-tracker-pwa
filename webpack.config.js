const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
  entry: path.join("./public/assets/js/index.js"),
  output: {
    path: path.join(__dirname + "/public/dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      background_color: "#ffffff",
      crossorigin: "null", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("./public/icons/icon-512x512.png"),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
  ],
};
module.exports = config;
