"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "about";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        if (section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}