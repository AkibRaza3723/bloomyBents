"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { products, type Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { buildCustomOrderWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MessageCircle, ArrowRight, Flower2, Heart, RefreshCw } from "lucide-react";
import { cn } from "cn";

const categories = ["All", "Single Stem", "Bouquet", "Bundle"] as const;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { data = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => products,
  });

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return data;
    return data.filter((product) => product.category === selectedCategory);
  }, [data, selectedCategory]);

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
        {/* Header Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-widest uppercase mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Catalog & Bespoke
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.15]">
                You choose a ready-made bouquet,{" "}
                <span className="text-primary italic font-serif font-normal block sm:inline">
                  or be the creator.
                </span>
              </h1>

              <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Transform your emotions into a bouquet. Every flower hand-picked, every arrangement made with love.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-border/60 text-xs sm:text-sm text-foreground/80 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  100% Fresh Stems
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Complimentary Note
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Hand-tied with Care
                </div>
              </div>
            </div>

            {/* Right Card: Be The Creator / Custom Request */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-primary/20 bg-gradient-to-br from-card via-card to-secondary/30 shadow-lg shadow-primary/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <Flower2 className="w-3.5 h-3.5" />
                      Be The Creator
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">Custom Requests</span>
                  </div>

                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                      Design Your Own Bouquet
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed">
                      Have a specific color palette, favourite flowers, or special occasion? Tell us what you envision and we&apos;ll handcraft it for you.
                    </p>
                  </div>

                  <a
                    href={buildCustomOrderWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium py-3 px-5 rounded-full hover:bg-primary/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all group"
                  >
                    <MessageCircle className="w-4 h-4 fill-primary-foreground/20" />
                    <span>Create on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Products Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-border/60">
            {/* Category Chips with Counts (Scrollable on small mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count =
                  cat === "All"
                    ? data.length
                    : data.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                    )}
                  >
                    <span>{cat}</span>
                    <span
                      className={cn(
                        "text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full",
                        isActive
                          ? "bg-white/20 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground font-medium shrink-0">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "arrangement" : "arrangements"}
            </p>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border/80 p-8">
              <p className="text-lg font-medium text-foreground">No arrangements found in this category</p>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Try selecting another category or chat with us for a custom request.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                View All Arrangements
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

