import { renderOgImage, size, contentType } from "@/lib/og-image";

export const alt = "LazyFox Developers";
export { size, contentType };

export default function Image() {
  return renderOgImage("Extension marketplace", "Build on LazyFox");
}
