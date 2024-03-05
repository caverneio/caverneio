import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "Anthony Cueva (caverne.io)",
  description: "Hello world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistMono.variable, GeistSans.variable)}>
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-50 mix-blend-color-dodge"
          width="100%"
          height="100%"
        >
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"
          />
        </svg>
        {children}
      </body>
    </html>
  );
}
