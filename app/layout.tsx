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
import { siteUrl } from "@/lib/site";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bloomy Bents — Handcrafted Pipe Cleaner Flowers & Forever Bouquets",
    template: "%s | Bloomy Bents",
  },
  description:
    "Bloomy Bents creates everlasting floral bouquets sculpted from soft pipe cleaners by founder Sufia Ansari. Bespoke handcrafted blooms, custom gifts, and bendable floral art that never wilts.",
  keywords: [
    "bloomybents",
    "Bloomy Bents",
    "pipe cleaner flowers",
    "pipe cleaner bouquet",
    "chenille stem flowers",
    "everlasting flowers",
    "forever blooms",
    "handmade flower bouquet",
    "Sufia Ansari",
    "pipe cleaner florist",
    "custom floral gifts",
    "handcrafted flowers",
  ],
  authors: [{ name: "Sufia Ansari" }],
  creator: "Sufia Ansari",
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
    title: "Bloomy Bents — Handcrafted Pipe Cleaner Flowers & Forever Bouquets",
    description:
      "Everlasting floral art handcrafted from pipe cleaners by Sufia Ansari. Beautiful, bendable blooms that never wilt.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero2.png",
        width: 1200,
        height: 630,
        alt: "Bloomy Bents - Handcrafted Pipe Cleaner Flowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomy Bents — Handcrafted Pipe Cleaner Flowers",
    description:
      "Everlasting floral art handcrafted from pipe cleaners by Sufia Ansari. Beautiful blooms that never wilt.",
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
    "Handcrafted pipe cleaner flower arrangements, forever bouquets, single stems, and bespoke floral art by founder Sufia Ansari. Order directly via WhatsApp.",
  founder: {
    "@type": "Person",
    name: "Sufia Ansari",
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

