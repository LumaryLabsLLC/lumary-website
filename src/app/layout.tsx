import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lumary - Professional Screen Recording for macOS",
  description:
    "The most powerful screen recorder for macOS. Multi-source capture, ProRes quality, local transcription, and zero cloud dependencies. Built for creators who demand reliability.",
  keywords: [
    "screen recorder",
    "macOS",
    "screen capture",
    "video recording",
    "ProRes",
    "transcription",
    "Mac app",
  ],
  authors: [{ name: "Lumary Labs" }],
  openGraph: {
    title: "Lumary - Professional Screen Recording for macOS",
    description:
      "The most powerful screen recorder for macOS. Multi-source capture, ProRes quality, local transcription, and zero cloud dependencies.",
    url: "https://lumary.app",
    siteName: "Lumary",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumary - Professional Screen Recording for macOS",
    description:
      "The most powerful screen recorder for macOS. Multi-source capture, ProRes quality, local transcription.",
    creator: "@lumaryapp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#1c1c1e] text-white`}>
        {children}
      </body>
    </html>
  );
}
