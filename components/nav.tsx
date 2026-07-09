"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/content";
import { useTheme, type ThemeMode } from "@/components/theme-provider";

const modeMeta: Record<ThemeMode, { label: string; icon: string }> = {
  system: { label: "System", icon: "brightness_auto" },
  light: { label: "Light", icon: "light_mode" },
  dark: { label: "Dark", icon: "dark_mode" },
};

export function Nav() {
  const pathname = usePathname();
  const { mode, setMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu when navigating, without an effect: React's
  // recommended pattern for resetting state on a prop change.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick, true);
    return () => document.removeEventListener("click", onDocClick, true);
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:gap-6 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center gap-3 text-text">
          <Image
            src="/logo.svg"
            alt="LazyFox"
            width={42}
            height={42}
            className="block rounded-[11px] shadow-[0_3px_10px_var(--shadow)]"
          />
          <span className="font-display text-[22px] font-extrabold tracking-tight">
            LazyFox
          </span>
        </Link>

        <div className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`h-10 rounded-full px-4 text-sm font-semibold leading-10 transition-colors ${
                  active
                    ? "bg-primary-soft text-primary-ink"
                    : "text-muted hover:bg-surface2 hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              title="Appearance"
              className="flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface pl-3 pr-2.5 text-sm font-semibold text-text transition-colors hover:border-primary sm:pl-3.5 sm:pr-3"
            >
              <span className="msym text-[19px]">{modeMeta[mode].icon}</span>
              <span className="hidden sm:inline">{modeMeta[mode].label}</span>
              <span className="msym text-[18px] text-muted">expand_more</span>
            </button>
            {menuOpen && (
              <div className="animate-menu absolute right-0 top-12 z-60 w-47 rounded-2xl border border-border bg-surface p-1.5 shadow-[0_16px_40px_var(--shadow)]">
                {(Object.keys(modeMeta) as ThemeMode[]).map((key) => {
                  const active = mode === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setMode(key);
                        setMenuOpen(false);
                      }}
                      className={`flex h-10.5 w-full items-center gap-2.5 rounded-lg px-3 text-sm font-semibold transition-colors hover:bg-surface2 ${
                        active ? "text-text" : "text-muted"
                      }`}
                    >
                      <span className="msym text-[20px]">{modeMeta[key].icon}</span>
                      <span className="flex-1 text-left">{modeMeta[key].label}</span>
                      <span
                        className={`msym text-[19px] text-primary ${active ? "opacity-100" : "opacity-0"}`}
                      >
                        check
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <button
            type="button"
            className="h-10 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-bold text-white shadow-[0_4px_14px_var(--shadow)] transition-colors hover:bg-primary-ink sm:px-5"
          >
            <span className="sm:hidden">Beta</span>
            <span className="hidden sm:inline">Get the beta</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-primary lg:hidden"
          >
            <span
              className={`msym text-2xl transition-transform duration-300 ease-out ${
                mobileOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          mobileOpen ? "border-t border-border" : ""
        }`}
        style={{ gridTemplateRows: mobileOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-1 px-4 py-3 transition-opacity duration-200 ${
              mobileOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                    active
                      ? "bg-primary-soft text-primary-ink"
                      : "text-muted hover:bg-surface2 hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
