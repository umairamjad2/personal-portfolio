import { Code, GitBranch, Network, Smartphone } from "lucide-react";

const cards = [
  {
    icon: <Code className="h-5 w-5 text-primary" />,
    title: "Frontend Development",
    desc: "React, Next.js, Tailwind CSS, Redux — building fast, responsive, and beautiful UIs.",
  },
  {
    icon: <Network className="h-5 w-5 text-primary" />,
    title: "Backend & APIs",
    desc: "Node.js, .NET Web API, MongoDB, Firebase — scalable and reliable server-side solutions.",
  },
  {
    icon: <Smartphone className="h-5 w-5 text-primary" />,
    title: "Mobile Development",
    desc: "Flutter & Dart — cross-platform mobile apps with native-like performance.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-primary" />,
    title: "Dev Tools",
    desc: "Git, GitHub, Postman, Figma, VS Code — end-to-end development workflow.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-primary italic">Me</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-primary/50 rounded-full mx-auto" />
        </div>

        {/* Main Row */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="space-y-1">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">Who I Am</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Full-Stack &amp; Mobile Developer
            </h3>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I'm a passionate Full-Stack Developer focused on building clean, scalable, and
            user-friendly web applications using React, Next.js, and modern JavaScript technologies.
            I enjoy transforming complex problems into simple, efficient, and high-performance digital solutions.
          </p>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Alongside frontend development, I build robust backend systems using Node.js and .NET Web APIs,
            and work with MongoDB for database management. I also explore Flutter for developing
            cross-platform mobile applications, enabling consistent experiences across web and mobile platforms.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-wrap gap-3 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm font-medium"
            >
              View Resume
            </a>
          </div> */}
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 hover:bg-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 w-fit mb-4 transition-colors duration-300">
                {card.icon}
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2">{card.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
