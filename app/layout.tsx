// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "RapidRescue 🚨 | Real-Time Emergency Response Platform",
  description:
    "Connect with nearby volunteers instantly during emergencies. RapidRescue provides real-time emergency alerts, live GPS tracking, and community-powered emergency response.",

  keywords: [
    "RapidRescue",
    "Emergency Response",
    "Emergency Alert System",
    "Volunteer Network",
    "Real-time Emergency",
    "GPS Tracking",
    "Community Emergency Response",
    "Emergency Help",
    "Nearby Volunteers",
    "Emergency Platform",
  ],

  authors: [{ name: "RapidRescue Team" }],

  creator: "RapidRescue",
  publisher: "RapidRescue",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rapidrescue.vercel.app",
    siteName: "RapidRescue",
    title: "RapidRescue 🚨 | Real-Time Emergency Response Platform",
    description:
      "Connect with nearby volunteers instantly during emergencies. Real-time alerts, live GPS tracking, and community-powered emergency response.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RapidRescue - Emergency Response Platform",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RapidRescue 🚨 | Real-Time Emergency Response",
    description:
      "Connect with nearby volunteers instantly during emergencies. Real-time alerts and live GPS tracking.",
    images: ["/og-image.png"],
    creator: "@rapidrescue",
    site: "@rapidrescue",
  },

  // Icons & Favicons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Additional metadata
  metadataBase: new URL("https://rapidrescue.vercel.app"),
  alternates: {
    canonical: "/",
  },

  // App-specific
  applicationName: "RapidRescue",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RapidRescue",
  },

  // Verification (add your verification codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Category
  category: "Emergency Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className={`${GeistSans.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}