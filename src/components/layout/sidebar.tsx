"use client";

import Image from "next/image";

import {
  BriefcaseBusiness,
  Code2,
  FolderGit2,
  Mail,
  User,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { useActiveSection } from "@/components/hooks/use-active-section";

const navigation = [
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/wirap116206-code",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ricksan-wira-putra/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ricksanwira/",
    icon: FaInstagram,
  },
];

export function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border bg-background lg:flex lg:flex-col">
      <div className="flex h-full flex-col p-6">

        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <div className="relative size-50 overflow-hidden rounded-full border-2 border-primary/30">
            <Image
              src="/profile.png"
              alt="Ricksan Wira"
              fill
              priority
              className="object-cover"
            />
          </div>

          <h1 className="mt-4 font-heading text-xl font-bold">
            Ricksan Wira
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Fullstack Developer
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Navigation */}
        <nav>
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Icon
                      className={`size-4 transition-transform duration-300 ${
                        isActive
                          ? "text-primary"
                          : "group-hover:scale-110"
                      }`}
                    />

                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Media */}
        <div className="mt-auto">
          <div className="mb-3 h-px bg-border" />

          <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Social Media
          </p>

          <div className="flex items-center gap-2 px-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-lg p-2 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}