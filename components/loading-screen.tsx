"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MAX_WAIT_MS = 1200;

export function LoadingScreen() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const markReady = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof document !== "undefined" && "fonts" in document) {
      Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS)),
      ]).then(markReady);
    } else {
      markReady();
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={ready}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-500 ease-out ${
        ready ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={64}
        height={64}
        priority
        className="animate-pulse-soft rounded-2xl"
      />
      <span className="sr-only">Loading LazyFox</span>
    </div>
  );
}
