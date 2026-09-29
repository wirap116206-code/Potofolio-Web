import { BsGithub } from "react-icons/bs";
import { FolderCode, Palette, Smartphone } from "lucide-react";

import { ProjectImageCarousel } from "@/components/project-image-carousel";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
}


const webProjects: Project[] = [
  {
    title: "Resume",
    description:
      "A personal resume website designed to present my profile, skills, experience, and projects in a clean and modern interface.",

    images: [
      "/resume/res1.jpeg",
      "/resume/res2.jpeg",
      "/resume/res3.jpeg",
      "/resume/res4.jpeg",
      "/resume/res5.jpeg",
    ],

    technologies: [
      "Express",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "PrebuildUI",
      "React",
    ],

    github: "https://github.com/wirap116206-code/resume-app",
  },

  {
    title: "Barberz Admin Pannel",
    description:
      "Barber management application for managing customers, services, orders, payments, and barber operations.",

    images: [
      "/barber/b1.jpeg",
      "/barber/b2.jpeg",
      "/barber/b3.jpeg",
      "/barber/b4.jpeg",
      "/barber/b5.jpeg",
      "/barber/b6.jpeg",
      "/barber/b7.jpeg",
      "/barber/b8.jpeg",
      "/barber/b9.jpeg",
      "/barber/b10.jpeg",
    ],

    technologies: [
      "Express",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "DaisyUI",
    ],

    github: "https://github.com/rickGum/Frontend-barberz",
  },

  {
    title: "RickGram",
    description:
      "A social media application for sharing content and connecting with other users.",

    images: [
      "/rick/ric.jpeg",
      "/rick/ric2.jpeg",
      "/rick/ric3.jpeg",
      "/rick/ric4.jpeg",
      "/rick/ric5.jpeg",
    ],

    technologies: [
      "Express",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "DaisyUI",
    ],

    github: "https://github.com/wirap116206-code/FE-medsos-app",
  },

  {
    title: "Barberz Customer",
    description:
      "Customer-facing barber application for browsing services and interacting with the barber booking system.",

    images: [
      "/barberz/br1.jpeg",
      "/barberz/br2.jpeg",
      "/barberz/br3.jpeg",
      "/barberz/br4.jpeg",
      "/barberz/br5.jpeg",
      "/barberz/br6.jpeg",
      "/barberz/br7.jpeg",
      "/barberz/br8.jpeg",
    ],

    technologies: [
      "Next.js",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "DaisyUI",
      "Socket.IO",
    ],

    github: "https://github.com/rickGum/NextJs-project-5-customer-view",
  },
];

/* =========================================================
   MOBILE APPS
========================================================= */

const mobileProjects: Project[] = [
  {
    title: "RickGram Mobile App",
    description: "A mobile application social media App sharing about your moments",

    images: [
      "/rickm/mr1.jpeg",
      "/rickm/mr2.jpeg",
      "/rickm/mr3.jpeg",
      "/rickm/mr4.jpeg",
      "/rickm/mr5.jpeg",
      "/rickm/mr6.jpeg",
    ],

    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Express", "PostgreSQL"],

    github: "https://github.com/wirap116206-code/Mobile-medsos-app",
  },
  {
    title: "Barberz Admin Mobile App",
    description: "A mobile application admin pannel barber management",

    images: [
      "/barberm/bm1.jpeg",
      "/barberm/bm2.jpeg",
      "/barberm/bm3.jpeg",
      "/barberm/bm4.jpeg",
      "/barberm/bm5.jpeg",
      "/barberm/bm6.jpeg",
      "/barberm/bm7.jpeg",
    ],

    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Express", "PostgreSQL"],

    github: "https://github.com/rickGum/Mobile-barberz",
  },
  {
    title: "Recipe Mobile App",
    description: "A mobile application recipe with dummy json",

    images: ["/recipe/rec1.jpeg", "/recipe/rec2.jpeg", "/recipe/rec3.jpeg"],

    technologies: ["React Native", "Expo", "TypeScript"],

    github: "https://github.com/rickGum/mobile-recipe-app",
  },
  {
    title: "Chatters",
    description: "A simple chat app mobile realtime with socket.io",

    images: [
      "/chat/ch1.jpeg",
      "/chat/ch2.jpeg",
      "/chat/ch3.jpeg",
      "/chat/ch4.jpeg",
      "/chat/ch5.jpeg"
    ],

    technologies: ["React Native", "Expo", "TypeScript", "Socket.io", "Mongo", "Express"],

    github: "https://github.com/rickGum/FE-chat-app-mobile",
  },
];

/* =========================================================
   UI / UX DESIGN
========================================================= */

const uiuxProjects: Project[] = [
  {
    title: "UI/UX Web Design",
    description:
      "User interface and user experience designs created in Figma with a focus on clean layouts and usability.",

    images: ["/design/design.jpeg"],

    technologies: ["Figma", "UI Design", "UX Design"],
  },
  {
    title: "UI/UX Mobile Design",
    description:
      "User interface and user experience designs created in Figma with a focus on clean layouts and usability.",

    images: ["/design/design1.jpeg"],

    technologies: ["Figma", "UI Design", "UX Design"],
  },
  
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group animate-fade-up overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg"
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden bg-white">
        <ProjectImageCarousel images={project.images} title={project.title} />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Project
          </p>

          <h4 className="mt-1.5 font-heading text-xl font-bold tracking-tight">
            {project.title}
            <span className="text-primary">.</span>
          </h4>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
            Built With
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub */}
        {project.github && (
          <div className="mt-5 border-t border-border/60 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              <BsGithub className="size-3.5" />
              GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

interface CategoryHeaderProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

function CategoryHeader({
  icon,
  label,
  title,
  description,
}: CategoryHeaderProps) {
  return (
    <div className="mb-6 flex items-start gap-4">
      {/* Icon */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>

        <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
          <span className="text-primary">.</span>
        </h3>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen scroll-mt-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-px w-8 bg-primary" />

            <span>What I Have Built</span>
          </div>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            A collection of web applications, mobile applications, and UI/UX
            designs I have built while learning and developing my skills.
          </p>
        </div>

        <div className="mt-12">
          <CategoryHeader
            icon={<FolderCode className="size-5" />}
            label="Development"
            title="Web Apps"
            description="Web applications and full-stack projects built with modern web technologies."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {webProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CategoryHeader
            icon={<Smartphone className="size-5" />}
            label="Development"
            title="Mobile Apps"
            description="Mobile applications built with a focus on responsive interfaces and user experience."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {mobileProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CategoryHeader
            icon={<Palette className="size-5" />}
            label="Design"
            title="UI/UX Design"
            description="Interface and user experience designs created through Figma and design exploration."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {uiuxProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 animate-fade-up rounded-2xl border border-primary/15 bg-primary/5 p-5 [animation-delay:500ms]">
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">
              More projects coming soon.
            </span>{" "}
            I am continuously building new projects to improve my skills and
            gain more experience.
          </p>
        </div>
      </div>
    </section>
  );
}
