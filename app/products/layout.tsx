import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog — Handcrafted Pipe Cleaner Flowers & Bouquets",
  description:
    "Explore the Bloomy Bents collection: everlasting pipe cleaner peonies, velvety roses, cheerful sunflowers, and wildflower bouquets sculpted by Sufia Ansari.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Catalog — Bloomy Bents Pipe Cleaner Flowers",
    description:
      "Explore the Bloomy Bents collection: everlasting pipe cleaner peonies, velvety roses, cheerful sunflowers, and wildflower bouquets sculpted by Sufia Ansari.",
    url: "/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
