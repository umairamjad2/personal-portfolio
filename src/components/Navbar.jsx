import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 border-b border-border h-16 flex items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      )}
    >
      <div className="container max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Brand Name on the Left */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 text-glow text-foreground">
            Portfolio
          </span>
        </a>

        {/* Theme Toggle on the Right */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

    </nav>
  );
};


export default Navbar;
