import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Constellation — Vedant Pol's Projects",
  description:
    "A hub linking to every live project and deployment by Vedant Pol — portfolios, web apps, AI/ML tools and more.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Constellation — Vedant Pol's Projects",
    description: "Navigate every live project and deployment in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
