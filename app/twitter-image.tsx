import {
  renderOgImage,
  size,
  contentType,
  DEFAULT_OG_EYEBROW,
  DEFAULT_OG_HEADLINE,
} from "@/lib/og-image";

export const alt = "LazyFox — Do less. Track everything.";
export { size, contentType };

export default function Image() {
  return renderOgImage(DEFAULT_OG_EYEBROW, DEFAULT_OG_HEADLINE);
}
