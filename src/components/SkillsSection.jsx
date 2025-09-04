import React, { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  //Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Redux / Redux Toolkit", level: 75, category: "frontend" },

  //Tools
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Bootstrap", level: 90, category: "tools" },
  { name: "Firebase", level: 70, category: "tools" },
  { name: "Vite", level: 85, category: "tools" },
  { name: "React Icons", level: 85, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-2 sm:mb-4 text-left">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 sm:h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 sm:h-2.5 rounded-full origin-left animate-[glow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-[10px] sm:text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default SkillsSection;
