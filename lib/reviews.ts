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
      "Absolutely stunning flowers! The peonies were so fresh and lasted over a week. Will definitely order again. 🌸",
    date: "September 2026",
  },
  {
    id: 2,
    name: "Aarav M.",
    rating: 5,
    comment:
      "Ordered for my wife's birthday — she was speechless. Beautifully packaged with a handwritten note. 10/10!",
    date: "August 2026",
  },
  {
    id: 3,
    name: "Meera K.",
    rating: 5,
    comment:
      "The wildflower bouquet was a work of art. Bloomy Bents puts so much love into every arrangement.",
    date: "August 2026",
  },
  {
    id: 4,
    name: "Rohan T.",
    rating: 5,
    comment:
      "Quick response on WhatsApp, super easy to order, and the flowers were delivered fresh and fragrant. Highly recommend!",
    date: "July 2026",
  },
  {
    id: 5,
    name: "Ananya R.",
    rating: 5,
    comment:
      "Got the lavender bundle as a self-treat — absolutely worth it. My room smells divine. Love this small business!",
    date: "July 2026",
  },
];
