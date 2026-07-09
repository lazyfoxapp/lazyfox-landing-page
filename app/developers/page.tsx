import type { Metadata } from "next";
import { extensions, devSteps } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Developers",
  description:
    "Ship plugins and extensions to a growing marketplace of loyal users.",
  path: "/developers",
});

export default function DevelopersPage() {
  return (
    <div>
      <header className="relative overflow-hidden bg-[radial-gradient(110%_90%_at_20%_0%,var(--hero)_0%,var(--bg)_60%)] px-8 pb-18 pt-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wider text-primary-ink">
              <span className="msym text-base">extension</span> Extension
              marketplace
            </div>
            <h1 className="font-display mb-5 text-[38px] font-extrabold leading-[1.04] tracking-tight sm:text-[52px]">
              Build on LazyFox
            </h1>
            <p className="mb-7.5 max-w-[52ch] text-lg leading-relaxed text-muted">
              Ship plugins and extensions to a growing marketplace of loyal
              users. Bring your own events, your own logs, your own
              automations.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <button
                type="button"
                className="inline-flex h-12.5 items-center gap-2.5 rounded-2xl bg-primary px-6.5 text-[15px] font-bold text-white shadow-[0_8px_22px_var(--shadow)] transition-colors hover:bg-primary-ink"
              >
                <span className="msym text-xl">rocket_launch</span> Publish an
                extension
              </button>
              <button
                type="button"
                className="inline-flex h-12.5 items-center gap-2.5 rounded-2xl border border-border bg-surface px-6 text-[15px] font-bold text-text transition-colors hover:border-primary"
              >
                <span className="msym text-xl">menu_book</span> Read the docs
              </button>
            </div>
          </Reveal>
          <Reveal className="flex justify-center">
            <div className="relative flex h-55 w-55 rotate-3 items-center justify-center rounded-[32px] border border-border bg-surface shadow-[0_20px_50px_var(--shadow)]">
              <span className="msym text-[110px] text-primary">extension</span>
              <span className="msym absolute -right-3.5 -top-3.5 rounded-full bg-surface p-1.5 text-[44px] text-secondary shadow-[0_8px_20px_var(--shadow)]">
                add_circle
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-[1160px] px-8 pb-6 pt-14">
        <Reveal className="mb-6.5 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-[30px] font-extrabold tracking-tight">
            Featured extensions
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-bold"
          >
            Browse all <span className="msym text-[19px]">arrow_forward</span>
          </a>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extensions.map((e) => (
            <Reveal
              key={e.name}
              className="rounded-[20px] border border-border bg-surface p-6 shadow-[0_6px_18px_var(--shadow)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_var(--shadow)]"
            >
              <div className="mb-4 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-primary-soft text-primary-ink">
                  <span className="msym text-[25px]">{e.icon}</span>
                </span>
                <div>
                  <div className="font-display text-[17px] font-bold">
                    {e.name}
                  </div>
                  <div className="text-[12.5px] text-muted">by {e.author}</div>
                </div>
              </div>
              <p className="mb-4 min-h-11 text-sm leading-relaxed text-muted">
                {e.body}
              </p>
              <div className="flex items-center justify-between text-[13px]">
                <span className="inline-flex items-center gap-1 font-bold text-secondary">
                  <span className="msym text-[17px]">download</span>
                  {e.installs}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-muted">
                  <span className="msym text-base text-primary">star</span>
                  {e.rating}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-8 pb-10 pt-16">
        <Reveal className="mb-9 text-center">
          <h2 className="font-display mb-2 text-[30px] font-extrabold tracking-tight">
            Ship in three lazy steps
          </h2>
          <p className="text-base text-muted">
            From idea to installed extension in an afternoon, not a sprint.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {devSteps.map((st) => (
            <Reveal
              key={st.step}
              className="rounded-[20px] border border-border bg-surface2 p-7 text-center"
            >
              <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-primary-ink shadow-[0_6px_16px_var(--shadow)]">
                <span className="msym text-[28px]">{st.icon}</span>
              </span>
              <div className="mb-1.5 text-sm font-extrabold tracking-wider text-primary">
                {st.step}
              </div>
              <h3 className="font-display mb-2 text-[19px] font-bold">
                {st.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-muted">
                {st.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24 pt-5">
        <Reveal className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-7 rounded-[28px] border border-border bg-surface p-9 shadow-[0_16px_44px_var(--shadow)]">
          <div>
            <h2 className="font-display mb-1.5 text-[28px] font-extrabold tracking-tight">
              Got an idea? Join the fleet.
            </h2>
            <p className="text-[15.5px] text-muted">
              Apply for a developer account and get an API key:{" "}
              <a href="mailto:sulairo@lazyfox.app">
                sulairo@lazyfox.app
              </a>
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-13 items-center gap-2.5 whitespace-nowrap rounded-2xl bg-primary px-7 text-[15px] font-bold text-white transition-colors hover:bg-primary-ink"
          >
            <span className="msym text-xl">badge</span> Become a developer
          </button>
        </Reveal>
      </section>
    </div>
  );
}
