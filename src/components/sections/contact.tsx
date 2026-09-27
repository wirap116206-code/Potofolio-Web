import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    title: "Email",
    description: "Send me an email",
    value: "wirap116206@gmail.com",
    href: "mailto:wirap116206@mail.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    description: "Let's chat on WhatsApp",
    value: "+62 831-9898-2989",
    href: "https://wa.me/6283198982989",
    icon: MessageCircle,
  },
  {
    title: "GitHub",
    description: "Check out my projects",
    value: "https://github.com/wirap116206-code",
    href: "https://github.com/wirap116206-code",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    description: "Connect with me",
    value: "https://www.linkedin.com/in/ricksan-wira-putra/",
    href: "https://www.linkedin.com/in/ricksan-wira-putra/",
    icon: FaLinkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 relative min-h-screen overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[10%] right-[5%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {/* Section Header */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-px w-8 bg-primary" />

            <span>Get In Touch</span>
          </div>

          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Contact<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Have a project in mind, want to collaborate, or just want to say
            hello? Feel free to reach out through any of the platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Email" ? undefined : "_blank"}
                rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                className="group animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100 + 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>

                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <p className="mt-4 break-all text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 animate-fade-up rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center [animation-delay:600ms]">
          <h3 className="font-heading text-2xl font-semibold">
            Let&apos;s build something together.
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, and
            opportunities to grow and collaborate.
          </p>

          <a
            href="https://wa.me/6283198982989"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg"
          >
            <MessageCircle className="size-4" />
            Chat on WhatsApp
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Thanks for visiting my portfolio. 
          </p>
        </div>
      </div>
    </section>
  );
}
