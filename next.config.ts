import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // 配置turbopack根目录
    root: path.join('./'),
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

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.trailingSlash = true
  nextConfig.distDir = 'docs'
  nextConfig.basePath = '/z-ui'
}

export default nextConfig;
