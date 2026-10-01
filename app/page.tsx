import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedProducts } from "@/components/featured-products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Leaf, Heart, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply click 'Order Now' on any product — it will open WhatsApp with a pre-filled message. We'll confirm availability, discuss delivery, and process your order right there!",
  },
  {
    q: "Are the flowers fresh? How long do they last?",
    a: "Yes! Every flower is hand-selected at peak freshness. Most single stems last 5–10 days; bouquets last 3–7 days with proper care (fresh water, trimmed stems, away from direct sun).",
  },
  {
    q: "Do you offer custom bouquets?",
    a: "Absolutely! Just message us on WhatsApp or Instagram with your vision — colour palette, occasion, budget — and we'll craft something unique for you.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We currently deliver locally. Message us your location on WhatsApp and we'll confirm if we can reach you. Pickup is always available!",
  },
  {
    q: "Can I include a personalised note?",
    a: "Of course — every order comes with a complimentary handwritten note. Just mention the message when you order via WhatsApp.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[100svh] flex items-end pb-12 sm:pb-20 md:pb-24 overflow-hidden">
          {/* Mobile Hero Image (< 768px) */}
          <Image
            src="/images/hero2.png"
            alt="Beautiful flower arrangement by Bloomy Bents"
            fill
            priority
            className="object-cover md:hidden"
            sizes="100vw"
          />
          {/* Desktop Hero Image (>= 768px) */}
          <Image
            src="/images/hero1.png"
            alt="Beautiful flower arrangement by Bloomy Bents"
            fill
            priority
            className="object-cover hidden md:block"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <p className="text-white/80 text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
              Bloomy Bents
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-3 sm:mb-4">
              FLOWERS
            </h1>
            <p className="font-display text-lg sm:text-2xl md:text-3xl text-white/85 italic mb-6 sm:mb-8">
              that speak from the heart
            </p>
            <div>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border border-white/30 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white hover:text-foreground transition-all duration-300 shadow-lg"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── About Founder ── */}
        <section id="about" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-2">About us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mt-6 sm:mt-8">
            <div className="flex justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <Image
                  src="/images/image.png"
                  alt="Founder of Bloomy Bents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Flowers are more than just gifts.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                At Bloomy Bents, every bouquet tells a story. We believe flowers are a way to share love, joy and beauty in life&apos;s most meaningful moments. From elegant roses and romantic peonies to cheerful sunflowers and seasonal arrangements, we carefully craft each bouquet with passion, creativity, and a personal touch.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Whether you&apos;re celebrating a birthday, wedding, anniversary, or simply want to brighten someone&apos;s day — our flowers are designed to make every moment unforgettable.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 pt-2">
                {[
                  { icon: Leaf, label: "100% Fresh" },
                  { icon: Heart, label: "Made with Love" },
                  { icon: Sparkles, label: "Custom Orders" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium bg-secondary/50 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Products ── */}
        <section className="py-12 sm:py-16 bg-secondary/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-1 sm:mb-2">Catalog</p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">Our Favourites</h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all self-start sm:self-auto"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FeaturedProducts />
            <div className="flex justify-center mt-10 sm:mt-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all shadow-md"
              >
                Browse Full Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-1 sm:mb-2">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">Common Questions</h2>
          </div>
          <Accordion multiple={false} className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border/50 rounded-xl px-4 sm:px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="font-medium text-left py-4 sm:py-5 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 text-xs sm:text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}
