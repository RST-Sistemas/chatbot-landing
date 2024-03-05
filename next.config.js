/** @type {import('next').NextConfig} */

// next.config.js
// const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
};

// const pathAbsolute = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias["@"] = path.join(__dirname, "src");
//     }
//     return config;
//   },
// };

module.exports = nextConfig;
// module.exports = pathAbsolute;
