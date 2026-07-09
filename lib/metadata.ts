export const SITE_NAME = "LazyFox";
export const SITE_URL = "https://lazyfox.app";
export const TAGLINE = "Do less. Track everything.";
export const SITE_DESCRIPTION =
  "LazyFox quietly logs your day in the background, so you can stay present instead of tracking it yourself.";

export const KEYWORDS = [
  "LazyFox",
  "passive activity tracking",
  "automatic logging",
  "sleep tracking app",
  "event-driven notifications",
  "life logging",
  "task automation",
];

export const baseOpenGraph = {
  type: "website" as const,
  locale: "en_US",
  siteName: SITE_NAME,
};

export const baseTwitter = {
  card: "summary_large_image" as const,
};

/**
 * Builds a page's `title`/`description`/`openGraph`/`twitter` fields
 * consistently. `title` here is just the page's own segment name (e.g.
 * "About") — the root layout's `title.template` appends "· LazyFox" to
 * the document <title>, but openGraph/twitter titles aren't templated,
 * so this suffixes them explicitly for a proper social preview.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const socialTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      url: path,
      title: socialTitle,
      description,
    },
    twitter: {
      ...baseTwitter,
      title: socialTitle,
      description,
    },
  };
}
