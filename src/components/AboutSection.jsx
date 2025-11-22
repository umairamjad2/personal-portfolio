import { Code, GitBranch, Network } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About
          <span className="text-primary pl-3">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Passionate Web Developer
            </h3>
            {/* <p className="text-sm sm:text-base text-muted-foreground">
              I’m a passionate Front-End Web Developer with expertise in
              creating responsive and user-friendly web applications. I love
              turning ideas into visually appealing, functional designs using
              modern technologies like React, Tailwind CSS, and JavaScript.
            </p> */}
            {/* <p className="text-sm sm:text-base text-muted-foreground">
              I optimize web applications for speed, scalability, and
              performance using best practices and modern tools. Always eager to
              learn and grow, I aim to deliver clean, efficient, and scalable
              solutions that enhance user experience.
            </p> */}
            <p className="text-sm sm:text-base text-muted-foreground">
              I’m a dedicated Front-End Web Developer who loves turning ideas
              into clean, responsive, and user-friendly digital experiences.
              Using modern technologies like React, Next.js, JavaScript, and
              Tailwind CSS, I build visually appealing interfaces that
              prioritize usability, performance, and seamless interaction.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Alongside front-end skills, I’m expanding into .NET Web API to
              better understand backend workflows and build scalable
              applications. This improves how I integrate APIs, manage data
              flow, and contribute to full-stack development when needed.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              I focus on optimizing applications for speed, scalability, and
              smooth performance by following best practices. Eager to learn and
              grow, I aim to deliver clean, maintainable, and high-quality
              solutions that elevate the user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="Resume.pdf"
                // href={`${import.meta.env.BASE_URL}UmairAmjadResume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {[
              {
                icon: <Code />,
                title: "React Expertise",
                // desc: "I specialize in creating dynamic and interactive user interfaces with React and Tailwind CSS to deliver modern web experiences.",
                desc: "I specialize in building dynamic, interactive, and high-performance user interfaces using React and Next.js, paired with Tailwind CSS to deliver modern, SEO-friendly, and responsive web applications with seamless user experiences.",
              },
              {
                icon: <Network />,
                title: "API Integration",
                desc: "Proficient in integrating RESTful APIs and efficiently managing JSON data to enable real-time, data-driven features in React and Next.js applications, ensuring smooth and scalable functionality.",
              },
              {
                icon: <GitBranch />,
                title: "Version Control",
                desc: "Experienced with Git and GitHub for personal version control and hosting projects, ensuring smooth deployment and easy project management.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="gradient-border p-4 sm:p-6 card-hover"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
