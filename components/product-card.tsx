import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-muted/40">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} flex items-center justify-center text-6xl`}>
            🌸
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-foreground/80 shadow-xs border border-border/40">
          {product.category}
        </span>
      </Link>
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/40">
          <span className="font-display text-xl sm:text-2xl font-bold text-primary">
            ₹{product.price}
          </span>
          <a
            href={buildWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-xs shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  );
}

