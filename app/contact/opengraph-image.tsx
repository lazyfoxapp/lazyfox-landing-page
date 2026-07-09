import { renderOgImage, size, contentType } from "@/lib/og-image";

export const alt = "Contact LazyFox";
export { size, contentType };

export default function Image() {
  return renderOgImage("Contact", "Poke the fox");
}
