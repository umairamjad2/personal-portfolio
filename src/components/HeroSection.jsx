import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";
import profileImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-4 sm:px-6 pt-32 pb-12 sm:pb-16 border-b border-border"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Profile Image with Glow */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary/20 p-1 bg-background/50 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <img
                src={profileImage}
                alt="Umair Amjad"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/40 ring-offset-2 ring-offset-transparent shadow-[0_0_30px_rgba(139,92,246,0.4)]" />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1 text-left space-y-1.5 sm:space-y-2">
            <div className="space-y-0.5">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Umair Amjad
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-primary">
                Full-Stack & Mobile Developer
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl leading-snug">
              Full-Stack Developer focused on building responsive, high-performance web and mobile applications using React, Next.js, Node.js, and Flutter.
            </p>

            {/* Languages */}
            <div className="flex flex-wrap items-center justify-start gap-2 text-xs">
              <span className="text-muted-foreground font-medium mr-1">Languages:</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                English
              </span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                Urdu (Native)
              </span>
            </div>

            {/* Contact Chips */}
            <div className="flex flex-wrap justify-start gap-3 pt-2">
              <a
                href="mailto:umairamjad970@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 text-xs font-medium group"
              >
                <SiGmail size={14} className="text-[#EA4335] group-hover:scale-110 transition-transform" />
                <span>umairamjad970@gmail.com</span>
              </a>

              <a
                href="tel:+923473249678"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 text-xs font-medium group"
              >
                <SiWhatsapp size={14} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>+92 347 3249678</span>
              </a>

              <a
                href="https://github.com/umairamjad2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 text-xs font-medium group"
              >
                <SiGithub size={14} className="text-foreground group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/umair-amjad-44ab15277/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 border border-border hover:bg-primary/10 hover:border-primary transition-all duration-300 text-xs font-medium group"
              >
                <FaLinkedin size={14} className="text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
