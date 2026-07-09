import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg2">
      <div className="mx-auto grid max-w-290 grid-cols-1 gap-10 px-8 py-14 sm:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt=""
              width={38}
              height={38}
              className="rounded-[10px]"
            />
            <span className="font-display text-xl font-extrabold">LazyFox</span>
          </div>
          <p className="max-w-[38ch] text-[14.5px] leading-relaxed text-muted">
            Task automation and passive event logging that just works in
            the background.
          </p>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-muted">
            Pages
          </div>
          <div className="flex flex-col items-start gap-2.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14.5px] text-text hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-wider text-muted">
            Reach us
          </div>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:sulairo@lazyfox.app" className="text-[14.5px]">
              sulairo@lazyfox.app
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-8 py-5 text-center text-[13px] text-muted">
        © 2026 LazyFox · Automation that runs itself
      </div>
    </footer>
  );
}
