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
    shortDesc: "Handcrafted blush pink peony — sculpted petal by petal from soft pipe cleaners.",
    description:
      "Our Blush Peony Dream is intricately hand-twisted from plush pink chenille stems. Each petal is individually shaped and layered around a sturdy floral wire core to capture the full, romantic volume of a fresh peony. Soft to the touch and completely everlasting, it makes a dreamy keepsake for anniversaries, birthdays, or bedside decor. Comes lovingly wrapped in frosted floral paper with a satin ribbon and complimentary note.",
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
    shortDesc: "A timeless scarlet rose sculpted from rich chenille — love that never wilts.",
    description:
      "The Crimson Velvet Rose is the ultimate expression of love that lasts forever. Meticulously hand-bent using rich scarlet and deep emerald pipe cleaners, this stem features realistic rolled petals, delicate sepals, and bendable leaves. Unlike natural roses that fade in days, this tactile art piece remains in eternal bloom. Perfect for Valentine's, proposals, and heartfelt milestones.",
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
    shortDesc: "Sunny & cheerful — a handcrafted pipe cleaner bloom brimming with joy.",
    description:
      "Bring warmth and perpetual sunshine into any space with our Golden Hour Sunflower. Handcrafted with sunny golden-yellow petals wrapped around a fuzzy textured brown chenille core, this cheerful flower is fully bendable and poseable. Sunflowers represent happiness, loyalty, and adoration — a heartwarming gift that will brighten your loved one's desk for years to come.",
    image: "/product/image3.png",
    bgGradient: "from-yellow-100 to-amber-200",
    category: "Single Stem",
    featured: true,
  },
  {
    id: 4,
    slug: "meadow-wildflower-bouquet",
    name: "Meadow Wildflower Bouquet",
    price: 299,
    shortDesc: "A whimsical, everlasting mix of chenille lavender, daisies & foliage.",
    description:
      "Our Meadow Wildflower Bouquet is a playful, romantic arrangement inspired by countryside meadows. Every element — soft lavender sprigs, joyful white daisies, dainty yellow buttercups, and eucalyptus-style foliage — is hand-sculpted from fuzzy pipe cleaners by Sufia Ansari and hand-tied with rustic jute twine. A charming, zero-maintenance bouquet that adds cozy pastel warmth to any room.",
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
    shortDesc: "Pure, elegant white lily crafted from delicate pipe cleaners with gentle curves.",
    description:
      "White Lily Grace is a tribute to peaceful beauty and mindful art. Hand-formed with velvety white chenille stems, delicate stamens, and soft green foliage, each petal is gently flared to create an open, lifelike bloom. A tranquil, dust-friendly keepsake that brings serene elegance to shelves, desks, or coffee tables without pollen or watering worries.",
    image: "/product/image5.png",
    bgGradient: "from-slate-100 to-zinc-200",
    category: "Single Stem",
    featured: false,
  },
  {
    id: 6,
    slug: "garden-rose-blush-bundle",
    name: "Garden Rose Blush Bundle",
    price: 399,
    shortDesc: "5 plush handcrafted garden roses in harmonious blush and ivory hues.",
    description:
      "A show-stopping arrangement of five handcrafted garden roses, individually sculpted from blush, peach, and soft ivory chenille stems. Each rose has dozens of hand-rolled petals for rich volume and fuzzy, tactile appeal. Wrapped in designer craft paper with luxury ribbon, this bundle is the ultimate everlasting gift for special celebrations, graduations, or a luxurious self-treat.",
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
    shortDesc: "Soft purple chenille lavender sprigs — forever calm and fluffy.",
    description:
      "Lavender Dreams brings calming pastel vibes without any drying or brittle mess. Each stalk is painstakingly detailed with mini loops of purple and lilac pipe cleaners, recreating the delicate texture of French lavender buds. A soothing, hypoallergenic accent for your study table, nightstand, or bookshelf that stays permanently fresh and fuzzy.",
    image: "/images/peony-blush.jpg",
    bgGradient: "from-violet-100 to-purple-200",
    category: "Bundle",
    featured: false,
  },
  {
    id: 8,
    slug: "carnation-carnival",
    name: "Carnation Carnival",
    price: 199,
    shortDesc: "Vibrant ruffled carnations hand-twisted in a burst of playful colours.",
    description:
      "The Carnation Carnival is a joyous explosion of color and craft. Ruffled, fluffy carnations hand-sculpted in coral, rosy red, buttery yellow, and cream chenille stems. Because each petal is supported by flexible craft wire, you can shape, fluff, or arrange the bunch to your liking. An upbeat, charming gift that symbolizes celebration and affectionate admiration.",
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
