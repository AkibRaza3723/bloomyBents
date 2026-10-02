"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalog" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200",
        mobileOpen
          ? "h-[100dvh] bg-background flex flex-col md:h-16 md:bg-background/85 md:backdrop-blur-md md:border-b md:border-border/50"
          : "h-16 bg-background/85 backdrop-blur-md border-b border-border/50"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 w-full flex items-center justify-between shrink-0 border-b border-border/40 md:border-b-0">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Flower2 className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display text-lg sm:text-xl font-semibold tracking-wide text-foreground">
            Bloomy Bents
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors relative py-1",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-all shadow-sm"
          >
            <span>Order Flowers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-secondary/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="flex-1 w-full flex flex-col justify-between px-6 py-6 overflow-y-auto bg-background md:hidden">
          <ul className="space-y-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-2xl font-display font-medium py-3.5 border-b border-border/40 transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 pb-2 space-y-3">
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3.5 rounded-full text-base font-medium shadow-md hover:bg-primary/90 transition-all"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-muted-foreground pt-2">
              Boutique flowers crafted with love • Bloomy Bents
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

