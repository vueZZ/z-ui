import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  turbopack: {
    // 配置svg加载器
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              typescript: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
