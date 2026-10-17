import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { site } from "./src/config/site";

export default function config(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    output: "export",
    basePath: site.basePath,
    trailingSlash: true,
    devIndicators: false,
    images: { unoptimized: true },
    // `page.dev.tsx` routes (design proposals, /design) exist only in `next dev`.
    pageExtensions: isDev ? ["dev.tsx", "tsx", "ts"] : ["tsx", "ts"],
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  };
}
