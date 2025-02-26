"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SVGProps } from "react";
import { Switch } from "@headlessui/react";
import clsx from "clsx";

// Sun Icon
const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Moon Icon
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents server-side mismatch issues

  const isDarkMode = theme === "dark";

  return (
    <div className="flex flex-row items-center text-white text-4xl">
      <Switch
        checked={isDarkMode}
        onChange={() => setTheme(isDarkMode ? "light" : "dark")}
        aria-label="Toggle Dark Mode"
        className={clsx(
          "relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none",
          isDarkMode
            ? "bg-slate-700 text-slate-400 focus-visible:ring-slate-500"
            : "bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600"
        )}
      >
        {/* Sun & Moon Icons for Static View */}
        <Sun
          className={clsx(
            "transform transition-transform",
            isDarkMode ? "scale-100 duration-300" : "scale-0 duration-500"
          )}
        />
        <Moon
          className={clsx(
            "ml-3.5 transform transition-transform",
            isDarkMode ? "scale-0 duration-500" : "scale-100 duration-300"
          )}
        />

        {/* Moving Toggle Button */}
        <span
          className={clsx(
            "absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500",
            isDarkMode ? "translate-x-[2.625rem]" : ""
          )}
        >
          {/* Sun & Moon Inside Toggle Button */}
          <Sun
            className={clsx(
              "flex-none transition duration-500 transform text-cyan-500",
              isDarkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"
            )}
          />
          <Moon
            className={clsx(
              "flex-none -ml-6 transition duration-500 transform text-slate-700",
              isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
          />
        </span>
      </Switch>
      <span className="ml-5 text-2xl font-light">Hi there!</span>
    </div>
  );
};

export default ThemeSwitcher;
