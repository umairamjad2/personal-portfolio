import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiSocketdotio,
  SiPython,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiPostman,
  SiVite,
  SiGithub,
  SiFigma,
  SiDotnet,
  SiCplusplus,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { Code, Database, Server, Cpu, Coffee, Smartphone, Layout, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: "CSS3", icon: <SiCss className="w-5 h-5 text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
      { name: "React", icon: <SiReact className="w-5 h-5 text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-foreground" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-teal-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5 text-purple-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5 text-violet-600" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="w-5 h-5 text-foreground" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="w-5 h-5 text-foreground" /> },
      { name: "WebSocket", icon: <Code className="w-5 h-5 text-green-500" /> },
      { name: "C# / .NET", icon: <SiDotnet className="w-5 h-5 text-indigo-500" /> },
      { name: "ASP.NET Web API", icon: <SiDotnet className="w-5 h-5 text-blue-600" /> },
      { name: "Java", icon: <Coffee className="w-5 h-5 text-orange-600" /> },
      { name: "Python", icon: <SiPython className="w-5 h-5 text-yellow-500" /> },
      { name: "Entity Framework", icon: <Database className="w-5 h-5 text-red-500" /> },
      { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-amber-500" /> },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-sky-500" /> },
      { name: "Dart", icon: <SiDart className="w-5 h-5 text-blue-400" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Postman", icon: <SiPostman className="w-5 h-5 text-orange-500" /> },
      { name: "Vite", icon: <SiVite className="w-5 h-5 text-purple-400" /> },
      { name: "Git / GitHub", icon: <SiGithub className="w-5 h-5 text-foreground" /> },
      { name: "Figma", icon: <SiFigma className="w-5 h-5 text-pink-500" /> },
      { name: "VS Code", icon: <Layout className="w-5 h-5 text-blue-500" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary italic">Skills</span>
        </h2>

        {/* Groups */}
        <div className="space-y-14">
          {skillGroups.map((group, i) => (
            <div key={i} className="space-y-6">

              {/* Group Title + Divider */}
              <div className="flex items-center gap-4">
                <h3 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
                  {group.title}
                </h3>
                <div className="h-[2px] w-full bg-primary/20 rounded-full" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2 p-3 rounded-xl
                    bg-card border border-border shadow-sm
                    hover:border-primary/40 hover:bg-card hover:shadow-md
                    transition-all duration-300 group hover:-translate-y-1 min-w-0"
                  >
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300 shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold leading-tight break-words min-w-0">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
