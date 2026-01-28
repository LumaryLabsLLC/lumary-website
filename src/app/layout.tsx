import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    images: [
      {
        url: "https://lumary.app/images/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Lumary - Professional Screen Recording for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumary - Professional Screen Recording for macOS",
    description:
      "The most powerful screen recorder for macOS. Multi-source capture, ProRes quality, local transcription.",
    creator: "@lumaryapp",
    images: ["https://lumary.app/images/og-image.png?v=2"],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L6J8VYLEN6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L6J8VYLEN6');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0b] text-white`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-zinc-900 focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
