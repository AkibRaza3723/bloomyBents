import type { Product } from "./data";

const WHATSAPP_NUMBER = "918470951356";

export function buildWhatsAppUrl(product: Product): string {
  const message = `Hi! I'd like to order the handcrafted *${product.name}* (₹${product.price}) from Bloomy Bents. Could you please share availability and crafting timeline? 🌸`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCustomOrderWhatsAppUrl(): string {
  const message = `Hi Sufia! 🌸 I'd love to commission a custom pipe cleaner flower bouquet from Bloomy Bents. Could you help me design something special?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

