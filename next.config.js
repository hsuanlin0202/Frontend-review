const path = require("path");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // config.node = { fs: "empty" };

    return config;
  },
  env: {
    API_GATEWAY: process.env.API_GATEWAY,
    PAY: process.env.PAY,
    TAP_PAY_ID: process.env.TAP_PAY_ID,
    TAP_PAY_KEY: process.env.TAP_PAY_KEY,
    APP_VERSION: process.env.APP_VERSION,
  },
  serverRuntimeConfig: {
    API_GATEWAY: process.env.API_GATEWAY,
    PAY: process.env.PAY,
    TAP_PAY_ID: process.env.TAP_PAY_ID,
    TAP_PAY_KEY: process.env.TAP_PAY_KEY,
    APP_VERSION: process.env.APP_VERSION,
  },
  publicRuntimeConfig: {
    API_GATEWAY: process.env.API_GATEWAY,
    PAY: process.env.PAY,
    TAP_PAY_ID: process.env.TAP_PAY_ID,
    TAP_PAY_KEY: process.env.TAP_PAY_KEY,
    APP_VERSION: process.env.APP_VERSION,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
