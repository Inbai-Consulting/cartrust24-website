import type { NextConfig } from "next";

// Static export for GitHub Pages: no server, so images ship as they are.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
