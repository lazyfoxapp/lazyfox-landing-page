"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
};

const STORAGE_KEY = "lazyfox-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? "system";
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start at "system" so the first client render matches the server
  // render exactly (no window/localStorage on the server). The real stored
  // preference is read from localStorage in an effect below, since that's
  // client-only data: correcting it after mount is a normal re-render, not
  // a hydration mismatch, whereas reading it in a lazy initializer would
  // make the client's first render disagree with the server's.
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [systemPref, setSystemPref] = useState<ResolvedTheme>(getSystemTheme);

  useEffect(() => {
    const stored = getStoredMode();
    if (stored !== "system") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: correcting from the SSR-safe default to the real localStorage value, which can only be read client-side.
      setModeState(stored);
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setSystemPref(mq.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const resolvedTheme: ResolvedTheme = mode === "system" ? systemPref : mode;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export const NO_FLASH_SCRIPT = `(function(){try{var m=localStorage.getItem('${STORAGE_KEY}')||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme', d?'dark':'light');}catch(e){}})();`;
