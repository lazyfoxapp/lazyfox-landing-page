import { renderOgImage, size, contentType } from "@/lib/og-image";

export const alt = "About LazyFox";
export { size, contentType };

export default function Image() {
  return renderOgImage("About", "We built LazyFox so your day tracks itself");
}
