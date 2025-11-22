import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Blog Application",
    description:
      "A modern blog app built with Next.js, MongoDB, and custom APIs. Focused on speed, scalability, and a clean user experience. Every post, every line of code — crafted with passion.",
    image: `${import.meta.env.BASE_URL}Projects/Deshify-blog.png`,
    tags: ["Next.js", "MongoDB", "API"],
    demoUrl: "https://lnkd.in/d4xD3x6e",
    githubUrl: "https://lnkd.in/d4xD3x6e",
  },
  {
    id: 2,
    title: "CRUD Admin Dashboard",
    description:
      "A professional full-stack CRUD Admin Dashboard built with React, .NET API, and Tailwind CSS. Designed for efficient data management with a sleek UI and seamless backend integration.",
    image: `${import.meta.env.BASE_URL}Projects/Crud-dashboard.png`, // update if you have an image
    tags: ["React", ".NET API", "Tailwind CSS"],
    demoUrl: "https://github.com/umairamjad2/CRUD-Person", // add live demo if available
    githubUrl: "https://github.com/umairamjad2/CRUD-Person",
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
    title: "E‑Commerce Website",
    description:
      "A modern e-commerce website built with the V0 no-code platform, featuring a clean, user-friendly UI. Includes product browsing, cart functionality, and responsive design for all devices.",

    image: `${import.meta.env.BASE_URL}Projects/ecommerce-website.png`, // replace with your actual image path
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://v0-e-commerce-website-gules-five.vercel.app/", // your live site
    githubUrl: "https://github.com/umairamjad2/v0-e-commerce-website", // your GitHub link
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-[10px] sm:text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-[10px] sm:text-sm md:text-sm mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 sm:space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-xs sm:text-sm md:text-base"
            href="https://github.com/umairamjad2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-16 sm:py-20 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>
//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {projects.map((project, key) => (
//             <div
//               key={key}
//               className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20  text-secondary-foreground">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300 "
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300 "
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-12">
//           <a
//             target="_blank"
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             href="https://github.com/umairamjad2"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
