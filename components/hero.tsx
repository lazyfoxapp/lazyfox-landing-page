import Image from "next/image";
import { stats } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_78%_6%,var(--hero)_0%,var(--bg)_62%)] px-8 pb-24 pt-22">
      <div className="animate-pulse-soft absolute -right-15 -top-20 h-85 w-85 rounded-full bg-secondary-soft opacity-50 blur-[10px]" />
      <div className="relative mx-auto grid max-w-290 grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="mb-5.5 inline-flex items-center gap-2 rounded-full bg-secondary-soft px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wider text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Effortless by design
          </div>
          <h1 className="font-display mb-5.5 text-[44px] font-extrabold leading-[1.02] tracking-tight sm:text-[60px]">
            Do less.
            <br />
            Track everything.
          </h1>
          <p className="mb-8.5 max-w-[30ch] text-lg leading-relaxed text-muted">
            LazyFox works quietly in the background, logging your day
            automatically: no taps, no forms, nothing to remember.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <button
              type="button"
              className="h-13 rounded-2xl bg-primary px-7 text-base font-bold text-white shadow-[0_8px_22px_var(--shadow)] transition-colors hover:bg-primary-ink"
            >
              Start logging free
            </button>
            <button
              type="button"
              className="h-13 rounded-2xl border border-border bg-surface px-6.5 text-base font-bold text-text transition-colors hover:border-primary"
            >
              See how it works
            </button>
          </div>
          <div className="mt-10 flex gap-7">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[26px] font-extrabold text-primary-ink">
                  {s.num}
                </div>
                <div className="text-[13px] font-medium text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[44px] bg-surface shadow-[0_30px_70px_var(--shadow)]" />
            <Image
              src="/logo.svg"
              alt="LazyFox mascot"
              width={340}
              height={340}
              className="animate-float relative rounded-[36px] shadow-[0_20px_50px_var(--shadow)]"
              priority
            />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
