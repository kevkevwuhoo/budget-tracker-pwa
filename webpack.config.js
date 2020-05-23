const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
  entry: {
    main: [
      path.join(__dirname + "/public/db.js"),
      path.join(__dirname + "/public/index.js"),
    ],
  },
  output: {
    path: path.join(__dirname + "/public/dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      filename: "manifest.webmanifest",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      fingerprints: false,
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
