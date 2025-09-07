import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "An Amazon-like clone with product browsing, cart features, and responsive design.",
    // image: "/Projects/amazon-clone.png",
    image: `${import.meta.env.BASE_URL}Projects/amazon-clone.webp`,
    tags: ["React", "CSS", "JavaScript"],
    demoUrl: "https://umairamjad2.github.io/amazonclone/",
    githubUrl: "https://github.com/umairamjad2/amazonclone",
  },

  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A Netflix-inspired clone featuring dynamic movie listings, trailers, and a responsive UI.",
    // image: "/Projects/netflix-clone.png",
    image: `${import.meta.env.BASE_URL}Projects/netflix-clone.webp`,
    tags: ["React", "Firebase", "TMDB API"],
    demoUrl: "https://umairamjad2.github.io/Netflixclone/",
    githubUrl: "https://github.com/umairamjad2/Netflixclone",
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "A Weather app delivering real-time forecasts with an interactive and clean interface.",
    // image: "/Projects/weather-app.png",
    image: `${import.meta.env.BASE_URL}Projects/weather-app.webp`,
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
