// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // already in your project
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Your SaaS Name - Simple & Powerful",
  description: "Your product description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${GeistSans.className} antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}