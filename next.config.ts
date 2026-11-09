import type { NextConfig } from "next";

// Static export for GitHub Pages: no server, so images ship as they are.
// NEXT_PUBLIC_BASE_PATH comes from actions/configure-pages: "/<repo>" while
// the site is served at <org>.github.io/<repo>/, empty on its own domain.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: { unoptimized: true },
};

export default nextConfig;
