import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReviewsSection } from "@/components/reviews-section";
import { products, getProductBySlug } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Bloomy Bents`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 py-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Catalog
          </Link>

          {/* Product layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-muted/40">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} flex items-center justify-center text-7xl sm:text-8xl`}>
                  🌸
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-5 sm:space-y-6 md:sticky md:top-24">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  <Tag className="w-3 h-3" />
                  {product.category}
                </div>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">{product.shortDesc}</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">per stem / bundle</span>
              </div>

              <a
                id={`order-${product.slug}`}
                href={buildWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground w-full py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-primary/20"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Order on WhatsApp</span>
              </a>

              <div className="border-t border-border/60 pt-5 sm:pt-6">
                <h2 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">About this flower</h2>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{product.description}</p>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-4 sm:p-5 text-sm space-y-2 border border-border/40">
                <p className="font-medium text-foreground text-xs sm:text-sm">Care Tips</p>
                <ul className="text-muted-foreground space-y-1.5 text-xs">
                  <li>✦ Keep in fresh, clean water</li>
                  <li>✦ Trim stems at an angle every 2–3 days</li>
                  <li>✦ Avoid direct sunlight and heat</li>
                  <li>✦ Keep away from fruit (ethylene gas)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <ReviewsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
