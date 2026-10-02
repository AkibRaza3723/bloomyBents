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
import { ArrowRight, Flower2, Heart, Sparkles, Infinity as InfinityIcon } from "lucide-react";

const faqs = [
  {
    q: "What are Bloomy Bents flowers made of?",
    a: "Every bloom is intricately sculpted by hand using premium, soft chenille stems (pipe cleaners) wound around bendable floral wire cores. They are soft to the touch, lightweight, and artistically shaped to capture the delicate layered look of natural flowers — with zero wilting!",
  },
  {
    q: "Do pipe cleaner flowers last forever?",
    a: "Yes! Unlike real cut flowers that fade in just a few days, our pipe cleaner bouquets are everlasting. They won't wither, dry out, or lose their vibrant colors, making them timeless keepsakes for your room, desk, or memories.",
  },
  {
    q: "How do I care for and clean my bouquet?",
    a: "Caring for them is effortless — no water, trimming, or sunlight needed! If dust collects over time, gently brush the petals with a soft makeup brush or use a hairdryer on a cool, gentle airflow setting. You can even gently bend and fluff the petals anytime to reshape your arrangement.",
  },
  {
    q: "Can I request custom bouquets or specific colors?",
    a: "Absolutely! Founder Sufia Ansari loves bringing custom ideas to life. Whether you have a dream color palette, favorite flowers, or need a bespoke theme for a birthday, graduation, or anniversary, message us on WhatsApp with your vision.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click 'Order' on any product in our catalog — it will open WhatsApp with a pre-filled message. We'll confirm the order, discuss any customizations, share estimated crafting time, and finalize delivery or pickup!",
  },
  {
    q: "Can I include a personalised note?",
    a: "Of course! Every Bloomy Bents bouquet includes a complimentary handwritten note card. Just share your personal message when ordering via WhatsApp.",
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
            alt="Handcrafted pipe cleaner flower arrangement by Bloomy Bents"
            fill
            priority
            className="object-cover md:hidden"
            sizes="100vw"
          />
          {/* Desktop Hero Image (>= 768px) */}
          <Image
            src="/images/hero1.png"
            alt="Handcrafted pipe cleaner flower arrangement by Bloomy Bents"
            fill
            priority
            className="object-cover hidden md:block"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <p className="text-white/80 text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
              Bloomy Bents • Handcrafted Floral Art
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-3 sm:mb-4">
              FLOWERS
            </h1>
            <p className="font-display text-lg sm:text-2xl md:text-3xl text-white/85 italic mb-6 sm:mb-8">
              handcrafted from pipe cleaners, made to last forever
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
          <p className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-2">About the Founder</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mt-6 sm:mt-8">
            <div className="flex justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <Image
                  src="/images/hero2.png"
                  alt="Founder Sufia Ansari crafting pipe cleaner flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                Every bend tells a story. Blooms that never fade.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                At Bloomy Bents, founder <strong className="font-semibold text-foreground">Sufia Ansari</strong> transforms humble pipe cleaners (chenille stems) into breathtaking, everlasting floral works of art. What started as an eye for tactile craftsmanship and miniature sculpture has blossomed into a passion for crafting soft, bendable bouquets that stay forever in bloom.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Each petal, calyx, and leaf is patiently hand-twisted, curled, and shaped one by one. Whether you are celebrating a birthday, milestone, anniversary, or looking for a cozy aesthetic accent for your desk — Sufia&apos;s handcrafted bouquets bring the warmth and beauty of flowers without any of the wilting.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 pt-2">
                {[
                  { icon: Flower2, label: "100% Hand-Sculpted" },
                  { icon: InfinityIcon, label: "Everlasting Blooms" },
                  { icon: Heart, label: "Custom Chenille Art" },
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
