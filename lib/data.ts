export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  shortDesc: string;
  description: string;
  image: string;
  bgGradient: string;
  category: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "blush-peony-dream",
    name: "Blush Peony Dream",
    price: 450,
    shortDesc: "A single, lush blush pink peony — romance in bloom.",
    description:
      "Our Blush Peony Dream is hand-picked at peak bloom to capture its most breathtaking form. Each peony is carefully selected for its full, layered petals and soft blush hue — a timeless symbol of love, prosperity, and beauty. Perfect for anniversaries, birthdays, or simply to brighten someone's day. Comes wrapped in tissue paper with a handwritten note.",
    image: "/product/image.png", 
    bgGradient: "from-rose-100 to-pink-200",
    category: "Single Stem",
    featured: true,
  },
  {
    id: 2,
    slug: "crimson-velvet-rose",
    name: "Crimson Velvet Rose",
    price: 350,
    shortDesc: "A classic deep red rose — passion made tangible.",
    description:
      "The Crimson Velvet Rose is the ultimate expression of deep love and admiration. Each stem is long and lush, topped with a velvety, full-bloomed rose in the richest shade of crimson. Hand-selected from boutique growers, our roses are delivered fresh and are guaranteed to last. Ideal for romantic occasions, proposals, and heartfelt gestures.",
    image: "/product/image2.png",
    bgGradient: "from-red-100 to-rose-200",
    category: "Single Stem",
    featured: false,
  },
  {
    id: 3,
    slug: "golden-hour-sunflower",
    name: "Golden Hour Sunflower",
    price: 250,
    shortDesc: "Bright & cheerful — sunshine you can hold.",
    description:
      "Bring warmth and joy with our Golden Hour Sunflower. Each stem features a large, full bloom with velvety brown centres and bright golden petals. Sunflowers represent loyalty, adoration, and happiness — making them perfect for friends, family, and celebrations of all kinds. A single stem makes a bold, joyful statement that's impossible to miss.",
    image: "/product/image3.png",
    bgGradient: "from-yellow-100 to-amber-200",
    category: "Single Stem",
    featured: true,
  },
  {
    id: 4,
    slug: "meadow-wildflower-bouquet",
    name: "Meadow Wildflower Bouquet",
    price: 799,
    shortDesc: "A wild, romantic mix of lavender, daisies & greenery.",
    description:
      "Our Meadow Wildflower Bouquet is a free-spirited arrangement that captures the beauty of an English countryside garden. A handpicked mix of lavender, white daisies, chamomile, and seasonal greenery, tied with natural jute twine. Every bouquet is one-of-a-kind, made with whatever is freshest and most beautiful on the day of your order. Perfect for bohemian souls and nature lovers.",
    image: "/product/image4.png",
    bgGradient: "from-purple-100 to-lavender-200",
    category: "Bouquet",
    featured: true,
  },
  {
    id: 5,
    slug: "white-lily-grace",
    name: "White Lily Grace",
    price: 399,
    shortDesc: "Pure, elegant white lilies — for moments that matter.",
    description:
      "White Lily Grace is a tribute to purity and new beginnings. Our fresh oriental lilies are known for their stunning star-shaped blooms and gentle, intoxicating fragrance. Each stem arrives in full bud, opening over 3–5 days to reveal its magnificent form. Ideal for weddings, baby showers, and meaningful milestones. Handle with care — lilies are fragile beauties.",
    image: "/product/image5.png",
    bgGradient: "from-slate-100 to-zinc-200",
    category: "Single Stem",
    featured: false,
  },
  {
    id: 6,
    slug: "garden-rose-blush-bundle",
    name: "Garden Rose Blush Bundle",
    price: 999,
    shortDesc: "5 blush garden roses, lush and layered.",
    description:
      "Our Garden Rose Blush Bundle brings together five premium blush garden roses into one cohesive, statement arrangement. Garden roses are prized for their full, ruffled blooms and their variety of subtle fragrances. Ideal for table centrepieces, gifting, or treating yourself to a little luxury. Wrapped in kraft paper with a satin ribbon and a personalised note.",
    image: "/product/image6.png",
    bgGradient: "from-pink-100 to-rose-200",
    category: "Bundle",
    featured: false,
  },
  {
    id: 7,
    slug: "lavender-dreams",
    name: "Lavender Dreams",
    price: 299,
    shortDesc: "Fresh French lavender — calming, fragrant, beautiful.",
    description:
      "Lavender Dreams is more than a flower — it's an experience. Our fresh-cut French lavender bundles are fragrant, calming, and endlessly beautiful. Known for their stress-relieving properties and distinctive purple hue, lavender stems make wonderful gifts for people who appreciate mindful, natural beauty. As they dry, they retain their colour and fragrance for months. A gift that truly keeps on giving.",
    image: "/images/peony-blush.jpg",
    bgGradient: "from-violet-100 to-purple-200",
    category: "Bundle",
    featured: false,
  },
  {
    id: 8,
    slug: "carnation-carnival",
    name: "Carnation Carnival",
    price: 599,
    shortDesc: "A burst of mixed carnations — bold, playful, vibrant.",
    description:
      "The Carnation Carnival is a celebration of colour and life. A mix of red, coral, yellow, and white carnations — each chosen for its rich colour saturation and long-lasting bloom. Carnations are among the most long-lived cut flowers, often lasting 2–3 weeks with proper care. This bundle is our bestselling affordable luxury — maximum impact, maximum joy.",
    image: "/images/rose-red.jpg",
    bgGradient: "from-orange-100 to-red-200",
    category: "Bundle",
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
