import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floral Catalog — Handcrafted Bouquets & Single Stems",
  description:
    "Explore the Bloomy Bents floral collection: fresh peonies, velvety roses, sunflowers, and wildflower bouquets. Hand-tied and delivered fresh.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Floral Catalog — Bloomy Bents",
    description:
      "Explore the Bloomy Bents floral collection: fresh peonies, velvety roses, sunflowers, and wildflower bouquets.",
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
