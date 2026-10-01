import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bloomy Bents — Handmade Flowers",
  description:
    "Handcrafted flower arrangements made with love. Browse our catalog of fresh peonies, roses, sunflowers & more. Order directly via WhatsApp. Founder name is Sufiya Ansari",
  keywords: ["handmade flowers", "bouquet", "flower shop", "bloomy bents", "fresh flowers"],
  icons: {
    icon: "/images/hero2.png",
    shortcut: "/images/hero2.png",
    apple: "/images/hero2.png",
  },
  openGraph: {
    title: "Bloomy Bents — Handmade Flowers",
    description: "Flowers that speak from the heart.",
    type: "website",
    images: [
      {
        url: "/images/hero2.png",
        width: 1200,
        height: 630,
        alt: "Bloomy Bents - Handmade Flowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomy Bents — Handmade Flowers",
    description: "Flowers that speak from the heart.",
    images: ["/images/hero2.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background overflow-x-hidden w-full">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

