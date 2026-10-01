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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bloomybents.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bloomy Bents — Handcrafted Floral Bouquets & Gifts",
    template: "%s | Bloomy Bents",
  },
  description:
    "Bloomy Bents offers handcrafted floral bouquets, fresh peonies, classic roses, and bespoke arrangements made with love by founder Sufiya Ansari. Order directly via WhatsApp.",
  keywords: [
    "bloomybents",
    "Bloomy Bents",
    "bloomy bents flower shop",
    "bloomy bents bouquet",
    "handmade flowers",
    "flower boutique",
    "fresh flowers online",
    "custom bouquets",
    "single stem rose",
    "peony bouquet",
    "Sufiya Ansari",
    "flower delivery",
  ],
  authors: [{ name: "Sufiya Ansari" }],
  creator: "Sufiya Ansari",
  publisher: "Bloomy Bents",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/hero2.png",
    shortcut: "/images/hero2.png",
    apple: "/images/hero2.png",
  },
  openGraph: {
    siteName: "Bloomy Bents",
    title: "Bloomy Bents — Handcrafted Floral Bouquets & Gifts",
    description:
      "Transform your emotions into flowers. Handcrafted bouquets and single stems made with love by Sufiya Ansari.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero2.png",
        width: 1200,
        height: 630,
        alt: "Bloomy Bents - Handcrafted Flowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomy Bents — Handcrafted Flowers",
    description:
      "Transform your emotions into flowers. Handcrafted bouquets made with love by Sufiya Ansari.",
    images: ["/images/hero2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Bloomy Bents",
  alternateName: ["bloomybents", "Bloomy Bents Flowers", "BloomyBents"],
  url: siteUrl,
  logo: `${siteUrl}/images/hero2.png`,
  image: `${siteUrl}/images/hero1.png`,
  description:
    "Handcrafted flower arrangements, fresh bouquets, single stems, and custom bespoke floral creations by Sufiya Ansari. Order directly via WhatsApp.",
  founder: {
    "@type": "Person",
    name: "Sufiya Ansari",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  sameAs: ["https://instagram.com/bloomybents"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background overflow-x-hidden w-full">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

