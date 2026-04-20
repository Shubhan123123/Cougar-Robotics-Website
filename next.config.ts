import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Turbopack to treat this folder as the workspace root.
    root: path.resolve(__dirname),
  },
  eslint: {
    // Allow production builds to complete even when repo lint issues exist.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow deployment while iterative TypeScript cleanup is in progress.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
