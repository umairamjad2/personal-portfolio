


import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full border-2 transition-all duration-500 ease-in-out flex items-center justify-center group overflow-hidden",
        isDarkMode 
          ? "border-primary/30 bg-slate-900/60 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:border-primary/80" 
          : "border-amber-400/30 bg-amber-50/40 shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:border-amber-400/80"
      )}
      aria-label="Toggle Theme"
    >
      {/* Sun Icon (Custom High-End SVG) */}
      <svg
        className={cn(
            "h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            isDarkMode 
                ? "opacity-0 scale-50 -rotate-90 pointer-events-none" 
                : "opacity-100 scale-100 rotate-0"
        )}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          className="text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]"
          d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06a.996.996 0 000-1.41zM6.63 16.54a.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06a.996.996 0 000-1.41z"
        />
      </svg>

      {/* Moon Icon (Custom High-End SVG) */}
      <svg
        className={cn(
            "absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            isDarkMode 
                ? "opacity-100 scale-100 rotate-0" 
                : "opacity-0 scale-50 rotate-90 pointer-events-none"
        )}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          className="text-violet-300 drop-shadow-[0_0_6px_rgba(167,139,250,0.6)]"
          d="M12.1 22c4.9 0 9-3.6 10-8.3.1-.4 0-.8-.4-1-.3-.2-.7-.2-1 .1-1 .9-2.3 1.4-3.7 1.4-3.9 0-7-3.1-7-7 0-1.4.4-2.6 1.2-3.7.2-.3.2-.7 0-1s-.5-.4-.9-.4C3.6 3.1 0 7.1 0 11.9 0 17.5 4.5 22 10.1 22c.7 0 1.3 0 2-.2z"
        />
      </svg>
    </button>
  );
};



export default ThemeToggle;