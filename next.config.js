const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hurley-site-images.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/blog/**",
      },
    ],
  },
};

module.exports = withNextra(nextConfig);
