import Image from "next/image";
import { ArrowDown, Code2, MapPin } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 relative min-h-screen overflow-hidden">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            {/* Small Label */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-px w-8 bg-primary" />
              <span>Hello, I&apos;m</span>
            </div>

            {/* Name */}
            <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight sm:text-6xl">
             Ricksan Wira
              <span className="text-primary">.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold leading-tight text-muted-foreground sm:text-3xl">
              Full-Stack Web &{" "}
              <span className="text-foreground">Mobile Developer</span>
            </h2>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              <span>Indonesia</span>
            </div>

            {/* About Card */}
            <div className="mt-7 rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="leading-7 text-muted-foreground">
                I&apos;m Wira, a Full-Stack Web & Mobile Developer from
                Indonesia.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                I&apos;m passionate about building practical applications that
                solve real-world problems. With a background in Software
                Engineering, I work across frontend, backend, and mobile
                development using technologies such as .
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                My journey started with hands-on learning and continued through
                my internship at{" "}
                <span className="font-medium text-primary">DumbWays</span>,
                where I developed a digital barbershop management application
                and learned how to turn business needs into functional software.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                I&apos;m continuously learning, building, and improving — one
                project at a time. 
              </p>
            </div>

            {/* Tech Highlights */}

            {/* Small Developer Status */}
            <div className="mt-7 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="size-4" />
              </div>

              <span>Learning, building, and growing as a developer.</span>
            </div>
          </div>

          {/* ========================= */}
          {/* IMAGE / PROOF */}
          {/* ========================= */}

          <div className="relative animate-fade-up [animation-delay:200ms]">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />

            {/* Image Card */}
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/persen.jpeg"
                  alt="Wira working on a software project"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Image Caption */}
            <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Code2 className="size-5" />
                </div>

                {/* Text */}
                <div>
                  <p className="font-heading text-sm font-semibold">
                    Software Engineering Journey
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Learning, building, and developing real-world applications
                    through hands-on experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium shadow-lg sm:-right-5">
              <span className="size-2 animate-pulse rounded-full bg-green-500" />
              Open to opportunities
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="#skills"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs uppercase tracking-[0.2em]">
              Scroll to explore
            </span>

            <div className="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5">
              <ArrowDown className="size-4 animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
