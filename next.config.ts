import type { NextConfig } from "next";

// Static export: the site is served from GitHub Pages (dipak-sumesara.github.io),
// so there is no Node server at runtime. See .github/workflows/deploy.yml.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
