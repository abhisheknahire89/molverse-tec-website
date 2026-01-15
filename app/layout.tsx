import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MolVerse | Precision Molecular Visualization for Drug Discovery",
  description: "Revolutionary 3D reconstruction and analysis of macromolecular structures. Accelerate drug discovery with cost-effective, unbiased structural biology. Reduce animal model use through AI-driven molecular intelligence.",
  keywords: [
    "structural biology",
    "drug discovery",
    "molecular visualization",
    "3D reconstruction",
    "protein structures",
    "cryo-EM alternative",
    "macromolecular structures",
    "AI drug discovery",
    "pharmaceutical research",
    "biomolecular architecture"
  ],
  authors: [{ name: "MolVerse Tech" }],
  creator: "MolVerse Tech",
  publisher: "MolVerse",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://molverse.tech",
    siteName: "MolVerse",
    title: "MolVerse | Precision Molecular Visualization",
    description: "Accelerate drug discovery with 3D molecular structures. Revolutionary structural biology platform reducing animal model use.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MolVerse - Molecular Visualization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MolVerse | Precision Molecular Visualization",
    description: "Revolutionary 3D molecular structures for accelerated drug discovery",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
