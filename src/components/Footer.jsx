import { ArrowUp, Heart } from "lucide-react";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-10 px-4 border-t border-border bg-secondary/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* SVG Gradients for Social Icons */}
        <svg width="0" height="0" className="absolute">
          <linearGradient id="footer-github" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f6fc" />
            <stop offset="100%" stopColor="#6e7681" />
          </linearGradient>
          <linearGradient id="footer-linkedin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A66C2" />
            <stop offset="100%" stopColor="#0077B5" />
          </linearGradient>
          <linearGradient id="footer-gmail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="100%" stopColor="#C5221F" />
          </linearGradient>
          <linearGradient id="footer-whatsapp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
        </svg>

        <div className="flex flex-col items-center gap-8 pt-12">
          {/* Top Section: Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["About", "Projects", "Skills", "Experience"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Middle Section: Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/umairamjad2" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group">
              <SiGithub size={20} fill="url(#footer-github)" className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/umair-amjad-44ab15277/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group">
              <FaLinkedin size={20} fill="url(#footer-linkedin)" className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:umairamjad677@gmail.com" className="p-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group">
              <SiGmail size={20} fill="url(#footer-gmail)" className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/923235650774" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group">
              <SiWhatsapp size={20} fill="url(#footer-whatsapp)" className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Bottom Section: Info & Back to Top */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-8">
            <div className="text-center md:text-left space-y-1">
              <p className="text-sm text-foreground font-semibold">Umair Amjad</p>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[11px] text-muted-foreground">
                <span>Designed & Built with</span>
                <Heart size={10} className="text-red-500 animate-pulse" />
                <span>using React & Tailwind</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground order-last md:order-none">
              &copy; {currentYear} All rights reserved.
            </p>

            <a
              href="#hero"
              className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-500 group shadow-lg shadow-primary/10"
              title="Back to Top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
