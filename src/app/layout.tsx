import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { preload } from "react-dom";
import { Providers } from "@/components/layout/Providers";
import { assetPath, site } from "@/config/site";
import { fontFaceCss, fontFiles } from "@/design/fonts";
import { colors, tokensCss } from "@/design/tokens";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Cursos cortos de formación financiera para jóvenes de 14 a 18 años en España, con herramientas, evaluaciones y certificados.",
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: colors.light.bg },
    { media: "(prefers-color-scheme: dark)", color: colors.dark.bg },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  for (const f of fontFiles) {
    if (f.preload) preload(assetPath(f.file), { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  }
  return (
    <html lang="es">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceCss() + tokensCss() }} />
      </head>
      <body className="min-h-dvh">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
