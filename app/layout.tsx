// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "RapidRescue 🚑 | Emergency Response & Ambulance Dispatch Platform",
  description:
    "RapidRescue is a real-time emergency response platform that connects patients, ambulances, and hospitals for faster life-saving care.",

  keywords: [
    "RapidRescue",
    "Emergency Response",
    "Ambulance Dispatch",
    "Hospital Coordination",
    "Emergency Healthcare Platform",
  ],

  authors: [{ name: "RapidRescue Team" }],

  openGraph: {
    title: "RapidRescue 🚑",
    description:
      "Real-time emergency response platform for ambulance dispatch and hospital coordination.",
    url: "https://rapidrescue.com",
    siteName: "RapidRescue",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  metadataBase: new URL("https://rapidrescue.com"),
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