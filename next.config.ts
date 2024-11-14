import type { NextConfig } from "next";

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});

module.exports = {
  // Setează basePath-ul la numele repository-ului tău
  // basePath: isProd ? '/nume-repository' : '',
  // assetPrefix: isProd ? '/nume-repository/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
