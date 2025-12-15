import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import ServiceWorkerRegister from "@/components/atoms/ServiceWorkerRegister/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ems Champion Post",
  description: "made by shadow company",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon512_rounded.png", sizes: "512x512", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon512_maskable.png",
        color: "#000000",
      },
    ],
  },
  applicationName: "EMS App",
  appleWebApp: {
    capable: true,
    title: "EMS Champion POST",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
