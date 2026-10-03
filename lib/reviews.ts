export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Priya S.",
    rating: 5,
    comment:
      "The pipe cleaner peonies look so adorable and realistic! Best part is they will literally last forever on my vanity table. Sufia is so incredibly talented! 🌸",
    date: "September 2026",
  },
  {
    id: 2,
    name: "Aarav M.",
    rating: 3, 
    comment:
      "Ordered a custom bouquet for my wife's birthday — she was amazed that it was handcrafted from pipe cleaners! Beautifully packaged with a handwritten note. 10/10!",
    date: "August 2026",
  },
  {
    id: 3,
    name: "Meera K.",
    rating: 4, 
    comment:
      "The wildflower bouquet is pure artistry. Every single chenille stem and petal has so much love and detail. Bloomy Bents is truly one-of-a-kind.",
    date: "August 2026",
  },
  {
    id: 4,
    name: "Rohan T.",
    rating: 5,
    comment:
      "Quick response on WhatsApp and super easy to customize colors. The bouquet arrived safely and looks stunning. The fact that it never wilts is amazing!",
    date: "July 2026",
  },
  {
    id: 5,
    name: "Ananya R.",
    rating: 5,
    comment:
      "Got the lavender bundle for my study desk — fuzzy, pastel, and soothing. Zero pollen, no maintenance, and stays cute every single day. Love Sufia's work!",
    date: "July 2026",
  },
];
