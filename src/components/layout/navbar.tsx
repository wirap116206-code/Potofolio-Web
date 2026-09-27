"use client";

import Image from "next/image";
import { Download, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="size-5" />
          </Button>

          {/* Logo */}
          <div className="relative size-20 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="RW Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Download CV */}
          <a
            href="/cv/CV-ATS-RicksanWira.docx"
            download="CV-ATS-RicksanWira.docx"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Download className="size-4" />

            <span className="hidden sm:inline">
              Download CV
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}