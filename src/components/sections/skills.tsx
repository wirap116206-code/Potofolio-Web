import {
  SiCss,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    description: "Core technologies I use to build applications.",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    description: "Tools I use to build modern web and mobile applications.",
    skills: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React Native (Expo)",
        icon: SiReact,
      },
    ],
  },
  {
    title: "Databases",
    description: "Databases I have worked with in application development.",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },
  {
    title: "Software & Tools",
    description: "Tools I use for development, testing, and design.",
    skills: [
      {
        name: "VS Code",
        icon: VscVscode,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen scroll-mt-16 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[10%] top-[15%] size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {/* Section Header */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>What I Work With</span>
          </div>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Skills<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Technologies and tools I use to build, develop, and maintain modern
            web and mobile applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fade-up min-w-0 rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                animationDelay: `${categoryIndex * 100 + 150}ms`,
              }}
            >
              {/* Category Header */}
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-semibold">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
                    >
                      {/* Icon */}
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon className="size-5" />
                      </div>

                      {/* Skill Name */}
                      <span className="min-w-0 whitespace-normal break-words text-sm font-medium leading-5">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 animate-fade-up rounded-2xl border border-primary/20 bg-primary/5 p-5 [animation-delay:600ms]">
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">
              Always learning.
            </span>{" "}
            I continuously explore new technologies and improve my skills
            through hands-on projects and real-world experience.
          </p>
        </div>
      </div>
    </section>
  );
}