import type { Metadata } from "next";
import { contacts } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Questions, bug reports, or just want to say hi to the fox? We usually reply within a day or two.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-8 py-20">
      <Reveal className="mb-13">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-primary-ink">
          Contact
        </div>
        <h1 className="font-display mb-4.5 text-[38px] font-extrabold leading-[1.04] tracking-tight sm:text-[52px]">
          Poke the fox
        </h1>
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          Questions, bug reports, or just want to say hi to the fox? We
          usually reply within a day or two.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 rounded-[18px] border border-border bg-surface p-5.5 shadow-[0_6px_18px_var(--shadow)] transition-colors hover:border-primary"
            >
              <div className="flex h-11.5 w-11.5 flex-none items-center justify-center rounded-xl bg-primary-soft text-primary-ink">
                <span className="msym text-[23px]">{c.icon}</span>
              </div>
              <div>
                <div className="text-[15px] font-bold text-text">
                  {c.label}
                </div>
                <div className="text-sm text-muted">{c.email}</div>
              </div>
            </a>
          ))}
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
