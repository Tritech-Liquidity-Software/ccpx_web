import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./layout-components/Navbar";
import Footer from "./layout-components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCPEX - Home",
  description: "Welcome to CCPEX - The World's First AI-Based Trading Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="KJaa691BlTxZwz4u2A4PHZWF-qp7tWGydb1aSqXSKnw" />
      </head>

      <body
        className={`${inter.variable} ${grotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
