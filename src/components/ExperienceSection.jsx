import React, { useState } from "react";
import { HiCalendar, HiMapPin } from "react-icons/hi2";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "SYHO",
    period: "December 2025 – Present",
    location: "Pakistan – Remote (Full-time)",
    points: [
      "Developed and maintained cross-platform chat applications using React (web) and Flutter (mobile), ensuring smooth and responsive user experiences.",
      "Integrated and managed REST APIs for handling user authentication, real-time messaging, and data synchronization between frontend and backend systems.",
      "Implemented real-time chat features, including message delivery, user presence, and push notifications.",
      "Handled API state management, error handling, and data caching to improve performance and reliability.",
      "Collaborated with backend teams to design and optimize API endpoints for scalability and efficiency.",
      "Improved UI/UX by building clean, modern, and user-friendly interfaces across platforms.",
    ],
  },

];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="relative group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[25px] top-7 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_rgba(139,92,246,0.6)] z-10" />

      {/* Professional SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="calendar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
      </svg>

      {/* Card */}
      <div className="ml-4 p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 hover:bg-card transition-all duration-300 group-hover:shadow-md">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.role}</h3>
            <p className="text-base font-semibold text-foreground">{exp.company}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold whitespace-nowrap">
              <HiCalendar size={13} fill="url(#calendar-gradient)" />
              {exp.period}
            </span>
            <span className="inline-flex items-center mt-1.5 gap-1.5 text-muted-foreground text-xs font-medium border border-white/5 py-1 px-3 rounded-full bg-secondary/30">
              <HiMapPin size={13} fill="url(#location-gradient)" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-primary/10 mb-4 rounded-full" />

        {/* Bullet Points */}
        <ul className="space-y-2.5 text-left">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed text-left">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span className="text-left">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary italic">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/25 rounded-full" />

          <div className="space-y-10 pl-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
