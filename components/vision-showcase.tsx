import { timeline } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function VisionShowcase() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2">
          <div className="rounded-[28px] border border-border bg-surface2 p-7.5 shadow-[0_20px_50px_var(--shadow)]">
            {timeline.map((ev) => (
              <div
                key={ev.title}
                className="flex gap-4 border-b border-border py-3.5 last:border-b-0"
              >
                <div className="flex h-9.5 w-9.5 flex-none items-center justify-center rounded-[10px] bg-secondary-soft text-secondary">
                  <span className="msym text-[20px]">{ev.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[14.5px] font-bold">{ev.title}</div>
                  <div className="text-[13px] text-muted">{ev.time}</div>
                </div>
                <div className="self-center rounded-full bg-secondary-soft px-2.5 py-1 text-xs font-bold text-secondary">
                  auto
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="order-1">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-secondary">
            The vision
          </div>
          <h2 className="font-display mb-4.5 text-[38px] font-extrabold leading-tight tracking-tight">
            Your life, quietly captured
          </h2>
          <p className="mb-4.5 text-[17px] leading-relaxed text-muted">
            Passive logging means the day writes itself: sleep cycles,
            movement, focus, and the little events that add up.
          </p>
          <p className="text-[17px] leading-relaxed text-muted">
            No forms, no manual check-ins. Just a quiet timeline you can
            glance at whenever you&apos;re curious.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
