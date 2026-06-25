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
  title: "Vedant Pol — Constellation",
  description:
    "Vedant Pol, ML/GenAI & Data Science Engineer. A single place to explore everything I've built — client websites, live AI/ML systems and open-source work.",
  metadataBase: new URL("https://constilation.vedant-home-server.in"),
  openGraph: {
    title: "Vedant Pol — Constellation",
    description: "Explore everything I've built — client sites, live AI/ML systems and open-source work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Pol — Constellation",
    description: "Explore everything I've built — client sites, live AI/ML systems and open-source work.",
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
