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
            <p className="text-sm sm:text-base text-muted-foreground">
              I’m a passionate Front-End Web Developer with expertise in
              creating responsive and user-friendly web applications. I love
              turning ideas into visually appealing, functional designs using
              modern technologies like React, Tailwind CSS, and JavaScript.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              I optimize web applications for speed, scalability, and
              performance using best practices and modern tools. Always eager to
              learn and grow, I aim to deliver clean, efficient, and scalable
              solutions that enhance user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                // href="/UmairAmjadResume.pdf"
                href={`${import.meta.env.BASE_URL}UmairAmjadResume.pdf`}
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
                desc: "I specialize in creating dynamic and interactive user interfaces with React and Tailwind CSS to deliver modern web experiences.",
              },
              {
                icon: <Network />,
                title: "API Integration",
                desc: "Integrating RESTful APIs and managing JSON data efficiently to power dynamic, real-time features within React applications.",
              },
              {
                icon: <GitBranch />,
                title: "Version Control",
                desc: "I use Git and GitHub for efficient version control, collaborative development, and smooth project deployment.",
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
