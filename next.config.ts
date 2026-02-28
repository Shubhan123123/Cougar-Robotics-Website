import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Turbopack to treat this folder as the workspace root.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
