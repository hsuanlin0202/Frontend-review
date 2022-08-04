const glob = require("glob-all");
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "postcss-custom-properties",
    "autoprefixer",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
              "./styles/globals.scss",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
};
