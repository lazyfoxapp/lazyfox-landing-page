"use client";

import { useState } from "react";
import type { pillars } from "@/lib/content";

export function PillarRow({ pillar }: { pillar: (typeof pillars)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[40px_52px_1fr_auto] items-center gap-5 px-4.5 py-6.5 text-left transition-all duration-300 hover:translate-x-1.5 hover:bg-surface2 sm:grid-cols-[56px_52px_1fr_auto] md:cursor-default"
      >
        <span className="font-display text-[30px] font-extrabold text-primary opacity-40">
          {pillar.idx}
        </span>
        <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
          <span className="msym text-[27px]">{pillar.icon}</span>
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight">
          {pillar.title}
        </h3>
        <span className="flex items-center justify-center">
          <span
            className={`msym text-2xl text-muted transition-transform duration-300 md:hidden ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            expand_more
          </span>
          <span className="msym hidden text-2xl text-muted md:inline-block">
            arrow_outward
          </span>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:grid-rows-[1fr]! ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-[40px_52px_1fr_auto] items-start gap-5 px-4.5 pb-6.5 sm:grid-cols-[56px_52px_1fr_auto]">
            <span />
            <span />
            <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-muted">
              {pillar.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
