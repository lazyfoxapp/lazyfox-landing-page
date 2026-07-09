import { pillars } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { PillarRow } from "@/components/pillar-row";

export function FeatureLedger() {
  return (
    <section className="mx-auto max-w-[1160px] px-8 pb-15 pt-25">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal className="lg:sticky lg:top-24">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-primary-ink">
            What the fox does
          </div>
          <h2 className="font-display mb-4.5 text-[44px] font-extrabold leading-[1.05] tracking-tight">
            Five things,
            <br />
            handled quietly
          </h2>
          <p className="mb-6.5 text-[17px] leading-relaxed text-muted">
            No dashboards to babysit, no settings to tune. Read the ledger
            below: every capability runs quietly on its own.
          </p>
          <div className="inline-flex items-center gap-2.5 rounded-xl bg-secondary-soft px-4 py-2.5 text-sm font-bold text-secondary">
            <span className="msym text-[20px]">auto_awesome</span> Zero-config,
            always on
          </div>
        </Reveal>

        <Reveal className="border-t border-border">
          {pillars.map((p) => (
            <PillarRow key={p.idx} pillar={p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
