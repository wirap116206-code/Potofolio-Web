import Image from "next/image";
import { BriefcaseBusiness, MapPin, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "PT. DumbWays Indonesia Teknologi",
    position: "Full Stack Developer",
    type: "Internship",
    period: "Sep 2026 - Present",
    duration: "1 mo",
    location: "Depok, Sawangan",
    workType: "On-site",
    logo: "/dumbways.png",
    description:
      "During my internship at DumbWays, I developed a digital barbershop management application designed to simplify data management and improve operational efficiency.",
    highlight: {
      image: "/persen.jpeg",
      title: "Presentation about Barberz",
      description:
        "Presenting my barbershop management application and receiving direct feedback and evaluation from the CEO of DumbWays.",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "React Native Expo"
    ],
  },
  {
    company: "PT Basicteknologi Intersolusi Tersinergi",
    position: "Software Engineer",
    type: "Internship",
    period: "Dec 2024 - Present",
    duration: "1 yr 10 mos",
    location: "Remote",
    workType: "Remote",
    logo: "/basic.jpg",
    description:
      "During my internship at PT Basic, I learned a lot about analyzing applications that can be useful for the surrounding environment, stress management, motivation from mentors, and many other things.",
    highlight: {
      image: "/basic.jpeg",
      title: "Customer Relationship Management System Analysis",
      description:
        "Analyzed a CRM project by arranging stages and workflows to gather ideas, feedback, and identify shortcomings.",
    },
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "Figma"
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 relative min-h-screen overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[5%] top-[15%] size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {/* Section Header */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>My Journey</span>
          </div>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Experience<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            My professional experience, projects, and learning journey
            throughout my development career.
          </p>
        </div>

        {/* Experience List */}
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-6 top-8 hidden h-[calc(100%-2rem)] w-px bg-border md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="group relative animate-fade-up"
                style={{
                  animationDelay: `${index * 150 + 150}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[17px] top-8 z-10 hidden size-5 rounded-full border-4 border-background bg-primary shadow md:block" />

                <div className="md:ml-14">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                    {/* Company Header */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      {/* Company Logo */}
                      <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2">
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={56}
                          height={56}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Company Info */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-xl font-semibold">
                          {experience.position}
                        </h3>

                        <p className="mt-1 font-medium text-foreground">
                          {experience.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-4" />
                            {experience.period}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <BriefcaseBusiness className="size-4" />
                            {experience.type}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-4" />
                            {experience.location}
                          </span>

                          <span className="text-muted-foreground">
                            · {experience.workType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 leading-7 text-muted-foreground">
                      {experience.description}
                    </p>

                    {/* Highlight */}
                    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border bg-background/60 p-3 sm:flex-row">
                      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-32">
                        <Image
                          src={experience.highlight.image}
                          alt={experience.highlight.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <h4 className="font-heading text-sm font-semibold">
                          {experience.highlight.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {experience.highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 animate-fade-up rounded-2xl border border-primary/20 bg-primary/5 p-5 [animation-delay:500ms]">
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">
              Still growing.
            </span>{" "}
            Every experience gives me an opportunity to learn, build
            better applications, and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}