import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hurley-site-images.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/blog/**",
      },
      {
        protocol: "https",
        hostname: "d3sh7ah1ts7yf7.cloudfront.net",
        port: "",
        pathname: "/blog/**",
      },
    ],
  },
};

export default withNextra(nextConfig);
