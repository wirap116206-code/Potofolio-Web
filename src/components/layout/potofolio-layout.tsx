"use client";

import { useState } from "react";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidebar";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-background">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:pl-72">
        <Navbar
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <main>{children}</main>
      </div>
    </div>
  );
}