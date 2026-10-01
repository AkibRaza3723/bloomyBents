import type { Product } from "./data";

const WHATSAPP_NUMBER = "918470951356";

export function buildWhatsAppUrl(product: Product): string {
  const message = `Hi! I'd like to order *${product.name}* (₹${product.price}) from Bloomy Bents. Could you please confirm availability? 🌸`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCustomOrderWhatsAppUrl(): string {
  const message = `Hi Bloomy Bents! 🌸 I'd love to create a custom floral arrangement. Could you help me design something special?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

