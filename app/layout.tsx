import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drewbolles.com"),
  title: {
    default: "Drew Bolles — Staff Software Engineer",
    template: "%s — Drew Bolles",
  },
  description:
    "Staff Software Engineer building frontend systems, product interfaces, and AI-powered experiences. Writing about React, TypeScript, and the modern web.",
  authors: [{ name: "Drew Bolles", url: "https://www.drewbolles.com" }],
  creator: "Drew Bolles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drewbolles.com",
    siteName: "Drew Bolles",
    title: "Drew Bolles — Staff Software Engineer",
    description:
      "Staff Software Engineer building frontend systems, product interfaces, and AI-powered experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drew Bolles - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@bollskis",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.drewbolles.com",
    types: {
      "application/rss+xml": "/feed.xml",
    },
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
        <GoogleAnalytics gaId="G-D2ZXBJHGZD" />
      </body>
    </html>
  );
}
