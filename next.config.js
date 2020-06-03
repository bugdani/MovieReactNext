const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const fetch = require("isomorphic-unfetch");

module.exports = withCSS(
  withSass({
    exportPathMap: async function () {
      const paths = {
        "/": { page: "/" },
        "/movies": { page: "/movies" },
        "/contact": { page: "/contact" },
      };
      const res = await fetch("http://demo7631669.mockable.io/movies");
      const movies = await res.json();
      movies.forEach((movie) => {
        paths[`/movie/${movie.id}`] = {
          page: "/movie/[id]",
          query: { id: movie.id },
        };
      });

      return paths;
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);
