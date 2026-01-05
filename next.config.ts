import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.distDir = 'docs'
}

export default nextConfig;
