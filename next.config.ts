import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the whole site to out/, hostable anywhere.
  output: "export",
  // URLs end in a slash (/vision/lazy-eye-therapy/), matching the existing links and canonicals.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
