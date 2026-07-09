import type { Metadata } from "next";
import Image from "next/image";
import { aboutBlocks } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "We got tired of apps that demand your attention to track your life, so we built one that pays attention instead.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-215 px-8 py-20">
      <Reveal>
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-primary-ink">
          About
        </div>
        <h1 className="font-display mb-5.5 text-[38px] font-extrabold leading-[1.04] tracking-tight sm:text-[52px]">
          We built LazyFox
          <br />
          so your day tracks itself
        </h1>
        <p className="mb-10 max-w-[60ch] text-lg leading-relaxed text-muted">
          We got tired of apps that demand your attention to track your
          life. So we built one that pays attention instead: quietly,
          passively, without a single form to fill out.
        </p>
      </Reveal>
      <Reveal className="relative mb-13 h-65 overflow-hidden rounded-3xl bg-hero">
        <Image
          src="/logo.svg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {aboutBlocks.map((b) => (
          <Reveal key={b.title}>
            <h3 className="font-display mb-2.5 text-xl font-bold tracking-tight">
              {b.title}
            </h3>
            <p className="text-base leading-relaxed text-muted">{b.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
