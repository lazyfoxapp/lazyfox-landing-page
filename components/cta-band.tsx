import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="px-8 pb-24">
      <Reveal className="relative mx-auto max-w-290 overflow-hidden rounded-4xl bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-ink)_100%)] px-8 py-16 text-center text-white shadow-[0_24px_60px_var(--shadow)] sm:px-12">
        <Image
          src="/logo.svg"
          alt=""
          width={220}
          height={220}
          className="pointer-events-none absolute -bottom-10 -right-7.5 -rotate-8 opacity-20"
        />
        <h2 className="font-display mb-3.5 text-4xl font-extrabold tracking-tight">
          Let the fox handle it
        </h2>
        <p className="mx-auto mb-7.5 max-w-[44ch] text-lg opacity-90">
          Join the beta and let LazyFox handle the logging, the nudges, and
          the noticing, so you don&apos;t have to.
        </p>
        <button
          type="button"
          className="h-13.5 rounded-2xl bg-white px-8.5 text-base font-bold text-primary-ink transition-transform hover:-translate-y-0.5"
        >
          Join the beta
        </button>
      </Reveal>
    </section>
  );
}
