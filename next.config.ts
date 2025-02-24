import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.spec\.tsx?$/,
      use: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
