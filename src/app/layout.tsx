import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GsapProvider } from "@/providers/GsapProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "INOODEX | Architecture & Design",
  description:
    "An architectural practice committed to context, craft, and performance. Shaping better cities and human-centric spaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-black selection:text-white font-sans antialiased">
        <GsapProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </GsapProvider>
      </body>
    </html>
  );
}
