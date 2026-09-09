import type { Metadata } from "next";
import "./globals.css";

import StoreProvider from "@/store/Provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: " Product Store",
  description: "A simple product store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}