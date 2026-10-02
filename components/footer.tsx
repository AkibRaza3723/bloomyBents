import Link from "next/link";
import { Flower2, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Flower2 className="w-5 h-5 text-secondary" />
            <span className="font-display text-xl font-semibold">Bloomy Bents</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed max-w-xs">
            Handcrafted pipe cleaner flowers sculpted with love by Sufia Ansari. Everlasting blooms that never fade.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4 font-medium">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-background/70">
            <li><Link href="/" className="hover:text-background transition-colors py-1 inline-block">Home</Link></li>
            <li><Link href="/products" className="hover:text-background transition-colors py-1 inline-block">Catalog</Link></li>
            <li><Link href="/#about" className="hover:text-background transition-colors py-1 inline-block">About Us</Link></li>
            <li><Link href="/#faq" className="hover:text-background transition-colors py-1 inline-block">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4 font-medium">Get in Touch</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors py-1"
          >
            <ExternalLink className="w-4 h-4" /> @bloomybents on Instagram
          </a>
          <p className="text-sm text-background/60 mt-3 leading-relaxed">
            Orders via WhatsApp — click &apos;Order&apos; on any product or request a custom bouquet.
          </p>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/40 px-4">
        © {new Date().getFullYear()} Bloomy Bents. Made with 🌸
      </div>
    </footer>
  );
}

