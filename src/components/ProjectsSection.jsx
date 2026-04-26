import { ArrowRight } from "lucide-react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import React from "react";
const projects = [
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat application built with the MERN stack and Socket.IO. Features secure JWT authentication, instant messaging, online/offline user status, and profile management. Deployed using Railway (backend) and Vercel (frontend).",

    image: `${import.meta.env.BASE_URL}Projects/chat-app.png`, // make sure this image exists
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    demoUrl: "https://chat-app-frontend-gules.vercel.app/", // your frontend live link
    githubUrl: "https://github.com/umairamjad2/ChatApp-Frontend", // your repo
  },
  {
    id: 1,
    title: "Blog Application",
    description:
      "A modern blog app built with Next.js, MongoDB, and custom APIs. Focused on speed, scalability, and a clean user experience. Every post, every line of code — crafted with passion.",
    image: `${import.meta.env.BASE_URL}Projects/Deshify-blog.png`,
    tags: ["Next.js", "MongoDB", "API"],
    demoUrl: "https://deshify-blog-app.vercel.app/",
    githubUrl: "https://github.com/umairamjad2/deshify-blog-app",
  },


  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A Netflix-style streaming app built with React.js and Firebase. Features user authentication, real movie data from TMDB API, and a responsive, smooth interface designed for seamless viewing.",
    image: `${import.meta.env.BASE_URL}Projects/netflix-clone.png`,
    tags: ["React", "Firebase", "TMDB API"],
    demoUrl: "https://umairamjad2.github.io/Netflixclone/",
    githubUrl: "https://github.com/umairamjad2/Netflixclone",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description:
      "Amazon-like e-commerce app built with React.js. Features product browsing, cart management, and a fully responsive, user-friendly interface designed for smooth shopping across devices.",
    image: `${import.meta.env.BASE_URL}Projects/amazon-clone.png`,
    tags: ["React", "CSS", "JavaScript"],
    demoUrl: "https://umairamjad2.github.io/amazonclone/",
    githubUrl: "https://github.com/umairamjad2/amazonclone",
  },
  {
    id: 5,
    title: "CRUD Admin Dashboard",
    description:
      "A professional full-stack CRUD Admin Dashboard built with React, .NET API, and Tailwind CSS. Designed for efficient data management with a sleek UI and seamless backend integration.",
    image: `${import.meta.env.BASE_URL}Projects/Crud-dashboard.png`, // update if you have an image
    tags: ["React", ".NET API", "Tailwind CSS"],
    demoUrl: "https://github.com/umairamjad2/CRUD-Person", // add live demo if available
    githubUrl: "https://github.com/umairamjad2/CRUD-Person",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Real-time weather app built with HTML, CSS, and JavaScript. Delivers accurate forecasts via APIs with an interactive, clean, and responsive interface for all devices.",
    image: `${import.meta.env.BASE_URL}Projects/weather-app.png`,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    demoUrl: "https://umairamjad2.github.io/weather-app/",
    githubUrl: "https://github.com/umairamjad2/weather-app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Featured <span className="text-primary italic">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-lg bg-secondary text-secondary-foreground border border-border/50 tracking-wide uppercase shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-muted-foreground/90 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Footer / Actions */}
                <div className="mt-6 flex justify-between items-center border-t border-border pt-5">
                  {/* SVG Gradient Definition */}
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id="project-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </svg>

                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 group/link"
                      title="Live Demo"
                    >
                      <HiOutlineExternalLink size={20} stroke="url(#project-icon-gradient)" className="group-hover/link:scale-110 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 group/link"
                      title="Source Code"
                    >
                      <SiGithub size={18} fill="url(#project-icon-gradient)" className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            target="_blank"
            className="cosmic-button mx-auto text-xs sm:text-sm md:text-base"
            href="https://github.com/umairamjad2"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
