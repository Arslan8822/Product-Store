import type { Metadata } from "next";
import "./globals.css";

import StoreProvider from "@/store/Provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Product Store",
  description: "A simple product store built with Next.js",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Product Store",
    description: "A simple product store built with Next.js",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Store",
    description: "A simple product store built with Next.js",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <StoreProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}