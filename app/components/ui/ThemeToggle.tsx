// components/ui/ThemeToggle.tsx
"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-[#056BFF]"
      aria-label="Toggle light and dark theme"
      disabled={!mounted}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-transform duration-300 ${
          isDark ? "left-7" : "left-1"
        }`}
      >
        {mounted && isDark ? (
          <Moon className="w-3 h-3 text-gray-800 absolute top-0.5 left-0.5" />
        ) : mounted ? (
          <Sun className="w-3 h-3 text-yellow-500 absolute top-0.5 left-0.5" />
        ) : null}
      </div>
    </button>
  );
}
