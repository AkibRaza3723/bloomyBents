import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bloomybents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...productEntries,
  ];
}
