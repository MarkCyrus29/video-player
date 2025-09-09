import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Player",
  description: "Video Player specifically made for nicole",
  openGraph: {
    title: "Video Player",
    description: "Video Player specifically made for nicole",
    url: "https://video-player-for-nicole.vercel.app",
    siteName: "Video Player",
    images: [
      {
        url: "https://video-player-for-nicole.vercel.app/img.jpg",
        width: 1200,
        height: 630,
        alt: "Video Player Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
