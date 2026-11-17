import { ArrowRight } from "lucide-react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import React from "react";
const projects = [
  {
    id: 7,
    title: "TaskNest: Full-Stack Task Manager",
    description:
      "A full-stack task manager with a drag-and-drop Kanban board, progress dashboard and production-grade auth: email verification, password reset, multi-device sessions with rotating refresh tokens, and role-based access. Try the one-click demo, no sign-up needed.",
    image: `${import.meta.env.BASE_URL}Projects/tasknest.png`,
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    demoUrl: "https://nest-frontend-apis.vercel.app/",
    githubUrl: "https://github.com/umairamjad2/nest-frontend-apis",
    featured: true,
  },
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
    image: `${import.meta.env.BASE_URL}Projects/DeshifyImg.png`,
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
              className="group relative rounded-3xl p-px bg-gradient-to-br from-border via-border to-border hover:from-primary/70 hover:via-primary/20 hover:to-primary/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)]"
            >
              <div className="flex flex-col h-full rounded-[calc(1.5rem-1px)] bg-card overflow-hidden">
                {/* Image */}
                <div className="p-3 pb-0">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                    {project.featured && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                        Latest
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-5 grid grid-cols-2 gap-2.5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 hover:shadow-[0_0_16px_hsl(var(--primary)/0.5)] transition-all duration-300"
                    >
                      <HiOutlineExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-secondary/60 text-foreground text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      <SiGithub size={15} />
                      Code
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
